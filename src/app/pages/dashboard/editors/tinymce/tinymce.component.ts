import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tinymce',
  templateUrl: './tinymce.component.html',
  styleUrls: ['./tinymce.component.scss']
})
export class TinymceComponent implements OnInit {

  public tinymceText: string;

  constructor() {
    this.tinymceText = "This is a Test.";
  }

  ngOnInit(): void {
  }

}
