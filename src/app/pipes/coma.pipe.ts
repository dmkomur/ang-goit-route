import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'comaAdd',
})
export class ComaPipe implements PipeTransform {
  transform(
    idem: any[],
    propertyName: string,
    separator: string = ','
  ): string {
    if (!idem || !propertyName) {
      return '';
    }
    return idem.map((item) => item[propertyName]).join(separator);
  }
}
