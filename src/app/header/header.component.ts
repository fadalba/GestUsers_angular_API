import { Component, OnInit } from '@angular/core';
import { AuthService } from './.././shared/auth.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  currentUser: any = {};
  getItem: any = {};

  constructor(
    public authService: AuthService,
    private actRoute: ActivatedRoute,
    public router: Router
  ) {
   
  }

  ngOnInit() {
    
   
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.authService.getUserProfile(localStorage.getItem('id')).subscribe((res) => {
      console.log(res)
      this.currentUser = res.msg;
      
     
    }); 
  }
  loginUser() {
    {
      this.authService.doLogout();
    }
  }
  doLogout() {
    let removeToken = localStorage.removeItem('access_token');
    if (removeToken == null) {
      this.router.navigate(['cpt4']);
    }
  }


  
}
