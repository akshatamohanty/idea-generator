import { Component, OnInit, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-idea-list',
  templateUrl: './idea-list.component.html',
  styleUrls: ['./idea-list.component.css']
})
export class IdeaListComponent implements OnInit {

  readonly incrementValue: number = 5;

  @Input() ideas: string[];
  private displayedCount: number = this.incrementValue; 

  constructor() { }

  ngOnInit() { }

  ideaPinned($event): void{
  	console.log($event + " pinned");
  	//this.snackBar.snackBar.open('Option pinned', {duration: 200});
  }

  ideaShared($event): void{
    console.log($event + " shared");
  }

  increment(){
    alert("scrolling")
    if(this.ideas){
      this.displayedCount = Math.max( this.ideas.length : this.displayedCount + this.incrementValue );
    }

  }

}
