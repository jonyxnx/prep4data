import { modelOptions, prop } from '@typegoose/typegoose';

@modelOptions({ schemaOptions: { timestamps: true } })
export class Item {
  @prop()
  name!: string;
} 