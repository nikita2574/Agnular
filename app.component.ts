import { Component } from '@angular/core';
import { Data } from './datatable/datatable.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent {
  data: Data[] = [
    {
      id: 1,
      name: 'Александра',
      age: 27
    },
    {
      id: 2,
      name: 'Денис',
      age: 20
    },
    {
      id: 3,
      name: 'Никита',
      age: 0
    },
    {
      id: 4,
      name: 'Илья',
      age: 11
    }
  ]
  
}
