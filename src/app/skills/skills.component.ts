import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  progress1: number = 0;
  progress2: number = 0;
  progress3: number = 0;
  progress4: number = 0;
  progress5: number = 0;
  progress6: number = 0;
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: any) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {
    if (this.isBrowser) {
      // AOS kütüphanesini sadece tarayıcı ortamında dinamik olarak yükle
      import('aos').then(AOS => {
        AOS.init();
        this.startAnimationOnScroll();
      });
    }
  }

  private startAnimationOnScroll() {
    if (this.isBrowser) {
      const progressSign = document.querySelector('.progress-sign');
      if (progressSign && this.isElementInViewport(progressSign)) {
        this.updateProgressBars();
      }

      window.addEventListener('scroll', () => {
        if (progressSign && this.isElementInViewport(progressSign)) {
          this.updateProgressBars();
        }
      });
    }
  }

  private isElementInViewport(el: Element): boolean {
    if (!this.isBrowser) return false;

    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  private updateProgressBars() {
    if (this.isBrowser) {
      this.progress1 = 100;
      this.progress2 = 80;
      this.progress3 = 90;
      this.progress4 = 90;
      this.progress5 = 75;
      this.progress6 = 55;
    }
  }
}
