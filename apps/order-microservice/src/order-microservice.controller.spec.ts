import { Test, TestingModule } from '@nestjs/testing';
import { OrderMicroserviceController } from './order-microservice.controller';
import { OrderMicroserviceService } from './order-microservice.service';

describe('OrderMicroserviceController', () => {
  let orderMicroserviceController: OrderMicroserviceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [OrderMicroserviceController],
      providers: [OrderMicroserviceService],
    }).compile();

    orderMicroserviceController = app.get<OrderMicroserviceController>(OrderMicroserviceController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(orderMicroserviceController.getHello()).toBe('Hello World!');
    });
  });
});
