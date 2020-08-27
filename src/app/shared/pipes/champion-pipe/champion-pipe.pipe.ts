import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'championPipe'
})
export class ChampionPipePipe implements PipeTransform {

  transform(value: any, driverCode: string, code: string): string {
    if(driverCode === code) {
      return value + 'fa fa-trophy';
    }
    return value;
  }

}
