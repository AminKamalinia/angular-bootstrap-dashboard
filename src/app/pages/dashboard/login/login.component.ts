import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public email: string;
  public password: string;
  public rememberMe: boolean;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute) {
    this.email = '';
    this.password = '';
  }

  ngOnInit(): void {
    if (localStorage.getItem("email") != null) {
      this.email = localStorage.getItem("email");
      this.password = localStorage.getItem("password");
      this.rememberMe = true
    }
  }

  login(): void {
    if (this.rememberMe == true) {
      localStorage.setItem("email", this.email);
      localStorage.setItem("password", this.password);
    }
    this.router.navigate(['../default'], { relativeTo: this.activatedRoute });
  }
}
