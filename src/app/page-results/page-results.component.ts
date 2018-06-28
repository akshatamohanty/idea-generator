import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IdeaService } from '../idea.service';


@Component({
  selector: 'app-page-results',
  templateUrl: './page-results.component.html',
  styleUrls: ['./page-results.component.css']
})
export class PageResultsComponent implements OnInit {

  wordA: string;
  wordB: string;
  results;

  constructor(private route: ActivatedRoute, private ideaService: IdeaService) {

	  	this.route
		  .queryParams.subscribe(params => {
		    	let A: string = params['wordA'];
		    	let B: string= params['wordB'];

		    	if(A && B){
		    		this.wordA = A; 
		    		this.wordB = B;

		    		this.results = ideaService.getIdeas();
		    	}

		});
	  

  }

  ngOnInit() { }

}
