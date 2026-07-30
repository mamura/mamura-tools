import * as vscode from 'vscode';

export class FileService {
  async resolveTargetDirectory(resource?: vscode.Uri): Promise<vscode.Uri | undefined> {
    if (resource) {
      const resourceType = await this.getResourceType(resource);

      if (resourceType === vscode.FileType.Directory) {
        return resource;
      }

      return vscode.Uri.joinPath(resource, '..');
    }

    const workspaceFolders = vscode.workspace.workspaceFolders;

    if (!workspaceFolders?.length) {
      vscode.window.showErrorMessage(
        'Abra uma pasta ou workspace antes de criar um componente.',
      );

      return undefined;
    }

    if (workspaceFolders.length === 1) {
      return workspaceFolders[0].uri;
    }

    const selectedWorkspace = await vscode.window.showWorkspaceFolderPick({
      placeHolder: 'Escolha o workspace onde o componente será criado',
    });

    return selectedWorkspace?.uri;
  }

  async pathExists(resource: vscode.Uri): Promise<boolean> {
    try {
      await vscode.workspace.fs.stat(resource);

      return true;
    } catch {
      return false;
    }
  }

  async ensureDirectory(resource: vscode.Uri): Promise<void> {
    await vscode.workspace.fs.createDirectory(resource);
  }

  async writeFile(resource: vscode.Uri, content: string): Promise<void> {
    const encoder = new TextEncoder();

    await vscode.workspace.fs.writeFile(resource, encoder.encode(content));
  }

  async removeDirectory(resource: vscode.Uri): Promise<void> {
    await vscode.workspace.fs.delete(resource, { recursive: true, useTrash: false });
  }

  async openComponentFile(componentDirectory: vscode.Uri, componentName: string): Promise<void> {
    const componentFileUri = vscode.Uri.joinPath(componentDirectory, `${componentName}.tsx`);
    const document = await vscode.workspace.openTextDocument(componentFileUri);

    await vscode.window.showTextDocument(document);
  }

  private async getResourceType(resource: vscode.Uri): Promise<vscode.FileType | undefined> {
    try {
      const stat = await vscode.workspace.fs.stat(resource);

      return stat.type;
    } catch {
      return undefined;
    }
  }
}
