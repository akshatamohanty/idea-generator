import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';


@Component({
  selector: 'app-page-landing',
  templateUrl: './page-landing.component.html',
  styleUrls: ['./page-landing.component.css']
})
export class PageLandingComponent implements OnInit {

  user;

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
  	
  }

  ngAfterViewInit(){
  	this.user = this.authService.loggedInUser;
  }

}
