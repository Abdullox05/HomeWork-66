import { Injectable } from '@nestjs/common';
import { CreateMachineDto } from './dto/create-machine.dto';
import { UpdateMachineDto } from './dto/update-machine.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Machine } from './models/machine.model';

@Injectable()
export class MachineService {
  constructor(@InjectModel(Machine) private machineRepository: typeof Machine) {}

  create(createMachineDto: CreateMachineDto) {
    return this.machineRepository.create(createMachineDto);
  }

  findAll() {
    return this.machineRepository.findAll();
  }

  findOne(id: number) {
    return this.machineRepository.findByPk(id);
  }

  async update(id: number, updateMachineDto: UpdateMachineDto) {
    const machine = await this.machineRepository.update(updateMachineDto, {
      where: {id},
      returning: true
    });
    return machine[1][0];
  }

  remove(id: number) {
    return this.machineRepository.destroy({where: {id}});
  }
}
