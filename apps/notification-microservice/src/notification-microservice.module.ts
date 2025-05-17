import { Module } from '@nestjs/common';
import { NotificationMicroserviceController } from './notification-microservice.controller';
import { NotificationMicroserviceService } from './notification-microservice.service';

@Module({
  imports: [],
  controllers: [NotificationMicroserviceController],
  providers: [NotificationMicroserviceService],
})
export class NotificationMicroserviceModule {}
