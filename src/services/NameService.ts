export function validateComponentName(value: string): string | undefined {
  const normalizedValue = value.trim();

  if (!normalizedValue) {
    return 'Informe o nome do componente.';
  }

  if (!/^[A-Za-z0-9 _-]+$/.test(normalizedValue)) {
    return 'Use apenas letras, números, espaços, hífen ou underscore.';
  }

  const withoutSeparators = normalizedValue.replace(/[ _-]+/g, '');

  if (!withoutSeparators || !/^[A-Za-z]/.test(withoutSeparators)) {
    return 'O nome deve começar com uma letra.';
  }

  return undefined;
}

export function toPascalCase(value: string): string {
  const normalizedValue = value.trim();

  if (!normalizedValue) {
    return '';
  }

  const withSpaces = normalizedValue
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
    .replace(/([A-Z]+)([A-Z][a-z])/g, '$1 $2');

  return withSpaces
    .split(/[\s_-]+/)
    .filter(Boolean)
    .map((word) => {
      const lowerCasedWord = word.toLowerCase();

      return lowerCasedWord.charAt(0).toUpperCase() + lowerCasedWord.slice(1);
    })
    .join('');
}
