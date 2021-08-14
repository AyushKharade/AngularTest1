import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { sliderV } from '../slider-v';
import { SliderValueService } from '../slider-value.service';
import { MatSlider, MatSliderChange } from '@angular/material/slider';

@Component({
  selector: 'app-view2',
  templateUrl: './view2.component.html',
  styleUrls: ['./view2.component.css']
})
export class View2Component implements OnInit {

  sliderValue! : Observable<sliderV[]>; // ignore the warnings, this is an observerable variable
  value : number=50; // actual slider value

  constructor(private _sliderValueService: SliderValueService) { }

  ngOnInit(): void 
  {
     this.sliderValue=this._sliderValueService.GetAll();
     this.sliderValue.subscribe(
       data => {this.value = data[0].value} , 
       err => console.error(err)
       
       
     )
  }

  Update(event:MatSliderChange)
  {
    if(event.value!==null)
    {
    this.value = event.value;
    //console.log(this.value);
    //console.log(event.value+ "event");
    this._sliderValueService.UpdateSlider(this.value).subscribe(response =>{});
  }
}

}
