import { Injectable } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Company } from './models/company.model';

@Injectable()
export class CompanyService {
  constructor(@InjectModel(Company) private companyRepository: typeof Company) {}

  create(createCompanyDto: CreateCompanyDto) {
    return this.companyRepository.create(createCompanyDto);
  }

  findAll() {
    return this.companyRepository.findAll();
  }

  findOne(id: number) {
    return this.companyRepository.findByPk(id);
  }

  async update(id: number, updateCompanyDto: UpdateCompanyDto) {
    const company = await this.companyRepository.update(updateCompanyDto, {
      where: {id},
      returning: true,
    });
    return company[1][0];
  }

  remove(id: number) {
    return this.companyRepository.destroy({where: {id}});
  }
}
