import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ReturnModelType } from '@typegoose/typegoose';
import { Item } from './schemas/item.schema';

@Injectable()
export class ItemsService {
  constructor(
    @InjectModel('Item') private readonly itemModel: ReturnModelType<typeof Item>
  ) {}

  async findAll(): Promise<Item[]> {
    return this.itemModel.find().exec();
  }

  async create(data: { name: string }): Promise<Item> {
    return this.itemModel.create(data);
  }
} 