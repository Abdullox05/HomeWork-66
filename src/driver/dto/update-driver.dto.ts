import { PartialType } from '@nestjs/mapped-types';
import { CreateDriverDto } from './create-driver.dto';

export class UpdateDriverDto extends PartialType(CreateDriverDto) {
  readonly first_name?: string;
  readonly last_name?: string;
  readonly phone?: string;
  readonly driver_license?: string;
}
