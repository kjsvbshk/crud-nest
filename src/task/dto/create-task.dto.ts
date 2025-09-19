import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTaskDto {
    @ApiProperty({example: ''})
    @IsString()
    @IsNotEmpty()
    title: string;

    @ApiProperty({example: ''})
    @IsString()
    @IsNotEmpty()
    description: string;
}
