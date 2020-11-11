import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IExperience } from 'src/app/shared/models/experience.model';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { IExperienceResponse } from 'src/app/shared/models/experienceResponse.model';
import { environment} from './../../../environments/environment';
import { ITop5ExperienceResponse } from 'src/app/shared/models/to5ExperiencesResponse.model';
import { ImoreDetailResponse } from 'src/app/shared/models/moreDetailResponse.model';


@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  private urlApi: string = environment.urlBase;
 
  
  // private experiences: Array<IExperience> = [
  //   {
  //       id: 1,
  //       image: 'https://a0.muscache.com/im/pictures/f3f1ac58-66b0-4d52-b754-a3b112431e52.jpg',
  //       description: 'Casa de descando',
  //       place: 'Santa Elena',
  //       price:'300000',
  //       score: 2
  //   },
  //   {
  //       id: 2,
  //       image: 'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/08/3a/bd/fe.jpg',
  //       description: 'Parapente',
  //       place: 'Chicamocha',
  //       price:'500000',
  //       score: 5     
  //   },
  //   {
  //       id: 3,
  //       image: 'https://i2.wp.com/parquestematicos.com/wp-content/uploads/2020/01/disneylandpark2020.jpeg',
  //       description: 'Disney Fotos',
  //       place: 'Cali',
  //       price:'100000',
  //       score:4
  //   },
  //   {
  //       id: 4,
  //       image: 'https://miro.medium.com/max/2560/1*_bfBYAoHLR3WsLWhLenw0A.jpeg',
  //       description: 'Glamping',
  //       place: 'Retiro',
  //       price:'800000',
  //       score:1
  //   },
  //   {
  //       id: 5,
  //       image: 'https://img.freepik.com/foto-gratis/hermosa-playa-tropical-mar-palmera-coco-isla-paradisiaca_74190-2206.jpg',
  //       description: 'Vacaciones en plata',
  //       place: 'Capuganá',
  //       price:'1300000',
  //       score:3
  //   }
  // ]

  constructor(private httpClient: HttpClient) { }

  private handlerError(error: HttpErrorResponse){
    console.error('Http error', error);
    return throwError(`Error calling Api ${error.message}`)
  };

  public getExperiences (): Observable<IExperienceResponse> {
    const url = `${this.urlApi}/experiences`;
    return this.httpClient.get<IExperienceResponse>(url).pipe(
      retry(2), catchError(this.handlerError)
    );
  }

  public getTo5Experiences (): Observable<ITop5ExperienceResponse> {
    const url = `${this.urlApi}/experiences/top5`;
    return this.httpClient.get<ITop5ExperienceResponse>(url).pipe(
      retry(2), catchError(this.handlerError)
    );
  }
  
  public getmoreDetailId (id:string): Observable<ImoreDetailResponse> {
    const url = `${this.urlApi}/experiences/detail/${id}`;
    return this.httpClient.get<ImoreDetailResponse>(url).pipe(
      retry(2), catchError(this.handlerError)
    );
  }
  public getExperienceById (id: number): any{
    
  // return this.experiences.find(item => item.id === id)
  }

}
