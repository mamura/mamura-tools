import * as vscode from 'vscode';

import { createReactComponent } from './createReactComponent';

export function registerCreateComponentCommand(context: vscode.ExtensionContext): void {
  const disposable = vscode.commands.registerCommand(
    'mamuraTools.createReactComponent',
    async (resource?: vscode.Uri) => {
      await createReactComponent(resource);
    },
  );

  context.subscriptions.push(disposable);
}
