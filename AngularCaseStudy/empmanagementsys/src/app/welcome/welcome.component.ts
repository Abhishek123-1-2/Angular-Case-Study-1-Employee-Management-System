import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  loggedInUser: any;
  displayedColumns: string[] = ['Fname', 'Lname', 'Contact', 'Email', 'Dob', 'Add'];
  dataSource: MatTableDataSource<any>;
  constructor(private http : HttpClient,private router:Router){
     
}


ngOnInit(): void {
  this.loggedInUser = JSON.parse(localStorage.getItem('loggedInUser') || '{}'); // Retrieve the logged-in user from local storage
  if (!this.loggedInUser.Fname) {
    // Check if the user is not logged in
    
    this.router.navigate(['login']);
    
  }
  this.dataSource = new MatTableDataSource([this.loggedInUser]);
}
logout(){
  localStorage.clear();
  this.router.navigate(['login']);
  }
}



