import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IdeaService } from '../idea.service';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-page-results',
  templateUrl: './page-results.component.html',
  styleUrls: ['./page-results.component.css']
})
export class PageResultsComponent implements OnInit {

  tweet: string = "Check out the Idea Maker at \
                  https://akshatamohanty.github.io/idea-generator";
  wordA: string;
  wordB: string;
  results;
  baseUrl;
  user;

  constructor(private route: ActivatedRoute, 
              private ideaService: IdeaService, 
              private authService: AuthenticationService) {

      this.baseUrl = authService.base;

	  	this.route
		  .queryParams.subscribe(params => {
		    	let A: string = params['wordA'];
		    	let B: string= params['wordB'];

		    	if(A && B){
		    		this.wordA = A; 
		    		this.wordB = B;

		    		// Todo: Memory leaks?
		    		this.results = ideaService.getIdeas(this.wordA, this.wordB);

		    	}

		});
	  

  }

  ngOnInit() { this.user = this.authService.loggedInUser; }

  onScroll($event){
  		if($event > 30 && !this.user){
  			// Todo: show login screen
  		}
  }

  login(){
    this.user = this.authService
                .loginWithLinkedIn()
                .subscribe((data)=>console.log(data));
  }

}
