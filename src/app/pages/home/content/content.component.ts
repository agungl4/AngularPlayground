import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  benefits = [{
    label: "Delivery",
    text: "We have free delivery service to all city in Indonesia."
  },
  {
    label: "Legality",
    text: "We commit to keep you trusted with legality transaction."
  },
  {
    label: "Price",
    text: "Good quality with the best prices.",
  },
  {
    label: "Reward",
    text: "More transaction, more point and reward."
  },
  {
    label: "Transaction",
    text: "Our transaction is simple and secured."
  },
  {
    label: "Brand",
    text: "Our product is the best on quality and brand."
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
