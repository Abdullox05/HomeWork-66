import {BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { Machine } from 'src/machine/models/machine.model';
import { MachineDriver } from 'src/machine-driver/models/machine-driver.model';

interface IDriver {
  readonly first_name: string;
  readonly last_name: string;
  readonly phone: string;
  readonly driver_license: string;
}

@Table({tableName: 'driver'})
export class Driver extends Model<Driver, IDriver> {
  @Column ({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true
  })
  id: string;

  @Column ({
    type: DataType.STRING,
    allowNull: false,
  })
  first_name: string;

  @Column ({
    type: DataType.STRING,
    allowNull: false,
  })
  last_name: string;

  @Column ({
    type: DataType.STRING,
    allowNull: false,
  })
  phone: string;
  
  @Column ({
    type: DataType.STRING,
    allowNull: false
  })
  driver_license: string;

  @BelongsToMany(() => Machine, () => MachineDriver)
  machines: Machine[];
}
