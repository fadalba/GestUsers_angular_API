import { Component, OnInit } from '@angular/core';
import { CrudService } from '../services/inscription.service';
import list from '../Books.json' /* pagination */
import { Ng2SearchPipeModule } from 'ng2-search-filter'; /* recherche */

@Component({
  selector: 'app-list-archives',
  templateUrl: './list-archives.component.html',
  styleUrls: ['./list-archives.component.css']
})
export class ListArchivesComponent implements OnInit {
  book:any =list;  /* liste fiective à remplacer Books par []  pour les données rééels*/

  pages: number = 1; // début de pagination
  searchText:any; // search installer npm i ng2-search-filter
 
  data:any;
  Books: any = [];
  constructor(private crudService: CrudService) {}

  ngOnInit(): void {
    this.crudService.GetBooks().subscribe((res) => {
      console.log(res);
      this.data = res;
      this.Books = this.data.filter((e: any) => e.etat == false);

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
    if (window.confirm('Souhaitez-vous supprimer?')) { // pop up
      this.crudService.deleteBook(id).subscribe((res) => {
        this.Books.splice(i, 1);
      });
    }
  }


  changeRole2 = (id: any, etat: any) => {
    etat = etat == false ? true : false; /* pour archiver */
    const user = { etat: etat };
    if (confirm('désarchiver !!!')) {
      this.crudService.change_role(id, user).subscribe((data) => {
        this.ngOnInit();
      });
    }
  };


  
}
