import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Machine } from 'src/machine/models/machine.model';
import { Driver } from 'src/driver/models/driver.model';

@Table({tableName: 'machine_driver'})
export class MachineDriver extends Model<MachineDriver> {
  @Column ({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true
  })
  id: number;

  @ForeignKey(() => Machine)
    
  @Column({type: DataType.INTEGER, onDelete: "RESTRICT", onUpdate: "CASCADE"})
  machineId: number;

  @ForeignKey(() => Driver)
    
  @Column({type: DataType.INTEGER, onDelete: "RESTRICT", onUpdate: "CASCADE"})
  driverId: number;
}
