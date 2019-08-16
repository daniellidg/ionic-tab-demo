import { Component, OnInit } from '@angular/core';
import {MethodService} from "../../../common/services/method.services";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  tabBarData: any = [
    { name: '文章', value: 'article' },
    { name: '相关期刊', value: 'magazine' },
    { name: '作者', value: 'author' },
    { name: '导图', value: 'map' },
  ];
  currentTab: any = this.tabBarData[0];

  constructor(private methods: MethodService) { }

  ngOnInit() {}

  tabBarChange(item) {
    this.currentTab = item;
  }

  goTo(url: string) {
    this.methods.goTo(url);
  }
}
