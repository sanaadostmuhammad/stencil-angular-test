import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-stencil-component-test';
  services = [
    {
      name: 'service',
      id: 'sn',
      isInfoHighPriority: true,
      selected: true
    },
    {
      name: 'service',
      id: 'sn',
      isInfoHighPriority: false,
      selected: true
    },
    {
      name: 'service',
      id: 'sn',
      isInfoHighPriority: true,
      selected: false
    }
  ];
}
