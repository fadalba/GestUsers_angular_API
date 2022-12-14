import { Component, OnInit } from '@angular/core';
import { AuthService } from './.././shared/auth.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  currentUser: any = {};

  constructor(
    public authService: AuthService,
    private actRoute: ActivatedRoute
  ) {
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.authService.getUserProfile(id).subscribe((res) => {
      console.log(res)
      this.currentUser = res.msg;
    
    });
  }

  ngOnInit() {}
  loginUser() {
    {
      this.authService.doLogout();
    }
  }
}
