import { modifyBackgroundColor } from '../src';
import { DEFAULT_THEME } from '../src/config';

describe('function test', () => {
  it('modify background color', () => {
    expect(modifyBackgroundColor({r: 255, g: 255, b: 255, a: 1}, DEFAULT_THEME)).toEqual('#181a1b');
  })
})