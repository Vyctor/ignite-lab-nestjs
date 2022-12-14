import { Content } from './content';

describe('Entity Content Unit Test', () => {
  test('it should be able to create a notification content', () => {
    const content = new Content('This is a test content');

    expect(content).toBeTruthy();
    expect(content.value).toEqual('This is a test content');
  });

  test('it should not be able to create a notification content with less than 5 characters', () => {
    expect(() => new Content('test')).toThrow(
      'Content length must be between 5 and 240 characters.',
    );
  });

  test('it should not be able to create a notification content with more than 240 characters', () => {
    expect(() => new Content('a'.repeat(241))).toThrow(
      'Content length must be between 5 and 240 characters.',
    );
  });
});
