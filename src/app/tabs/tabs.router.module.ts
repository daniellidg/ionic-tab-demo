import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import {DetailsComponent} from "../home/recommend/details/details.component";
import {JournalComponent} from "../home/recommend/journal/journal.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  },
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      { path: 'home', loadChildren: '../home/home.module#HomePageModule' },
      { path: 'message', loadChildren: '../message/message.module#MessagePageModule' },
      { path: 'mine', loadChildren: '../mine/mine.module#MinePageModule' },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  { path: 'journal', component: JournalComponent },
  { path: 'details', component: DetailsComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
