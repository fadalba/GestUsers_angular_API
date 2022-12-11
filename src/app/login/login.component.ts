import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validator, Validators } from '@angular/forms';
import { AuthService } from './../shared/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
registerForm !: FormGroup;
  constructor(
    private formBuilder : FormBuilder,
    public fb: FormBuilder,
    public authService: AuthService,
    public router: Router
    ) { 

    }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      email : ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password : ['', Validators.required],
    });
  }

  onSubmit() {
    this.authService.signIn(this.registerForm.value);
  }

}
