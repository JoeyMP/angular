import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hideText'
})
export class HideTextPipe implements PipeTransform {

  transform(value: string, hide : boolean): string {
    return hide ? '*'.repeat(value.length) : value;
  }

}
