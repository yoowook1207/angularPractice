import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userOutput',
  pure: false
  // custom pipe is pure in default
})
export class UserOutputPipe implements PipeTransform {

  transform(value: USER): string {
    return value.name + " is " + value.age + " years old!";
  }

}

export interface USER {
  name: string;
  age: number;
}