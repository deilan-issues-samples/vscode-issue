import { Observable } from 'rxjs';

const source = Observable.from([1,2,3,4,5]);
source.subscribe(
  (data) => document.writeln(`${data}<br>`)
);
