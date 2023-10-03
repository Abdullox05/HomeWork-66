import { Injectable } from '@nestjs/common';
import { CreateDriverDto } from './dto/create-driver.dto';
import { UpdateDriverDto } from './dto/update-driver.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Driver } from './models/driver.model';

@Injectable()
export class DriverService {
  constructor(@InjectModel(Driver) private driverRepisotory: typeof Driver) {}

  create(createDriverDto: CreateDriverDto) {
    return this.driverRepisotory.create(createDriverDto);
  }

  findAll() {
    return this.driverRepisotory.findAll();
  }

  findOne(id: number) {
    return this.driverRepisotory.findByPk(id);
  }

  async update(id: number, updateDriverDto: UpdateDriverDto) {
    const driver = await this.driverRepisotory.update(updateDriverDto, {
      where: {id},
      returning: true
    });
    return driver[1][0];
  }

  remove(id: number) {
    return this.driverRepisotory.destroy({where: {id}});
  }
}
