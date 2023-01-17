import { Controller, Get, Param, Query } from '@nestjs/common';
import { get } from 'http';
import { AppService } from './app.service';

// non dynamic routes must be placed first
// dynamic routes afterwards
@Controller()
export class AppController {

}
