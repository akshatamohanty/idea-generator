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

  constructor(public snackBar: MatSnackBar) { }

  ngOnInit() { }

  ideaPinned($event): void{
  	this.snackBar.open($event);
  }

  ideaShared($event): void{
    this.snackBar.open('Feature coming soon!');
  }

  increment(){
    if(this.ideas){
      this.displayedCount = Math.max( this.ideas.length : this.displayedCount + this.incrementValue );
    }

  }

}
