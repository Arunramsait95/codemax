
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
selector: 'app-register',
templateUrl: './register.component.html',
styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  angForm: FormGroup;
  message ="";

  constructor(private fb: FormBuilder,private dataService: ApiService,private router:Router) {
    this.angForm = this.fb.group({
    email: ['', [Validators.required,Validators.minLength(1), Validators.email]],
    password: ['', Validators.required],
    username: ['', Validators.required]
    });
  }

ngOnInit() {
}

  postdata(angForm1)
  {
    this.dataService.userregistration(angForm1.value.username,angForm1.value.email,angForm1.value.password)
    .pipe(first())
    .subscribe(
    data => {
    this.router.navigate(['login']);
    },error => {
      console.log(error);
    });
  }

  get email() { return this.angForm.get('email'); }
  get password() { return this.angForm.get('password'); }
  get username() { return this.angForm.get('username'); }
}