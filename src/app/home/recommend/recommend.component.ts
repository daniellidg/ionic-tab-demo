import { Component, OnInit } from '@angular/core';
import {NavController} from "@ionic/angular";

@Component({
  selector: 'app-recommend',
  templateUrl: './recommend.component.html',
  styleUrls: ['./recommend.component.scss'],
})
export class RecommendComponent implements OnInit {
  avatarData = [
    { name: '周晓斌', imgUrl: '../../../assets/icon/avatar.png' },
    { name: '吴斌', imgUrl: '../../../assets/icon/avatar.png' },
    { name: '李达宁', imgUrl: '../../../assets/icon/avatar.png' },
  ];

  constructor(private navCtrl: NavController) { }

  ngOnInit() {}

  goTo(url: string) {
    this.navCtrl.navigateForward(url);
  }
}
