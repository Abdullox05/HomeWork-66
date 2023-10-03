import { Injectable } from '@nestjs/common';
import { CreateBuilderDto } from './dto/create-builder.dto';
import { UpdateBuilderDto } from './dto/update-builder.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Builder } from './models/builder.model';

@Injectable()
export class BuilderService {
  constructor(@InjectModel(Builder) private builderRepository: typeof Builder) {}

  create(createBuilderDto: CreateBuilderDto) {
    return this.builderRepository.create(createBuilderDto);
  }

  findAll() {
    return this.builderRepository.findAll();
  }

  findOne(id: number) {
    return this.builderRepository.findByPk(id);
  }

  async update(id: number, updateBuilderDto: UpdateBuilderDto) {
    const builder = await this.builderRepository.update(updateBuilderDto, {
      where: {id},
      returning: true
    });
    return builder[1][0];
  }

  remove(id: number) {
    return this.builderRepository.destroy({where: {id}});
  }
}
