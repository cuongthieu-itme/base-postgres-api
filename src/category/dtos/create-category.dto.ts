import { IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateCategoryDTO {
  @ApiProperty({
    description: 'Category name',
    example: 'Electronics',
    minLength: 2,
  })
  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  name: string;

  @ApiPropertyOptional({
    description: 'Category description',
    example: 'Electronic devices and gadgets',
  })
  @IsOptional()
  @IsString()
  description?: string;
}
