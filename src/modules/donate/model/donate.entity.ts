import { Model, Table, Column, DataType } from 'sequelize-typescript';

@Table
export class Donate extends Model {
	@Column({
		type: DataType.STRING,
		allowNull: true,
	})
	donater: string;

	@Column({
		type: DataType.STRING,
		unique: true,
		allowNull: true,
	})
	email: string;

	@Column({
		type: DataType.INTEGER,
		allowNull: true,
	})
	amount: number;

	@Column({
		type: DataType.STRING,
		allowNull: true,
	})
	comment: string;

	@Column({
		type: DataType.BOOLEAN,
		allowNull: true,
	})
	done: boolean;

	@Column({
		type: DataType.INTEGER,
		allowNull: true,
	})
	action_state: number;
}
