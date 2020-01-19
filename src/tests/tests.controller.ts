import { Controller, Get, Post, Body } from '@nestjs/common';
import { TestsService } from './tests.service';

@Controller('tests')
export class TestsController {
  constructor(private readonly service: TestsService) {}
  @Get('')
  getTests() {
    return this.service.getTests();
  }

  @Post('')
  createTest(@Body() body: any) {
    return this.service.createTest(body);
  }
}
