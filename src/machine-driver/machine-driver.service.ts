import { Injectable } from '@nestjs/common';
import { CreateMachineDriverDto } from './dto/create-machine-driver.dto';
import { UpdateMachineDriverDto } from './dto/update-machine-driver.dto';

@Injectable()
export class MachineDriverService {
  create(createMachineDriverDto: CreateMachineDriverDto) {
    return 'This action adds a new machineDriver';
  }

  findAll() {
    return `This action returns all machineDriver`;
  }

  findOne(id: number) {
    return `This action returns a #${id} machineDriver`;
  }

  update(id: number, updateMachineDriverDto: UpdateMachineDriverDto) {
    return `This action updates a #${id} machineDriver`;
  }

  remove(id: number) {
    return `This action removes a #${id} machineDriver`;
  }
}
