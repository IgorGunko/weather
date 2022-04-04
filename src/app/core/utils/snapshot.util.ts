import { Observable } from 'rxjs';

export function snapshot<T>(source: Observable<T>): T {
  let result: T;

  const subscr = source.subscribe((res: T) => {
    result = res;
  });
  subscr.unsubscribe();

  return result;
}
