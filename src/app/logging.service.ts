export class LoggingService {
  logSatusChange(status: string) {
    console.log('Aserver status changed , new status : ' + status);
  }
}
