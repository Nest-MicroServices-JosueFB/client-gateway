import { Module } from '@nestjs/common';
import { envs, ORDER_SERVICE } from 'src/config';
import { OrdersController } from './orders.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { NatsModule } from 'src/transports/nats.module';


@Module({
  controllers: [OrdersController],
  imports: [
    // ClientsModule.register([
    //   {
    //     name: ORDER_SERVICE, 
    //     transport: Transport.TCP,
    //     options: {
    //       // host: enwvs.ordersMicroserviceHost,
    //       // port: enwvs.ordersMicroservicePort
    //     }
    //   }
    // ])
    NatsModule
  ]
})
export class OrdersModule {}
