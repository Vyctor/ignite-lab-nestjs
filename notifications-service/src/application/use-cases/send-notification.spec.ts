import { SendNotification } from './send-notification';

describe('Send Notification Usecase Unit Test', () => {
  test('it should be able to send a notification', async () => {
    const mockNotificationsRepository = {
      mockDatabase: new Array<Notification>(),
      create: jest.fn(async (notification) => {
        mockNotificationsRepository.mockDatabase.push(notification);
      }),
    };

    const usecase = new SendNotification(mockNotificationsRepository);

    const { notification } = await usecase.execute({
      recipientId: '123',
      content: 'Hello World',
      category: 'welcome',
    });

    expect(notification).toBeTruthy();
    expect(notification.recipientId).toBe('123');
    expect(notification.content.value).toBe('Hello World');
    expect(notification.category).toBe('welcome');
    expect(mockNotificationsRepository.mockDatabase.length).toBe(1);
    expect(mockNotificationsRepository.mockDatabase[0]).toBe(notification);
  });
});
