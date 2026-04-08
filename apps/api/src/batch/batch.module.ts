import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { BatchExecuteCommand } from './commands/batch-execute.command';
import { BatchService } from '../services/batch.service';

@Module({
  imports: [ConfigModule.forRoot()],
  providers: [BatchExecuteCommand, BatchService],
})
export class BatchModule {}
