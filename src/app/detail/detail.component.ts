import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExperienceService } from '../services/experience/experience.service';
import { IExperience } from '../shared/models/experience.model';
import { DetailModule } from './detail.module';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  public experience: IExperience;

  constructor(
    private route: ActivatedRoute,
    private experienceService: ExperienceService
    ) { }

  ngOnInit(): void {
    this.getParams();
  }

  private getParams(): void {
     // this.experience = this.experienceService.getExperienceById(id)
    this.route.params.subscribe(params => {
      const id = params.id;
      this.experienceService.getmoreDetailId(id).subscribe(response => {
        console.log('id', id);
        console.log('respuesta', response);
        this.experience = response.experience;
      })  
    });
  }

}
