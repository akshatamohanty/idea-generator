import { Component, OnInit, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-idea-list',
  templateUrl: './idea-list.component.html',
  styleUrls: ['./idea-list.component.css']
})
export class IdeaListComponent implements OnInit {

  @Input() ideas: string[];

  constructor() { }

  ngOnInit() {  }

  ideaPinned($event): void{
  	console.log($event + " pinned");
  	//this.snackBar.snackBar.open('Option pinned', {duration: 200});
  }

  ideaShare($event): void{
    console.log($event + " shared");
  }

}
