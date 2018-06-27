import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-idea-list',
  templateUrl: './idea-list.component.html',
  styleUrls: ['./idea-list.component.css']
})
export class IdeaListComponent implements OnInit {

  @Input() ideas: string[];

  constructor() { }

  ngOnInit() {
  }

}
