import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validator, Validators } from '@angular/forms';
import { AuthService } from './.././shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
signinForm: FormGroup;
constructor(
  public fb: FormBuilder,
  public authService: AuthService,
  public router: Router
) {
  this.signinForm = this.fb.group({
    email: [''],
    password: [''],
  });
}

  ngOnInit(): void {
    this.signinForm = this.fb.group({
      email : ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password : ['', Validators.required],
    });
  }

  loginUser() {
    {
      this.authService.signIn(this.signinForm.value);
    }
  }

}

/* 
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from './../../shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})

export class SigninComponent implements OnInit {
  signinForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    public authService: AuthService,
    public router: Router
  ) {
    this.signinForm = this.fb.group({
      email: [''],
      password: [''],
    });
  }

  ngOnInit() {}

  loginUser() {
    this.authService.signIn(this.signinForm.value);
  }
} */