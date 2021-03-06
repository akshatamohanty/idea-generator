import { Component, OnInit, Input, HostListener, Output, EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-idea-list',
  templateUrl: './idea-list.component.html',
  styleUrls: ['./idea-list.component.css']
})
export class IdeaListComponent implements OnInit {

  readonly incrementValue: number = 5;

  @Input() ideas: string[];
  @Output() scrolled  = new EventEmitter();
  private displayedCount: number = this.incrementValue; 

  constructor(public snackBar: MatSnackBar) { }

  // todo: Memory Leak?
  @HostListener("window:scroll", [])
  onScroll(): void {
      if(!this.ideas) return;

      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
          if(this.displayedCount < this.ideas.length){
              this.snackBar.open('Adding a few more ideas!', '', {duration: 800} );
              this.displayedCount += 10;
              this.scrolled.emit(this.displayedCount);
          }
          else{
            this.snackBar.open('Oops... out of ideas for now!', '', {duration: 400} );
          }
      }
  }

  ngOnInit() { }

  ideaPinned($event): void{
  	this.snackBar.open($event, '', {duration: 400});
  }

  ideaShared($event): void{
    this.snackBar.open('Feature coming soon!', '', {duration: 400} );
  }


}
