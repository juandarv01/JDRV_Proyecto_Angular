import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RankingComponent } from './components/ranking/ranking.component';
import { CardComponent } from './components/card/card.component';
import { SharedModule } from '../shared/shared.module';
import { ExpCardComponent }  from './components/exp-card/exp-card.component';
import { ExpListComponent } from './components/exp-list/exp-list.component';
import { RouterModule } from '@angular/router';
import { HomeRoutingModule } from './home-routing.module';


@NgModule({
  declarations: [HomeComponent, RankingComponent, CardComponent, ExpCardComponent, ExpListComponent],
    imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
