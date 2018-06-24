import { Observable, Observer } from 'rxjs';

function loadUsers() {
  return Observable.create((o: Observer<void>) => {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('load', () => {
      if(xhr.status !== 200) {
        o.error(xhr.statusText);
        return;
      }
      try {
        const data = JSON.parse(xhr.responseText);
        o.next(data);
        o.complete();
      } catch (err) {
        o.error(err);
      }
    });
    xhr.open('GET', 'https://api.github.com/users3');
    xhr.send();
  }).retryWhen(retryStrategy());
}

function retryStrategy() {
  return function(err: any) {
    return err.delay(1000);
  }
}

loadUsers().subscribe(
  (data: any) => console.log(`next: ${data}`),
  (err: any) => console.log(`error: ${err}`),
  () => console.log('complete')
);
