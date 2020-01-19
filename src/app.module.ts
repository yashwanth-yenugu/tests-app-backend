import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestsModule } from './tests/tests.module';
import { StudentsModule } from './students/students.module';

@Module({
  imports: [TestsModule, StudentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
