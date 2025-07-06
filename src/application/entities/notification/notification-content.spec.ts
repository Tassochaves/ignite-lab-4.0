import { NotificationContent } from './notification-content';

describe('Notificação de conteudo', () => {
  it('Deve ser capaz de criar um conteúdo de notificação', () => {
    const content = new NotificationContent('Você recebeu uma nova mensagem');

    expect(content).toBeTruthy();
  });

  it('Não deve ser capaz de criar um conteúdo de notificação com menos de 5 caracteres', () => {
    expect(() => new NotificationContent('Vvv')).toThrow();
  });

  it('Não deve ser capaz de criar um conteúdo de notificação com mais de 240 caracteres', () => {
    expect(() => new NotificationContent('V'.repeat(241))).toThrow();
  });
});
