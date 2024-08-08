import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { envs, NATS_SERVICE, PRODUCT_SERVICE } from 'src/config';
import { NatsModule } from 'src/transports/nats.module';

@Module({
  controllers: [ProductsController],
  providers: [],
  imports: [
    // ClientsModule.register([
    //   {
    //     name: NATS_SERVICE, 
    //     transport: Transport.NATS,
    //     options: {
    //       // host: envs.productsMicroserviceHost,
    //       // port: envs.productsMicroservicePort
    //       servers: envs.natsServers
    //     }
    //   }
    // ])
    NatsModule
  ]
})
export class ProductsModule {
  constructor(){
    // console.log(`envs.productsMicroserviceHost= ${envs.productsMicroserviceHost}`);
    // console.log(`envs.productsMicroservicePort= ${envs.productsMicroservicePort}`);
  }
}
