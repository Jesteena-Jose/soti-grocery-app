import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  //  loginForm = new FormGroup({
  //   email: new FormControl('abc@gmail.com'),
  //   password: new FormControl('123')
  // })
  loginClass=''
  loginResponse=''
  constructor(private auth: AuthService, private fb: FormBuilder,private route:Router) { }
  loginForm = this.fb.group({
    email: [null, [Validators.required, Validators.email]],
    password: [null, [Validators.required, Validators.minLength(6)]]
  })

  get email(){
    return this.loginForm.get('email')
  }
  get password(){
    return this.loginForm.get('password')
  }

  ngOnInit(): void {
  }
  onFormSubmit() {
    this.auth.login(this.loginForm.value).subscribe(
    (response) =>{
      this.loginClass='alert-success'
      this.loginResponse='Login Successfull, Thank You'
      localStorage.setItem('token',response.token)
      localStorage.setItem('user',JSON.stringify(response.user))
      this.route.navigateByUrl('/home')
    },
    (error)=>{
      this.loginClass='alert-danger'
      this.loginResponse='Login failed, Try again'
    }
    )
  }
}
