import { Column, Model, Table, DataType } from 'sequelize-typescript';

@Table
export class Message extends Model {
  @Column({ type: DataType.STRING, allowNull: null })
  message: string;
}
