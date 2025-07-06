import { Injectable } from '@nestjs/common';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { randomUUID } from 'node:crypto';

@Injectable()
export class NotificationService {
  constructor(private prismaService: PrismaService) {}

  async create(createNotificationDto: CreateNotificationDto) {
    return await this.prismaService.notification.create({
      data: {
        id: randomUUID(),
        content: createNotificationDto.content,
        category: createNotificationDto.category,
        recipientId: randomUUID(),
      },
    });
  }

  findAll() {
    return this.prismaService.notification.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} notification`;
  }

  update(id: number, updateNotificationDto: UpdateNotificationDto) {
    return `This action updates a #${id} notification`;
  }

  remove(id: number) {
    return `This action removes a #${id} notification`;
  }
}
