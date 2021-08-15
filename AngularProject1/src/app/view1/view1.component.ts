import { Component, OnInit } from '@angular/core';
import { MatSlider, MatSliderChange } from '@angular/material/slider';
import { Observable } from 'rxjs';

import { SliderValueService } from '../slider-value.service';


@Component({
  selector: 'app-view1',
  templateUrl: './view1.component.html',
  styleUrls: ['./view1.component.css']
})
export class View1Component implements OnInit {

  
  value : number=50; // actual slider value

  constructor(private _sliderValueService: SliderValueService) { }

  ngOnInit(): void 
  {
     
     this._sliderValueService.GetAll().subscribe(
       data => {this.value = data[0].value} , 
       err => console.error(err)
     )
  
  }

  // call function everytime slider value is changed
  Update(event:MatSliderChange)
  {
    if(event.value!==null)
    {
    this.value = event.value;
    this._sliderValueService.UpdateSlider(this.value).subscribe(response =>{});
  }
}

}
