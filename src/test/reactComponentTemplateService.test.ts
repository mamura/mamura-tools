import { strict as assert } from 'assert';
import { describe, it } from 'mocha';

import { ReactComponentTemplateService } from '../services/ReactComponentTemplateService';

describe('ReactComponentTemplateService', () => {
  it('generates the four files with correct content', () => {
    const service = new ReactComponentTemplateService();
    const files = service.generateFiles('Badge');

    assert.deepStrictEqual(Object.keys(files), ['Badge.tsx', 'Badge.test.tsx', 'Badge.types.ts', 'index.ts']);
    assert.match(files['Badge.tsx'] ?? '', /export function Badge/);
    assert.match(files['Badge.test.tsx'] ?? '', /describe\('Badge'/);
    assert.match(files['Badge.types.ts'] ?? '', /export interface BadgeProps/);
    assert.match(files['index.ts'] ?? '', /export \{ Badge \} from '\.\/Badge';/);
    assert.match(files['Badge.types.ts'] ?? '', /export interface BadgeProps/);
    assert.match(files['Badge.types.ts'] ?? '', /ReactNode/);
  });
});
