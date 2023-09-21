import { Controller, Get } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  @MessagePattern({ cmd: 'orders' })
  async getNewOrder(userName: string): Promise<string> {
    return `Order created by: ${userName}`;
  }
}
