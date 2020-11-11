import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './components/topbar/topbar.component';
import { ScoreComponent } from './components/score/score.component';
import { TitleComponent } from './components/title/title.component';



@NgModule({
  declarations: [TopbarComponent, ScoreComponent, TitleComponent],
  imports: [
    CommonModule
  ],
  exports:[
    TopbarComponent, ScoreComponent, TitleComponent
  ]
})
export class SharedModule { }
 