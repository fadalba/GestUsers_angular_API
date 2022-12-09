import { Component, OnInit } from '@angular/core';
import { CrudService } from '../services/inscription.service';
import list from '../Books.json' /* pagination */
import { Ng2SearchPipeModule } from 'ng2-search-filter'; /* recherche */

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.css']
})
export class TableauComponent implements OnInit {
  list:any =list;  /* liste fiective à remplacer Books par []  pour les données rééels*/

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

  delete(id: any, i: any) {
    console.log(id);
    if (window.confirm('Do you want to go ahead?')) {
      this.crudService.deleteBook(id).subscribe((res) => {
        this.Books.splice(i, 1);
      });
    }
  }

}
