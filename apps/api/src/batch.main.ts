import { CommandFactory } from 'nest-commander';
import { BatchModule } from './batch/batch.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger('BatchApplication');

  try {
    await CommandFactory.run(BatchModule, {
      logger: ['error', 'warn', 'log'],
    });
  } catch (err) {
    logger.error('Batch application error:', err);
    process.exit(1);
  }
}

bootstrap();
