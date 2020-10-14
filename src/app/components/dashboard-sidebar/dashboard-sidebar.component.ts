import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-dashboard-sidebar',
  templateUrl: './dashboard-sidebar.component.html',
  styleUrls: ['./dashboard-sidebar.component.scss']
})
export class DashboardSidebarComponent implements OnInit {

  @Input()
  public isToggleCheck: boolean;

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute) {
    this.isToggleCheck = true;
  }

  ngOnInit(): void {
  }

  public logout(): void {
    this.router.navigate(['./login'], { relativeTo: this.activatedRoute });
  }

  public showSubmenu(id: string): void {
    $('#' + id).toggleClass('has-submenu');
    $('#' + id + ' a i').last().toggleClass('rtoate180');
  }
}
