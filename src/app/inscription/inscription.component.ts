
import { Component, OnInit } from '@angular/core';
import { AuthService } from './.././shared/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';
import { timestamp } from 'rxjs';
//import { Component, OnInit } from '@angular/core';
//import { Validators } from '@angular/forms';
import { CrudService } from '../services/inscription.service';
import { NgZone } from '@angular/core';

//import { Router } from '@angular/router';
import {  FormControl } from '@angular/forms';
@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})

export class InscriptionComponent implements OnInit {
  signupForm: FormGroup;
  password = 'password';
  submitted = false;
  mailExiste:string|null = null;
  users:any;



  constructor(
    public fb: FormBuilder,
    public authService: AuthService,
    public router: Router,
  ) {
    this.signupForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      profil: [''],
      tel: [''],
      password: [''],
      etat: [true],
      matricule: [Date.now()],
      dateinscrit:[ new Date ]
      
    });
  }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['', [Validators.required]],
      passwordC: ['', [Validators.required, matchValidator(this.password)]],
      profil: ['', [Validators.required]],
      etat: [true],
      matricule: [Date.now()], 
      dateinscrit:[new Date]
      
    });

    this.getAllData()
  }

  getAllData(){
    return this.authService.getAllUser().subscribe(
      data =>{
            console.log(data)
            this.users = data;
      }
    )
  }
  

  registerUser() {

    for (const iterator of this.users) {
     
      if(iterator.email == this.signupForm.value.email)
         { this.mailExiste = "Email existe déja";
          console.log(this.mailExiste);
          return;}
    }
    this.authService.signUp(this.signupForm.value).subscribe((res) => {
      console.log(res.errors.error.email.message);
      if (res.result) {
        this.signupForm.reset();
        alert("Inscription réussie hoooww!!!")
        this.router.navigate(['cpt4']);
      }
      else if((res.error)){
        this.mailExiste = "Email existe déja";
        
        
        
      }
    });
  }
}

export function matchValidator(fieldName: string) {
  let fcfirst: FormControl;
  let fcSecond: FormControl;

  return function matchValidator(control: FormControl) {

      if (!control.parent) {
          return null;
      }

      // INITIALIZING THE VALIDATOR.
      if (!fcfirst) {
          //INITIALIZING FormControl first
          fcfirst = control;
          fcSecond = control.parent.get(fieldName) as FormControl;

          //FormControl Second
          if (!fcSecond) {
              throw new Error('matchValidator(): Second control is not found in the parent group!');
          }

          fcSecond.valueChanges.subscribe(() => {
              fcfirst.updateValueAndValidity();
          });
      }

      if (!fcSecond) {
          return null;
      }

      if (fcSecond.value !== fcfirst.value) {
          return {
              matchOther: true
          };
      }

      return null;
  }}
