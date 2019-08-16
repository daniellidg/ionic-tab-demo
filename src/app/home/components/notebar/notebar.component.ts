import { Component, OnInit } from '@angular/core';
import {Input} from "@angular/core/src/metadata/directives";

@Component({
  selector: 'app-notebar',
  templateUrl: './notebar.component.html',
  styleUrls: ['./notebar.component.scss'],
})
export class NotebarComponent implements OnInit {
  @Input() noteBarData: any = [];
  constructor() { }

  ngOnInit() {}

}
