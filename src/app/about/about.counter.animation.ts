// about.counter.animation.ts

export class AboutAnimation {
    private isCounterVisible = false;
  
    constructor() {}
  
    init(): void {
      window.addEventListener('scroll', this.onScroll.bind(this));
    }
  
    private onScroll(): void {
      const counterSignElement = document.querySelector('.counter-sign');
      if (!counterSignElement) {
        console.error('.counter-sign element not found');
        return;
      }
  
      const counterElement = document.querySelector('.counter');
      if (!counterElement) {
        console.error('.counter element not found');
        return;
      }
  
      const rect = (counterSignElement as HTMLElement).getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        if (!this.isCounterVisible) {
          this.isCounterVisible = true;
          this.updateCounts();
        }
      } else {
        this.isCounterVisible = false;
      }
    }
  
    private updateCounts(): void {
      const countElements = document.querySelectorAll('.counter h1');
      const countsAndSpeeds = [
        { target: 550, speed: 30 },
        { target: 600, speed: 30 },
        { target: 700, speed: 25 },
        { target: 800, speed: 20 },
      ];
  
      countElements.forEach((element, index) => {
        const { target, speed } = countsAndSpeeds[index];
        const countTo = parseInt(element.getAttribute('data-count') || '0', 10);
        this.animateCount(element as HTMLElement, countTo, speed);
      });
    }
  
    private animateCount(element: HTMLElement, countTo: number, duration: number): void {
      let currentCount = 0;
      const step = Math.ceil(duration / countTo);
      const timer = setInterval(() => {
        currentCount += step;
        if (currentCount >= countTo) {
          clearInterval(timer);
          currentCount = countTo;
        }
        element.innerText = currentCount.toString();
      }, step);
    }
  }
  