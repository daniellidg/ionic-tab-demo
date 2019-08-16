import { Component, OnInit } from '@angular/core';
import {MethodService} from "../../../../common/services/method.services";

@Component({
  selector: 'app-magazine',
  templateUrl: './magazine.component.html',
  styleUrls: ['./magazine.component.scss'],
})
export class MagazineComponent implements OnInit {

  constructor(private methods: MethodService) { }

  ngOnInit() {}

  goTo(url: string) {
    this.methods.goTo(url);
  }
}
