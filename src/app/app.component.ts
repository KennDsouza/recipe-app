import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tabName : string = 'recipe';
  setTabName(tabName :string){
    this.tabName = tabName;
  }
}
  