/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
import { CreateEmployeeDto } from './employees.entities';

@Injectable()
export class EmployeesService {
  constructor(
    private readonly databaseService: DatabaseService,
  ) { }

  async create(createEmployeeDto: CreateEmployeeDto) {
    return this.databaseService.employee.create({ data: createEmployeeDto });
  }

  async findAll(role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    if (!role) {
      return this.databaseService.employee.findMany();
    }
    return this.databaseService.employee.findMany({ where: { role } });
  }

  async findOne(id: number) {
    return this.databaseService.employee.findUnique({ where: { id } });
  }

  async update(id: number, updateEmployeeDto: Prisma.EmployeeUpdateInput) {
    return this.databaseService.employee.update({ where: { id }, data: updateEmployeeDto });
  }

  async remove(id: number) {
    return this.databaseService.employee.delete({ where: { id } });
  }
}
