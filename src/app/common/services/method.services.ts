/**
 * Created by BAB1600764 on 8/6/2019.
 */
import {Injectable} from "@angular/core";
import {NavController} from "@ionic/angular";

@Injectable({
  providedIn: 'root'
})

export class MethodService{
  constructor(private navCtrl: NavController) {}

  goTo(url: string) {
    this.navCtrl.navigateForward(url);
  }
}