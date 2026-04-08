import { Injectable, Logger } from '@nestjs/common';
import { Command, CommandRunner, Option } from 'nest-commander';
import { BatchService } from '../../services/batch.service';

interface BatchExecuteOptions {
  taskName?: string;
  dryRun?: boolean;
}

@Injectable()
@Command({
  name: 'execute',
  description: 'Execute batch tasks',
})
export class BatchExecuteCommand extends CommandRunner {
  private readonly logger = new Logger(BatchExecuteCommand.name);

  constructor(private readonly batchService: BatchService) {
    super();
  }

  async run(
    passedParam: string[],
    options?: BatchExecuteOptions,
  ): Promise<void> {
    try {
      this.logger.log('Starting batch execution...');

      const taskName = options?.taskName || 'sync-data';
      const dryRun = options?.dryRun || false;

      await this.batchService.execute(taskName, dryRun);

      this.logger.log('Batch execution completed successfully');
      process.exit(0);
    } catch (error) {
      this.logger.error('Batch execution failed:', error);
      process.exit(1);
    }
  }

  @Option({
    flags: '-t, --task-name <taskName>',
    description: 'Task name to execute',
  })
  parseTaskName(val: string): string {
    return val;
  }

  @Option({
    flags: '-d, --dry-run',
    description: 'Run in dry-run mode',
  })
  parseDryRun(): boolean {
    return true;
  }
}
