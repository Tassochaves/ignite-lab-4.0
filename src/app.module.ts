import { Module } from '@nestjs/common';
import { AppController } from './infra/app.controller';
import { AppService } from './infra/app.service';
import { PrismaModule } from './infra/prisma/prisma.module';
import { NotificationModule } from './notification/notification.module';

@Module({
  imports: [PrismaModule, NotificationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
