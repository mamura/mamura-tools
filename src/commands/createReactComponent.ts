import * as vscode from 'vscode';

import { FileService } from '../services/FileService';
import { ReactComponentTemplateService } from '../services/ReactComponentTemplateService';
import { toPascalCase, validateComponentName } from '../services/NameService';

export async function createReactComponent(resource?: vscode.Uri): Promise<void> {
  const fileService = new FileService();
  const templateService = new ReactComponentTemplateService();

  const targetDirectory = await fileService.resolveTargetDirectory(resource);

  if (!targetDirectory) {
    return;
  }

  const informedName = await vscode.window.showInputBox({
    title: 'Criar componente React',
    prompt: 'Informe o nome do componente',
    placeHolder: 'Badge',
    ignoreFocusOut: true,
    validateInput(value) {
      return validateComponentName(value);
    },
  });

  if (!informedName) {
    return;
  }

  const componentName = toPascalCase(informedName);

  if (!componentName) {
    vscode.window.showErrorMessage('Não foi possível determinar o nome do componente.');

    return;
  }

  const componentDirectory = vscode.Uri.joinPath(targetDirectory, componentName);

  const directoryExists = await fileService.pathExists(componentDirectory);

  if (directoryExists) {
    vscode.window.showErrorMessage(`A pasta "${componentName}" já existe.`);

    return;
  }

  try {
    await fileService.ensureDirectory(componentDirectory);

    const files = templateService.generateFiles(componentName);

    for (const [filename, content] of Object.entries(files)) {
      const fileUri = vscode.Uri.joinPath(componentDirectory, filename);

      await fileService.writeFile(fileUri, content);
    }

    await fileService.openComponentFile(componentDirectory, componentName);

    vscode.window.showInformationMessage(`Componente ${componentName} criado com sucesso.`);
  } catch (error) {
    await fileService.removeDirectory(componentDirectory);

    const message = error instanceof Error ? error.message : 'Ocorreu um erro desconhecido.';

    vscode.window.showErrorMessage(`Não foi possível criar o componente: ${message}`);
  }
}
