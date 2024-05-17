import { Component, ElementRef, HostListener, OnInit } from '@angular/core';

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

  constructor() {}

  ngOnInit() {
    this.setSectionOffsets();
    this.setActiveItem();
  }

  setSectionOffsets() {
    for (const section in this.sectionOffsets) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        this.sectionOffsets[section] = rect.top + window.pageYOffset - 100; 
      }
    }
  }

  setActiveItem() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    for (const section in this.sectionOffsets) {
      if (scrollPosition >= this.sectionOffsets[section]) {
        this.activeItem = section;
      }
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.setActiveItem();
  }

  scrollToElement(elementId: string) {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      this.activeItem = elementId;
    }
  }
}

