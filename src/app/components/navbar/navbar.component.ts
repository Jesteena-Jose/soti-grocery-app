import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  loginValue: any
  username: any
  name: any
  constructor(private auth: AuthService) {
    this.loginValue = this.auth.checktoken()
    if (this.loginValue) {
      this.username = localStorage.getItem('user')
      this.name = JSON.parse(this.username).firstName
      console.log(this.name)
    }

  }

  logout() {
    this.auth.logout()
  }

  ngOnInit(): void {
  }

}
