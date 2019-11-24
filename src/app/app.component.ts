import { Component } from '@angular/core';
import { of } from 'rxjs';
import { delay, map } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  obs$ = of(1).pipe(delay(1000));

  obsErr$ = of(1).pipe(
    delay(1000),
    map((x: any) => x()));

}
