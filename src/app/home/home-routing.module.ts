import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePage} from "./home.page";
import {JournalComponent} from "./recommend/journal/journal.component";
import {DetailsComponent} from "./recommend/details/details.component";

const routes: Routes = [
  { path: '', component: HomePage },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule { }
