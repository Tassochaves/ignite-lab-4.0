import { Notification } from './notification';
import { NotificationContent } from './notification-content';

describe('Notificação', () => {
  it('Deve ser capaz de criar uma notificação', () => {
    const notification = new Notification({
      content: new NotificationContent('Acima de 5 caracteres'),
      category: 'social',
      recipientId: 'uuid-uuid-uuid',
    });

    expect(notification).toBeTruthy();
  });
});
