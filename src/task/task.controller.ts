import { Controller, Get, Post, Body, Param, Patch, Delete, NotFoundException } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { ApiBody, ApiTags } from '@nestjs/swagger';

@ApiTags('task')
@Controller('task')
export class TaskController {
	constructor(private readonly taskService: TaskService) {}

	// 1. Crear una tarea
    @ApiBody({ type: CreateTaskDto })
	@Post()
	create(@Body() createTaskDto: CreateTaskDto) {
		// Recibe los datos y llama al servicio para crear la tarea
		return this.taskService.create(createTaskDto);
	}

	// 2. Listar todas las tareas
	@Get()
	findAll() {
		// Devuelve el array de tareas
		return this.taskService.findAll();
	}

	// 3. Obtener una tarea por id
	@Get(':id')
	findOne(@Param('id') id: string) {
		// Busca la tarea por id
		const task = this.taskService.findOne(Number(id));
		if (!task) throw new NotFoundException('Tarea no encontrada');
		return task;
	}

	// 4. Actualizar una tarea
    @ApiBody({ type: UpdateTaskDto })
	@Patch(':id')
	update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
		// Actualiza la tarea por id
		const task = this.taskService.update(Number(id), updateTaskDto);
		if (!task) throw new NotFoundException('Tarea no encontrada');
		return task;
	}

	// 5. Eliminar una tarea
	@Delete(':id')
	remove(@Param('id') id: string) {
		// Elimina la tarea por id
		const result = this.taskService.remove(Number(id));
		if (!result) throw new NotFoundException('Tarea no encontrada');
		return { message: 'Tarea eliminada' };
	}
}
