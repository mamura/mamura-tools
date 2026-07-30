export class ReactComponentTemplateService {
  generateFiles(componentName: string): Record<string, string> {
    return {
      [`${componentName}.tsx`]: this.createComponentTemplate(componentName),
      [`${componentName}.test.tsx`]: this.createComponentTestTemplate(componentName),
      [`${componentName}.types.ts`]: this.createComponentTypesTemplate(componentName),
      'index.ts': this.createIndexTemplate(componentName),
    };
  }

  private createComponentTemplate(componentName: string): string {
    return `import type { ${componentName}Props } from './${componentName}.types';

export function ${componentName}({
  children,
}: ${componentName}Props) {
  return (
    <div>
      {children}
    </div>
  );
}
`;
  }

  private createComponentTypesTemplate(componentName: string): string {
    return `import type { ReactNode } from 'react';

export interface ${componentName}Props {
  children?: ReactNode;
}
`;
  }

  private createComponentTestTemplate(componentName: string): string {
    return `import { render, screen } from '@testing-library/react';

import { ${componentName} } from './${componentName}';

describe('${componentName}', () => {
  it('should render correctly', () => {
    render(
      <${componentName}>
        Conteúdo
      </${componentName}>,
    );

    expect(
      screen.getByText('Conteúdo'),
    ).toBeInTheDocument();
  });
});
`;
  }

  private createIndexTemplate(componentName: string): string {
    return `export { ${componentName} } from './${componentName}';
export type { ${componentName}Props } from './${componentName}.types';
`;
  }
}
