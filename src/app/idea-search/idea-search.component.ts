import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-idea-search',
  templateUrl: './idea-search.component.html',
  styleUrls: ['./idea-search.component.css']
})
export class IdeaSearchComponent implements OnInit {

  @Input() wordA: string;
  @Input() wordB: string;
  @Input() compressed: boolean;

  ngOnInit() {  }

}
