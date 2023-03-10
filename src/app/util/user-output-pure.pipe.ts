import { Pipe, PipeTransform } from '@angular/core';
import { USER } from './user-output.pipe';

@Pipe({
  name: 'userOutputPure',
  pure: true
})
export class UserOutputPurePipe implements PipeTransform {

  transform(value: USER): string {
    return value.name + " is " + value.age + " years old!";
  }

}
