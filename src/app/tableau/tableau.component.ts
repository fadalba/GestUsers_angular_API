import { Component, OnInit } from '@angular/core';
import { CrudService } from '../services/inscription.service';

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.css'],
})
export class TableauComponent implements OnInit {
  Books: any = [];
  data:any;

  constructor(private crudService: CrudService) {}

  ngOnInit(): void {
    this.crudService.GetBooks().subscribe((res) => {
      console.log(res);
      this.data = res;
      this.Books = this.data.filter((e: any) => e.etat == true);

      /* 
      ngOnInit(): void {

  this.userService.getUsers().subscribe( 
      data =>{

        this.users = data;

        this.crudService = this.Books.filter((e:any)=> e.etat == true)
        console.log(this.userActif)
      }
); 

}
      */
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
  changeRole = (id: any, profil: any) => {
    profil = profil == 'admin' ? 'user' : 'admin'; /* pour switche */
    const user = { profil: profil };
    if (confirm('Changer de role')) {
      this.crudService.change_role(id, user).subscribe((data) => {
        this.ngOnInit();
      });
    }
  };

  changeRole2 = (id: any, etat: any) => {
    etat = etat == true ? false : true; /* pour archiver */
    const user = { etat: etat };
    if (confirm('Archiver !!!')) {
      this.crudService.change_role(id, user).subscribe((data) => {
        this.ngOnInit();
      });
    }
  };
}
/* 

deleteId=(id:any,etat:any)=> {

etat == "false" ? etat = true : etat = false

 const user ={
 etat : etat

 }

 if (confirm("Archiver cet utilisateur")) {
    this.crudService.modifUsers(id,user).subscribe(

      data=>{
        this.ngOnInit();
      }
   );
 }
}
*/
