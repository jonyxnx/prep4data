import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemsService } from './items.service';
import { ItemsController } from './items.controller';
import { Item } from './schemas/item.schema';
import { buildSchema } from '@typegoose/typegoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: Item.name, schema: buildSchema(Item) }])],
  controllers: [ItemsController],
  providers: [ItemsService],
})
export class ItemsModule {} 