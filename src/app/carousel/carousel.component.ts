import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  carasoulImage: any[]=[
    {'path':'../../assets/images//carouselImage/nature-3082832_1920.jpg','label1':"My First Slide",'label2':'Information about'},
    {'path':'../../assets/images//carouselImage/milky-way-2695569_1920.jpg','label1':"My Seconf Slide",'label2':'Information about'},
    {'path':'../../assets/images//carouselImage/spring-276014_1920.jpg', 'label1':"My Third Slide",'label2':'Information about'},
    {'path':'../../assets/images//carouselImage/rain.jpg', 'label1':"My Fourth Slide",'label2':'Information about'}
  ]
  constructor() { }

  ngOnInit() {
  }

}
