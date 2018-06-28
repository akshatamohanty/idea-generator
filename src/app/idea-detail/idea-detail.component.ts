import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-idea-detail',
  templateUrl: './idea-detail.component.html',
  styleUrls: ['./idea-detail.component.css']
})
export class IdeaDetailComponent implements OnInit {

  @Input() phrase: string;
  @Output() pinned = new EventEmitter();
  @Output() shared = new EventEmitter();

  private isPinned: boolean;

  constructor() { }

  ngOnInit() {
  	this.isPinned = false;
  }

  pin(): void{
  	this.isPinned=!this.isPinned;
    this.pinned.emit(this.phrase);
  }

  share(): void{
    this.shared.emit(this.phrase);
  }

}
