import { Injectable } from '@nestjs/common';
import { db } from '../db';
import type { QueryResult } from 'pg';

type ClientRow = {
  id: number;
  name: string;
  email: string | null;
  created_at: string;
};

@Injectable()
export class ClientsService {
  async list(): Promise<ClientRow[]> {
    const result: QueryResult<ClientRow> = await db.query(
      'SELECT id, name, email, created_at FROM clients ORDER BY created_at DESC',
    );

    return result.rows;
  }
}
