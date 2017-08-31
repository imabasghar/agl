import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {
  transform(array: Array<any>, property: string) {
    return _.sortBy(array, [(item) =>  item[property]]);
  }
}
