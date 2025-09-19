import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateTaskDto {
    @ApiProperty({example: '', required: false})
    @IsString()
    @IsNotEmpty()
    title?: string;

    @ApiProperty({example: '', required: false})
    @IsString()
    @IsNotEmpty()
    description?: string;
}
