import { Component, OnInit } from '@angular/core';
import { CrudService } from '../services/inscription.service';
import list from '../Users.json'; /* pagination */
import { Ng2SearchPipeModule } from 'ng2-search-filter'; /* recherche */

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.css']
})
export class TableauComponent implements OnInit {
  user:any =list;  /* liste fiective à remplacer users par []  pour les données rééels*/

  pages: number = 1;
  searchText:any; // search installer npm i ng2-search-filter

  Users: any = [];

  constructor(private crudService: CrudService) {}

  ngOnInit(): void {
    this.crudService.GetUsers().subscribe((res) => {
      console.log(res);
      this.Users = res;
    });
  }

  delete(id: any, i: any) {
    console.log(id);
    if (window.confirm('Do you want to go ahead?')) {
      this.crudService.deleteUser(id).subscribe((res) => {
        this.Users.splice(i, 1);
      });
    }
  }

}
