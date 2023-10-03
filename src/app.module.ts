import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { BuilderModule } from './builder/builder.module';
import { CompanyModule } from './company/company.module';
import { DriverModule } from './driver/driver.module';
import { MachineModule } from './machine/machine.module';
import { MachineDriverModule } from './machine-driver/machine-driver.module';
import { Builder } from './builder/models/builder.model';
import { Company } from './company/models/company.model';
import { Driver } from './driver/models/driver.model';
import { Machine } from './machine/models/machine.model';
import { MachineDriver } from './machine-driver/models/machine-driver.model';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ".env",
      isGlobal: true,
    }),
    SequelizeModule.forRoot({
      dialect: "postgres",
      host: process.env.PG_HOST,
      port: Number(process.env.PG_PORT),
      username: process.env.PG_USER,
      password: String(process.env.PG_PASSWORD),
      database: process.env.PG_DB,
      models: [Builder, Company, Driver, Machine, MachineDriver],
      autoLoadModels: true,
      logging: true,      
    }),
    BuilderModule,
    CompanyModule,
    DriverModule,
    MachineModule,
    MachineDriverModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
