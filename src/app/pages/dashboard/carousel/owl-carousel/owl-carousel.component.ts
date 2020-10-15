import { Component, AfterViewInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-owl-carousel',
  templateUrl: './owl-carousel.component.html',
  styleUrls: ['./owl-carousel.component.scss']
})
export class OwlCarouselComponent implements AfterViewInit {

  public logoList: Array<string>;

  constructor() {
    this.logoList = new Array<string>();

    this.logoList.push('angular.png');
    this.logoList.push('html.png');
    this.logoList.push('typescript.png');
    this.logoList.push('scss.png');
    this.logoList.push('csharp.png');
    this.logoList.push('core.png');
    this.logoList.push('vs.png');
    this.logoList.push('vscode.png');
  }

  ngAfterViewInit(): void {
    $('#owlCarousel').owlCarousel({
      items: 1,
      animateOut: 'fadeOut',
      autoplay: true,
      autoplayTimeout: 3000,
      loop: true,
      margin: 10,
      nav: true
    });

    $('#logoCarousel').owlCarousel({
      loop: true,
      margin: 10,
      autoplay: true,
      autoplayTimeout: 3000,
      nav: true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        1000: {
          items: 4
        }
      }
    });
  }
}
