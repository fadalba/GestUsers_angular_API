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
    console.log(this.signinForm.value)
    const user ={
      email: this.signinForm.value.email,
      password: this.signinForm.value.password
    }
    this.authService.getUser(user).subscribe(
      res =>{
        console.log(res)
        this.router.navigateByUrl('cpt1')
      }
    )
  }

}