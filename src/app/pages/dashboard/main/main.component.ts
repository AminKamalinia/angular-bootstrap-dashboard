import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public isCheck: boolean;

  constructor() {
    this.isCheck = true;
  }

  ngOnInit(): void {
  }

  public onToggleClick(isCheck: boolean): void {
    this.isCheck = isCheck;
  }
}
