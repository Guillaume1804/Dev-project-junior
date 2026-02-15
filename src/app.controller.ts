import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { db } from './db';
import type { QueryResult } from 'pg';

type NowRow = { now: string };

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('db-test')
  async dbTest(): Promise<NowRow> {
    const result: QueryResult<NowRow> = await db.query('SELECT NOW() as now');
    return result.rows[0];
  }
}
