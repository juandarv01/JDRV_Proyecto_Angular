import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IExperience } from 'src/app/shared/models/experience.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() experience: IExperience;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  public  irReserva():void{
    this.router.navigate(['/booking', this.experience._id])
  }
}
