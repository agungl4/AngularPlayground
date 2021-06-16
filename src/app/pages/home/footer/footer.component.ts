import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  address = [{
    label: "Central office",
    text: `Jl. Jendral Gatot Subroto Kav. 36-38     
    Jakarta 12190 Indonesia`
  }]
  constructor() { }

  ngOnInit(): void {
  }

}
