import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { sliderV } from './slider-v';

@Injectable({
  providedIn: 'root'
})
export class SliderValueService {
  
  constructor(private http : HttpClient ) { }

  GetAll():Observable<sliderV[]>
  {
      return this.http.get<sliderV[]>("http://localhost:3000/sliderV");
  }

  UpdateSlider(value:number)
  {
    
    var temp = {"value":value};

    return this.http.put<void>("http://localhost:3000/sliderV/1" , temp);
    
  }
}
