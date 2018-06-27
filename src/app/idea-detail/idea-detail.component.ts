import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-idea-detail',
  templateUrl: './idea-detail.component.html',
  styleUrls: ['./idea-detail.component.css']
})
export class IdeaDetailComponent implements OnInit {

  @Input() phrase: string;

  constructor() { }

  ngOnInit() {
  }

}
