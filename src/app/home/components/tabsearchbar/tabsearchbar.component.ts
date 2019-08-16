import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-tabsearchbar',
  templateUrl: './tabsearchbar.component.html',
  styleUrls: ['./tabsearchbar.component.scss'],
})
export class TabsearchbarComponent implements OnInit {
  @Input() tabData: any;
  @Input() currentSelectTab: string;
  @Output() onTabChange = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  onTabChanged(item) {
    this.onTabChange.emit(item);
  }
}
