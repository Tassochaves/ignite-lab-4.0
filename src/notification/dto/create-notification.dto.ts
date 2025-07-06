import { IsNotEmpty, IsUUID } from 'class-validator';
import { UUID } from 'node:crypto';

export class CreateNotificationDto {
  @IsNotEmpty()
  content: string;

  @IsNotEmpty()
  category: string;

  @IsNotEmpty()
  @IsUUID()
  recipientId: string;
}
