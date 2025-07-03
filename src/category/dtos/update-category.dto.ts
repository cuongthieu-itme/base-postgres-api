import { IsOptional, IsString, MinLength } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateCategoryDTO {
  @ApiPropertyOptional({
    description: 'Category name',
    example: 'Electronics',
    minLength: 2,
  })
  @IsOptional()
  @IsString()
  @MinLength(2)
  name?: string;

  @ApiPropertyOptional({
    description: 'Category description',
    example: 'Electronic devices and gadgets',
  })
  @IsOptional()
  @IsString()
  description?: string;
}
