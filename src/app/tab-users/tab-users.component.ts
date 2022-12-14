import { Component, OnInit } from '@angular/core';
import { CrudService } from '../services/inscription.service';

@Component({
  selector: 'app-tab-users',
  templateUrl: './tab-users.component.html',
  styleUrls: ['./tab-users.component.css']
})
export class TabUsersComponent implements OnInit {

  Books: any = [];

  constructor(private crudService: CrudService) {}

  ngOnInit(): void {
    this.crudService.GetBooks().subscribe((res) => {
      console.log(res);
      this.Books = res;
    });
  }

  delete(id: any, i: any) {
    console.log(id);
    if (window.confirm('Do you want to go ahead?')) {
      this.crudService.deleteBook(id).subscribe((res) => {
        this.Books.splice(i, 1);
      });
    }
  }
  changeRole=(id:any,profil:any)=> { 
    profil = profil=="admin" ? "user" : "admin" 
    const user ={ profil : profil } 
    if (confirm("Changer de role")) { 
      this.crudService.change_role(id, user).subscribe( data=>{ this.ngOnInit(); } ); } }


}
