import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-idea-search',
  templateUrl: './idea-search.component.html',
  styleUrls: ['./idea-search.component.css']
})
export class IdeaSearchComponent implements OnInit {

  private wordA: string;
  private wordB: string;

  constructor(private route: ActivatedRoute) { 

	  	this.route
		  .queryParams.subscribe(params => {
		    	let A: string = params['wordA'];
		    	let B: string= params['wordB'];

		    	if(A && B){
		    		this.wordA = A; 
		    		this.wordB = B;
		    	}

		});
	  
  }

  ngOnInit() {  }

}
