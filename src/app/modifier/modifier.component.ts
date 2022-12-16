import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CrudService } from './../services/inscription.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-modifier',
  templateUrl: './modifier.component.html',
  styleUrls: ['./modifier.component.css']
})
export class ModifierComponent implements OnInit {
  mailExiste:string='';
  succes:string='Modifier avec succes';
  getId: any;
  updateForm: FormGroup;
  registerForm!: FormGroup<any>;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private activatedRoute: ActivatedRoute,
    private crudService: CrudService
  ) {

    this.updateForm = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      email: [''],

      
    });

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

  ngOnInit(): void {
    this.updateForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],

    });
  }

  onUpdate(): any {
    this.crudService.updateBook(this.getId, this.updateForm.value).subscribe(
      () => {
        alert(this.succes),
        this.ngZone.run(() => this.router.navigateByUrl('/cpt1'));
      },
      (err) => {
        this.mailExiste = "Email existe déja";
      }
    );
  }

}
