import { Component, Input, OnInit } from '@angular/core';
import {IExperience} from './../../../shared/models/experience.model';

@Component({
  selector: 'app-exp-card',
  templateUrl: './exp-card.component.html',
  styleUrls: ['./exp-card.component.scss']
})
export class ExpCardComponent implements OnInit {

  @Input() experience: IExperience
  
  constructor() { }

  ngOnInit(): void {
  }
  
  
}
