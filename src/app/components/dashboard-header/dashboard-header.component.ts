import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-dashboard-header',
    templateUrl: './dashboard-header.component.html',
    styleUrls: ['./dashboard-header.component.scss'],
    standalone: false
})
export class DashboardHeaderComponent implements OnInit {

  public isCheck: boolean;

  @Output()
  public toggle = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
    this.isCheck = true;
  }

  switchToggle(): void {
    this.isCheck = !this.isCheck;
    this.toggle.emit(this.isCheck);
  }
}
