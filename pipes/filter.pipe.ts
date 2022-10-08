import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(val: any, serachTerm: any): any {
    return val.filter(function(search){
      return search.name.toLowerCase().indexOf(serachTerm.toLowerCase()) > -1
    });
  }

}
