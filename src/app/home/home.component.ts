import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(@Inject(PLATFORM_ID) private platformId: any) { }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Typed.js'i dinamik olarak yükle
      import('typed.js').then((TypedModule) => {
        const Typed = TypedModule.default;
        const options = {
          strings: ["Front-End Developer", "Freelancer", "Youtuber"],
          typeSpeed: 100,
          backSpeed: 100,
          loop: true
        };
        new Typed(".auto-type", options);
      }).catch(err => {
        console.error('Typed.js yüklenirken hata oluştu:', err);
      });
    }
  }
}





