import { NestFactory } from '@nestjs/core';
import { NotificationMicroserviceModule } from './notification-microservice.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    NotificationMicroserviceModule,
    {
      transport: Transport.KAFKA,
      options: {
        client: {
          brokers: ['localhost:9092'],
        },
        consumer: {
          groupId: 'notification-consumer-group',
        },
      },
    },
  );
  await app.listen();
}
bootstrap();
