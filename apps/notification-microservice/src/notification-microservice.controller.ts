import { Controller, Get } from '@nestjs/common';
import { NotificationMicroserviceService } from './notification-microservice.service';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class NotificationMicroserviceController {
  constructor(
    private readonly notificationMicroserviceService: NotificationMicroserviceService,
  ) {}

  @Get()
  getHello(): string {
    return this.notificationMicroserviceService.getHello();
  }

  @MessagePattern('order-created')
  sendOrderCreateNotification(@Payload() data: any) {
    console.log(`[Notification Service] Sending Order Created Email`, data);
  }

  @MessagePattern('payment-succeed')
  sendPaymentSucceedNotificaion(@Payload() data: any) {
    console.log(`[Notification Service] Sending Payment Succeed Email`, data);
  }
}
