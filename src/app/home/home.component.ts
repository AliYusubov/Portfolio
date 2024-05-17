import { isPlatformBrowser } from '@angular/common';
import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import Typed from 'typed.js';

declare var typed: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit {

  constructor(@Inject(PLATFORM_ID) private platformId: any) { }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      var typed = new Typed(".auto-type", {
        strings: ["Front-End Developer", "Freelancer", "Youtuber"],
        typeSpeed: 100,
        backSpeed: 100,
        loop: true
      });
    }
  }

}




