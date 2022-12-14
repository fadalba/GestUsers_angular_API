import { AngularFileUploaderConfig } from './../../../node_modules/angular-file-uploader/lib/angular-file-uploader.types.d';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './.././shared/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder,Validator, Validators } from '@angular/forms';
@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})

export class InscriptionComponent implements OnInit {
  signupForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    public authService: AuthService,
    public router: Router
  ) {
    this.signupForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      profil: [''],
      tel: [''],
      password: [''],
      matricule: [''],
      etat: [true],
    });
  }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      tel: ['', Validators.required],
      email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['', [Validators.required]],
      passwordC: ['', [Validators.required]],
      profil: ['', [Validators.required]],
      matricule: [Date.now()], /* Autogénérer matricule à partir de la date */
      etat: [true]
    });
  }

  registerUser() {
    this.authService.signUp(this.signupForm.value).subscribe((res) => {
      if (res.result) {
        this.signupForm.reset();
        this.router.navigate(['cpt4']);
      }
    });
  }
  
}
