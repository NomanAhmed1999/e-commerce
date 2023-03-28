import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipes'
})
export class PipesPipe implements PipeTransform {

  transform(value: number, ...args: any): unknown {
    console.log(args);
    
    return value*args[0]*args[1];
  }

}
