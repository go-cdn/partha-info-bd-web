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

  readonly experiences = [
    { label: 'HTML', icon: 'fa-brands fa-html5' },
    { label: 'CSS', icon: 'fa-brands fa-css3-alt' },
    { label: 'TypeScript (TS)', icon: 'fa-solid fa-code' },
    { label: 'JavaScript (JS)', icon: 'fa-brands fa-js' },
    { label: 'VS Code', icon: 'fa-solid fa-laptop-code' },
    { label: 'Angular', icon: 'fa-brands fa-angular' },
    { label: 'C#', icon: 'fa-solid fa-code' },
    { label: '.NET Core', icon: 'fa-brands fa-microsoft' },
    { label: 'Visual Studio', icon: 'fa-solid fa-window-maximize' },
    { label: 'Microsoft SQL Server', icon: 'fa-solid fa-database' },
    { label: 'Oracle Database', icon: 'fa-solid fa-server' },
    { label: 'PostgreSQL', icon: 'fa-solid fa-database' },
    { label: 'MySQL', icon: 'fa-solid fa-database' },
    { label: 'SQL', icon: 'fa-solid fa-table' },
    { label: 'Jenkins', icon: 'fa-solid fa-gears' },
    { label: 'C++', icon: 'fa-solid fa-code' },
    { label: 'Windows Server', icon: 'fa-brands fa-windows' },
    { label: 'AlmaLinux', icon: 'fa-brands fa-linux' },
    { label: 'Docker', icon: 'fa-brands fa-docker' },
    { label: 'RabbitMQ', icon: 'fa-solid fa-envelope-open-text' },
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
