import { Injectable } from '@angular/core';

@Injectable()
export class LoggingService {
  logSatusChange(status: string) {
    console.log('Aserver status changed , new status : ' + status);
  }
}
