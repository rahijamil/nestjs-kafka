import { Test, TestingModule } from '@nestjs/testing';
import { NotificationMicroserviceController } from './notification-microservice.controller';
import { NotificationMicroserviceService } from './notification-microservice.service';

describe('NotificationMicroserviceController', () => {
  let notificationMicroserviceController: NotificationMicroserviceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [NotificationMicroserviceController],
      providers: [NotificationMicroserviceService],
    }).compile();

    notificationMicroserviceController = app.get<NotificationMicroserviceController>(NotificationMicroserviceController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(notificationMicroserviceController.getHello()).toBe('Hello World!');
    });
  });
});
