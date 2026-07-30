import { strict as assert } from 'assert';
import { describe, it } from 'mocha';

import { toPascalCase, validateComponentName } from '../services/NameService';

describe('NameService', () => {
  it('converts badge to Badge', () => {
    assert.strictEqual(toPascalCase('badge'), 'Badge');
  });

  it('converts user-avatar to UserAvatar', () => {
    assert.strictEqual(toPascalCase('user-avatar'), 'UserAvatar');
  });

  it('converts user_avatar to UserAvatar', () => {
    assert.strictEqual(toPascalCase('user_avatar'), 'UserAvatar');
  });

  it('converts user avatar to UserAvatar', () => {
    assert.strictEqual(toPascalCase('user avatar'), 'UserAvatar');
  });

  it('preserves UserAvatar', () => {
    assert.strictEqual(toPascalCase('UserAvatar'), 'UserAvatar');
  });

  it('rejects empty names', () => {
    assert.strictEqual(validateComponentName(''), 'Informe o nome do componente.');
  });

  it('rejects names with invalid characters', () => {
    assert.strictEqual(
      validateComponentName('User@Avatar'),
      'Use apenas letras, números, espaços, hífen ou underscore.',
    );
  });
});
