import { Component, OnInit } from '@angular/core';
import { LogoCarouselInput } from 'src/app/models';

@Component({
    selector: 'app-bootstrap-carousel',
    templateUrl: './bootstrap-carousel.component.html',
    styleUrls: ['./bootstrap-carousel.component.scss'],
    standalone: false
})
export class BootstrapCarouselComponent implements OnInit {

  public logoCarouselInputList: Array<LogoCarouselInput>;

  constructor() {
    this.logoCarouselInputList = new Array<LogoCarouselInput>();
  }

  ngOnInit(): void {

    const temp1 = new LogoCarouselInput();
    temp1.Index = 0;
    temp1.Logos.push('angular.png');
    temp1.Logos.push('html.png');
    temp1.Logos.push('typescript.png');
    temp1.Logos.push('scss.png');
    this.logoCarouselInputList.push(temp1);

    const temp2 = new LogoCarouselInput();
    temp2.Index = 1;
    temp2.Logos.push('csharp.png');
    temp2.Logos.push('core.png');
    temp2.Logos.push('vs.png');
    temp2.Logos.push('vscode.png');
    this.logoCarouselInputList.push(temp2);

  }

}
