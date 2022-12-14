import { AngularFileUploaderConfig } from './../../../node_modules/angular-file-uploader/lib/angular-file-uploader.types.d';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { AuthService } from './.././shared/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder,Validator, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})

export class InscriptionComponent implements OnInit {
  signupForm: FormGroup;

  constructor(
    private http: HttpClient,
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
      photo: [''],
      etat: [true],
    });
  }
  
  // function upload images
  @ViewChild('fileInput', {static: false})
    fileInput!: ElementRef; 


  onFileUpload(){
    const image =  this.fileInput.nativeElement.files[0];
    const file = new FormData();
    file.set('file', image);
    this.http.post('http://localhost:4000/', file).subscribe(res =>{

    console.log(res);

    });

    // end image

  }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      tel: ['', Validators.required],
      email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['', [Validators.required]],
      passwordC: ['', [Validators.required]],
      profil: ['', [Validators.required]],
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
