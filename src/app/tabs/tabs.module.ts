import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';
import {JournalComponent} from "../home/recommend/journal/journal.component";
import {DetailsComponent} from "../home/recommend/details/details.component";
import {MapComponent} from "../home/recommend/details/map/map.component";
import {MagazineComponent} from "../home/recommend/details/magazine/magazine.component";
import {ArticleComponent} from "../home/recommend/details/article/article.component";
import {AuthorComponent} from "../home/recommend/details/author/author.component";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
  ],
  declarations: [
    TabsPage,
    JournalComponent,
    DetailsComponent,
    ArticleComponent,
    MagazineComponent,
    AuthorComponent,
    MapComponent,

  ]
})
export class TabsPageModule {}
