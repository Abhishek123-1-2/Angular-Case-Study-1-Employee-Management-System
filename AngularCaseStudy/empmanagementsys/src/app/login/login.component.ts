import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  
})
export class LoginComponent {
  
  loginForm = new FormGroup({
    UserName:new FormControl('',[Validators.required,Validators.minLength(3)]),
    Password:new FormControl('',[Validators.required,Validators.minLength(3)])
  });
  httpClient: any;
  token:any='bUjYr4231abhishek';
  constructor(private http:HttpClient,private router:Router){
  
  }
  
  get UserName(){
    return this.loginForm.get('UserName');
  }
  get Password(){
    return this.loginForm.get('Password');
  }
  login(){
    this.http.get<any>("http://localhost:3000/employees")
    .subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.Fname===this.loginForm.value.UserName && a.Dob===this.loginForm.value.Password;
      });
      if(user){
        alert("Login Success");
        this.loginForm.reset();
        localStorage.setItem('token',this.token);
        localStorage.setItem('loggedInUser', JSON.stringify(user));
        this.router.navigate(['welcome']);
      }else{
        alert("User not found");
      }
    })
    ,err=>{
       alert("something went wrong!");
      }

    };
    


}





  

