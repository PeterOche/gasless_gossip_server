// prettier ignore lint/style/useImportType: <explanation>
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
// biome-ignore lint/style/useImportType: <explanation>
import { TransfersService } from './transfers.service';
import type { CreateTransferDto } from './dto/create-transfer.dto';
import type { UpdateTransferDto } from './dto/update-transfer.dto';

@Controller('transfers')
export class TransfersController {
  constructor(private readonly transfersService: TransfersService) {}

  @Post()
  create(@Body() createTransferDto: CreateTransferDto) {
    return this.transfersService.create(createTransferDto);
  }

  @Get()
  findAll() {
    return this.transfersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.transfersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTransferDto: UpdateTransferDto) {
    return this.transfersService.update(+id, updateTransferDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.transfersService.remove(+id);
  }
}
