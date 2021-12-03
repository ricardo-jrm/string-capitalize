import { stringCapitalize } from './index';

describe('capitalizes strings', () => {
  const lorem = 'lorem ipsum dolor sit amet';

  it('should capitalize the 1st word of "lorem ipsum dolor sit amet"', () => {
    expect(stringCapitalize(lorem)).toBe('Lorem ipsum dolor sit amet');
  });

  it('should capitalize the all words of "lorem ipsum dolor sit amet"', () => {
    expect(stringCapitalize(lorem, true)).toBe('Lorem Ipsum Dolor Sit Amet');
  });
});
