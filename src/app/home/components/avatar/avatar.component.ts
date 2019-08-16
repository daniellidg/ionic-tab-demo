import {Component, OnInit, Input, SimpleChange} from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent implements OnInit {
  @Input() avatarData: any = [];

  constructor() { }

  ngOnInit() { }

  ngOnChanges(changes: {[propName: string]: SimpleChange}) {
    console.log('ngOnChanges() avatar. changes:', changes);
  }

}
