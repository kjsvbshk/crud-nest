import { Injectable } from '@nestjs/common';
import { Task } from './entities/task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TaskService {
  private tasks: Task[] = [];
  private nextId = 1;

  create(createTaskDto: CreateTaskDto): Task {
    const task: Task = {
      id: this.nextId++,
      ...createTaskDto,
    };
    this.tasks.push(task);
    return task;
  }

  findAll(): Task[] {
    return this.tasks;
  }

    findOne(id: number): Task | undefined {
      return this.tasks.find(task => task.id === id);
    }

    update(id: number, updateTaskDto: UpdateTaskDto): Task | undefined {
    const task = this.findOne(id);
      if (!task) return undefined;
    Object.assign(task, updateTaskDto);
    return task;
  }

  remove(id: number): boolean {
    const index = this.tasks.findIndex(task => task.id === id);
    if (index === -1) return false;
    this.tasks.splice(index, 1);
    return true;
  }
}
