import { Pipe, PipeTransform } from '@angular/core';

// utils
import { mapAccessLevel } from '@utils/mapAccessLevel';

@Pipe({
  name: 'accessLevel',
})
export class AccessLevelPipe implements PipeTransform {
  transform(value: number): unknown {
    return mapAccessLevel(value);
  }
}
