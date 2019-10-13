import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'more'
})
export class MorePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
