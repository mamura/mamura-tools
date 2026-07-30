import * as vscode from 'vscode';

import { registerCreateComponentCommand } from './commands/createComponent';

export function activate(context: vscode.ExtensionContext): void {
  registerCreateComponentCommand(context);
}

export function deactivate(): void {
  // No-op
}