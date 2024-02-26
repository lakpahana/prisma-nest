/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';

export class CreateEmployeeDto implements Prisma.EmployeeCreateInput {
    @ApiProperty()
    name: string;
    @ApiProperty()
    email: string;
    @ApiProperty()
    role: 'INTERN' | 'ENGINEER' | 'ADMIN';
}