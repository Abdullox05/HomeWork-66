import { PartialType } from '@nestjs/mapped-types';
import { CreateBuilderDto } from './create-builder.dto';

export class UpdateBuilderDto extends PartialType(CreateBuilderDto) {
  readonly full_name?: string;
  readonly birth_date?: Date;
  readonly salary?: number;
}
