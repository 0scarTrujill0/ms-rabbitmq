import { Module } from '@nestjs/common';
import { AppController } from './rabbitmq/controllers/app.controller';
import { AppService } from './rabbitmq/services/app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [ClientsModule.register([
    {
      name: 'ORDERS_SERVICE',
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://localhost:5672'],
        queue: 'orders_queue',
        queueOptions: {
          durable: false
        },
      },
    },
  ]),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
