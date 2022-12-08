import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { CrudService } from '../services/inscription.service';
import { NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})

export class InscriptionComponent implements OnInit {
  registerForm !: FormGroup;
  password = 'password';
  submitted = false;
 /*  bookForm: FormGroup; */

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private crudService: CrudService
  ) {
    this.registerForm = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      tel: [''],
    });
  } 

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
          firstName: ['', Validators.required],
          lastName: ['', Validators.required],
          tel: ['', Validators.required],
          email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
          password: ['', [Validators.required]],
          passwordC: ['', [Validators.required, matchValidator(this.password)]],
          profil: ['', [Validators.required]]

      });
  }
/*   get f() { return this.registerForm.controls; } */

  onSubmit() {
    this.submitted = true;



    // stop here if form is invalid
    // if (this.registerForm.invalid) {
    //     return;
    // }

    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))

    const user={
      firstName:this.registerForm.value.firstName,
      lastName:this.registerForm.value.lastName,
      email:this.registerForm.value.email,
      password:this.registerForm.value.password

    }
    this.crudService.AddBook(this.registerForm.value).subscribe(
      () => {
        console.log('Data added successfully!');
        this.ngZone.run(() => this.router.navigateByUrl('/books-list'));
      },
      (err) => {
        console.log(err);
      },

/*       this.inscriService.addUser(user).subscribe(
      data =>{
        console.log(data)
      }
    ) */
 
);
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
              throw new Error('matchValidator(): non conforme');
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
