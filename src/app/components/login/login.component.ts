import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  buttonValidity = false
  form: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
   }

  ngOnInit(): void {
  }
  submit(){
    if(this.form.value.username == 'admin' && this.form.value.password == 'admin123'){
      console.log("bien")
    }
  }
}
