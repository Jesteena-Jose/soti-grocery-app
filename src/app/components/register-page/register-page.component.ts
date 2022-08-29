import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
  userModel=new User()
  loginResponse=''
  loginClass=''
  constructor(private auth:AuthService,private route:Router) { 
  }
 
  ngOnInit(): void {
  }
  onFormSubmit(){
    // console.log(this.userModel)
    this.auth.register(this.userModel).subscribe(
    (response)=>{
      console.log(response)
      this.route.navigateByUrl('/login')
    },
    (error)=>{
      this.loginResponse='Sorry, '+error.error.message
      console.log(this.loginResponse)
      this.loginClass='alert-danger'
    }
    )

  }

}
