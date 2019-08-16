import { Component, OnInit } from '@angular/core';
import {Keyboard} from "@ionic-native/keyboard/ngx";
import {Platform} from "@ionic/angular";

@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.scss'],
  providers: [Keyboard]
})
export class JournalComponent implements OnInit {
  commentLength: number = 0;
  currentComment: string;
  isShowCommentArea: boolean = false;
  commentAreaHeight: number = 0;

  constructor(private keyboard: Keyboard, private platform: Platform) { }

  ngOnInit() {
    this.platform.ready().then(() => {
      // this.keyboard.onKeyboardShow().subscribe((data) => {
      //   console.log('onKeyboardShow() response:', data);
      //
      //   this.isShowCommentArea = true;
      //   this.commentAreaHeight = data.keyboardHeight;
      // });
      //
      // this.keyboard.onKeyboardHide().subscribe((data) => {
      //   console.log('onKeyboardHide() response:', data);
      //
      //   this.commentAreaHeight = 0;
      //   this.isShowCommentArea = false;
      // });
      window.addEventListener('keyboardWillShow', (e: any) => {
        console.log('onKeyboardShow() response:', e);
        this.isShowCommentArea = true;
        this.commentAreaHeight = e.keyboardHeight;
      });
      window.addEventListener('keyboardWillHide', (e) => {
        this.commentAreaHeight = 0;
        this.isShowCommentArea = false;
      });
    });
  }

  onIonChange(event) {
    console.log('onIonChange() this.currentComment:', this.currentComment);
    this.commentLength = this.currentComment ? this.currentComment.length : 0;
  }

  addComment() {
    this.keyboard.show();
  }

  sendComment() {
    console.log('sendComment(), currentComment:', this.currentComment);
  }
}
