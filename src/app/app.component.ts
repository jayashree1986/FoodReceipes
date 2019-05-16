import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  loadedfeature ='recipe';
  serverElements = [{type: 'server', name: 'test', content: 'this is a test for server'}];

  onNavigate(feature:string){
this.loadedfeature =feature;
  }

  }

