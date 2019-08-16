import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import {AttentionComponent} from "./attention/attention.component";
import {RecommendComponent} from "./recommend/recommend.component";
import {AvatarComponent} from "./components/avatar/avatar.component";
import {TabsearchbarComponent} from "./components/tabsearchbar/tabsearchbar.component";
import {SubscriptionComponent} from "./subscription/subscription.component";
import {HomeRoutingModule} from "./home-routing.module";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    HomeRoutingModule,
  ],
  declarations: [
    HomePage,
    AttentionComponent,
    RecommendComponent,
    SubscriptionComponent,
    AvatarComponent,
    TabsearchbarComponent,

  ]
})
export class HomePageModule {}
