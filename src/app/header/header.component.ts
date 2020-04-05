import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() tabSelected = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onTabLinkClicked( tabname : string) {
    this.tabSelected.emit(tabname);
  }

}
