import { Component, OnInit } from '@angular/core';
import { CrudService } from '../services/inscription.service';

@Component({
  selector: 'app-list-archives',
  templateUrl: './list-archives.component.html',
  styleUrls: ['./list-archives.component.css']
})
export class ListArchivesComponent implements OnInit {

  Books: any = [];
  data:any;

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
    if (window.confirm('Do you want to go ahead?')) {
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
