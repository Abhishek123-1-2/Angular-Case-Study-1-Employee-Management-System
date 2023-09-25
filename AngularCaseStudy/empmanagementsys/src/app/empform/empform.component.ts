import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmpForm } from './empform.model';
import { EmployeeRestApiService } from '../services/employee.service';
@Component({
  selector: 'app-empform',
  templateUrl: './empform.component.html',
  styleUrls: ['./empform.component.css']
})
export class EmpformComponent {

  employeeObj:EmpForm=new EmpForm();
  public employeeData:any[];
  loginForm = new FormGroup({
    id:new FormControl(),
    firstName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern(/^[A-Z][a-zA-Z]*$/)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(5), Validators.pattern(/^[A-Z][a-zA-Z]*$/)]),
    contactNo: new FormControl('', [Validators.required, Validators.minLength(10), Validators.pattern(/^\d{10}$/)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    dob: new FormControl('', [Validators.required, Validators.minLength(8)]),
    address:new FormControl(''),
  })
displayedColumns: string[] = [
  'Fname',
  'Lname',
  'Contact',
  'Email',
  'Dob',
  'Add',
  'Actions', // Include this if you want to display the Actions column
];
get id(){
  return this.loginForm.get('id');
}
get firstName() {
  return this.loginForm.get('firstName');
  }
get lastName(){
  return this.loginForm.get('lastName');
}
get contactNo(){
  return this.loginForm.get('contactNo');
}
get email(){
  return this.loginForm.get('email');
}
get dob(){
  return this.loginForm.get('dob');
}
constructor(private EmployeeService: EmployeeRestApiService) { 
  this.loadEmployees();
}
select(selectedEmployee:EmpForm){
  this.employeeObj = Object.assign({},selectedEmployee)
}
onSubmit() {
  if (this.loginForm.valid) {
 
    const employeeData: EmpForm = {
      id:this.loginForm.value.id,
      Fname: this.loginForm.value.firstName,
      Lname: this.loginForm.value.lastName,
      Contact: this.loginForm.value.contactNo,
      Email: this.loginForm.value.email,
      Dob: this.loginForm.value.dob,
      Add: this.loginForm.value.address, 
    };

   
    this.EmployeeService.createEmployee(employeeData).subscribe(
      (response) => {
        console.log(response); 
        
        this.loginForm.reset();
      },
      (error) => {
        console.error(error); 
      }
      
    )
    this.EmployeeService.getEmployees().subscribe(data =>{
      this.employeeData = data;
      console.log(this.employeeData);
    })
}

}
update(){
  var employedto:any = {};
  employedto.id = this.employeeObj.id;
  employedto.Fname = this.employeeObj.Fname;
  employedto.Lname = this.employeeObj.Lname;
  employedto.Contact = this.employeeObj.Contact;
  employedto.Email = this.employeeObj.Email;
  employedto.Dob = this.employeeObj.Dob;
  employedto.Add = this.employeeObj.Add;
  

  this.EmployeeService.updateEmployees(employedto.id,
    employedto).subscribe((data:{})=>{
      console.log("Update Response:", data);
      window.alert("data updates");
    }), (error) => {
      console.error("Update Error:", error);
      
    };

  this.loadEmployees();

}
delete(){
  let id=this.employeeObj.id;
  this.EmployeeService.deleteEmployees(id).subscribe((data:{})=>{
    window.alert("data deleted");
  });
  this.loadEmployees();
}

loadEmployees(){
  return this.EmployeeService.getEmployees().subscribe((data:
    EmpForm[])=>{
      this.employeeData = new Array<EmpForm>
      for(let item of data){
        let emp: EmpForm = new EmpForm();
        emp.id=item.id;
        emp.Fname=item.Fname;
        emp.Lname=item.Lname;
        emp.Contact=item.Contact;
        emp.Email=item.Email;
        emp.Dob=item.Dob;
        emp.Add=item.Add;
        this.employeeData.push(emp);
        

      }

    });
}

}
