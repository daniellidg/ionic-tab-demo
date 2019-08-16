import { Component, OnInit } from '@angular/core';
import {NavController} from "@ionic/angular";

@Component({
  selector: 'app-attention',
  templateUrl: './attention.component.html',
  styleUrls: ['./attention.component.scss'],
})
export class AttentionComponent implements OnInit {
  segmentOptions = [
    { label: '关注', value: 'attention' },
    { label: '推荐', value: 'recommend' },
    { label: '订阅', value: 'subscription' },
  ];
  currentSegmentValue: any;

  avatarData = [
    { name: '周晓斌', imgUrl: '../../../assets/icon/avatar.png' },
    { name: '吴斌', imgUrl: '../../../assets/icon/avatar.png' },
  ];

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
    this.currentSegmentValue = this.segmentOptions[0].value;
  }

  segmentChanged(e) {
    console.log('segmentChanged() event:', e);

    this.currentSegmentValue = e.detail.value;
  }

  goTo(url: string) {
    this.navCtrl.navigateForward(url);
  }
}
