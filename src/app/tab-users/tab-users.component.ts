import { Component, OnInit } from '@angular/core';
import { CrudService } from '../services/inscription.service';
import list from '../Books.json' /* pagination */
import { Ng2SearchPipeModule } from 'ng2-search-filter'; /* recherche */

@Component({
  selector: 'app-tab-users',
  templateUrl: './tab-users.component.html',
  styleUrls: ['./tab-users.component.css']
})
export class TabUsersComponent implements OnInit {
  book:any =list;  /* liste fiective à remplacer Books par []  pour les données rééels*/
  pages: number = 1;
  searchText:any; // search installer npm i ng2-search-filter

  Books: any = [];

  constructor(private crudService: CrudService) {}

  ngOnInit(): void {
    this.crudService.GetBooks().subscribe((res) => {
      console.log(res);
      this.Books = res;
    });
  }



}
