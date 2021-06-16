import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  carousel = [{
    image: "../../../../assets/Images/carousel-1.png",
    class: 'carousel-item active',
    label: "Gold Investment",
    text: "Invest your assets and wealth in gold"
  },
  {
    image: "../../../../assets/Images/carousel-2.png",
    class: 'carousel-item',
    label: "Gold Investment",
    text: "Invest your assets and wealth in gold"
  },
  {
    image: "../../../../assets/Images/carousel-3.png",
    class: 'carousel-item',
    label: "Gold Investment",
    text: "Invest your assets and wealth in gold"
  }]
  constructor() { }

  ngOnInit(): void {
  }

}
