import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable()
export class TimeService {

  constructor() { }

    getNow(): string {
        return moment().format('MMMM Do YYYY, h:mm:ss a');
    }

}
