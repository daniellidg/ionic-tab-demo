import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage  implements OnInit{
  segmentOptions = [
    { label: '关注', value: 'attention' },
    { label: '推荐', value: 'recommend' },
    { label: '订阅', value: 'subscription' },
  ];
  currentSegmentValue: any;

  ionScroll: any;
  showNewHeader: boolean = false;
  constructor() { }

  ngOnInit() {
    this.currentSegmentValue = this.segmentOptions[0].value;
  }

  segmentChanged(e) {
    console.log('segmentChanged() value:', e);

    this.currentSegmentValue = e.value;
  }

  logScrolling(e){
    if (e.detail.scrollTop > 0) {
      this.showNewHeader = true;
    } else {
      this.showNewHeader = false;
    }
  }

}
