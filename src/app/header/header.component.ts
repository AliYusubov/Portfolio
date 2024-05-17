import { Component, Inject, OnInit, PLATFORM_ID, HostListener } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  activeItem: string = '';
  sectionOffsets: { [key: string]: number } = {
    'home': 0,
    'about': 0,
    'resume': 0,
    'projects': 0,
    'contact': 0
  };
  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: any) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit() {
    if (this.isBrowser) {
      this.setSectionOffsets();
      this.setActiveItem();
    }
  }

  setSectionOffsets() {
    if (this.isBrowser) {
      for (const section in this.sectionOffsets) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          this.sectionOffsets[section] = rect.top + window.pageYOffset - 100; 
        }
      }
    }
  }

  setActiveItem() {
    if (this.isBrowser) {
      const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      for (const section in this.sectionOffsets) {
        if (scrollPosition >= this.sectionOffsets[section]) {
          this.activeItem = section;
        }
      }
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (this.isBrowser) {
      this.setActiveItem();
    }
  }

  scrollToElement(elementId: string) {
    if (this.isBrowser) {
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        this.activeItem = elementId;
      }
    }
  }
}
