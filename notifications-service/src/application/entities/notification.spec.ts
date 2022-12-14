import { Content } from './content';
import { Notification } from './notification';

describe('Entity Notification Unit Test', () => {
  test('it should be able to create a notification', () => {
    const notification = new Notification({
      recipientId: '123',
      content: new Content('This is a test content'),
      category: 'test',
    });

    expect(notification).toBeTruthy();
    expect(notification.recipientId).toEqual('123');
    expect(notification.content.value).toEqual('This is a test content');
    expect(notification.category).toEqual('test');
    expect(notification.createdAt).toBeInstanceOf(Date);
  });
});
