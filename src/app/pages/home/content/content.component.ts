import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  benefits = [{
    label: "delivery",
    text: "We have free delivery service to all city in Indonesia."
  },
  {
    label: "legality",
    text: "We commit to keep you trusted with legality transaction."
  },
  {
    label: "price",
    text: "Good quality with the best prices.",
  },
  {
    label: "reward",
    text: "More transaction, more point and reward."
  },
  {
    label: "transaction",
    text: "Our transaction is simple and secured."
  },
  {
    label: "brand",
    text: "our product is the best on quality and brand."
  }
  ]

  products = [{
    image: "../../../../assets/Images/1.png",
    label: "Platinum Investment"
  },
  {
    image: "../../../../assets/Images/2.png",
    label: "Gold Investment"
  },
  {
    image: "../../../../assets/Images/1.png",
    label: "Silver Investment"
  }
]

  constructor() { }

  ngOnInit(): void {
  }

}
