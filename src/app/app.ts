import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  readonly year = new Date().getFullYear();

  /** Put your photo at public/images/portrait.jpg */
  readonly portraitSrc = 'images/portrait.jpg';
  portraitReady = false;

  readonly skills = [
    { icon: 'fa-code', label: 'Full-stack development' },
    { icon: 'fa-server', label: 'APIs & backends' },
    { icon: 'fa-laptop-code', label: 'Clean frontend craft' },
    { icon: 'fa-database', label: 'Data & systems design' },
    { icon: 'fa-mobile-screen', label: 'Responsive interfaces' },
    { icon: 'fa-gears', label: 'Automation & tooling' },
  ];

  readonly works = [
    {
      title: 'Studio tools',
      note: 'Internal apps that keep teams moving without the noise.',
      tag: 'Product',
    },
    {
      title: 'Web platforms',
      note: 'Reliable sites and dashboards with calm, readable UX.',
      tag: 'Web',
    },
    {
      title: 'Custom builds',
      note: 'From idea sketches to shipped software that lasts.',
      tag: 'Craft',
    },
  ];

  onPortraitLoad(): void {
    this.portraitReady = true;
  }

  onPortraitError(): void {
    this.portraitReady = false;
  }
}
