
import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CrudService } from './../services/inscription.service';
import { FormGroup, FormBuilder } from '@angular/forms';

import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators,FormControl} from '@angular/forms';

@Component({
  selector: 'app-modifier',
  templateUrl: './modifier.component.html',
  styleUrls: ['./modifier.component.css']
})

export class ModifierComponent implements OnInit {
  registerForm !: FormGroup;
  password = 'password';
  submitted = false;

  getId: any;
  updateForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private activatedRoute: ActivatedRoute,
    private crudService: CrudService
  ) {
    this.getId = this.activatedRoute.snapshot.paramMap.get('id');

    this.crudService.GetBook(this.getId).subscribe((res) => {
      this.updateForm.setValue({
        firstName: res['firstName'],
        lastName: res['lastName'],
        email: res['email'],
      });
    });

    this.updateForm = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      email: [''],
    });
  }

  ngOnInit() {}

  onUpdate(): any {
    this.crudService.updateBook(this.getId, this.updateForm.value).subscribe(
      () => {
        console.log('Data updated successfully!');
        this.ngZone.run(() => this.router.navigateByUrl('/books-list'));
      },
      (err) => {
        console.log(err);
      }
    );

  constructor(private formBuilder : FormBuilder) { }

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
          firstName: ['', Validators.required],
          lastName: ['', Validators.required],
          tel: ['', Validators.required],
          email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
          password: ['', [Validators.required]],
          passwordC: ['', [Validators.required, matchValidator(this.password)]],
          profil: ['', [Validators.required]]
          

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
  }
}
