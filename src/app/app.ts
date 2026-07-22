import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  readonly year = new Date().getFullYear();

  /** Put your photo at public/images/portrait.jpg */
  readonly portraitSrc = 'images/portrait.jpg';
  portraitReady = false;
  menuOpen = false;

  readonly email = 'partho.netvs@gmail.com';
  readonly facebookUrl = 'https://www.facebook.com/partho.torofder/';
  readonly phoneTel = '+8809617171718';
  readonly phoneTelDisplay = '+88 09617 171718';
  readonly phoneOffice = '+8809638032030';
  readonly phoneOfficeDisplay = '+88 09638 032030';

  readonly techPills = [
    'Angular',
    'ASP.NET Core',
    'C#',
    'TypeScript',
    'SQL Server',
    'Docker',
    'PostgreSQL',
    'Redis',
    'Jenkins',
    'DigitalOcean',
    'RabbitMQ',
    'Git',
  ];

  readonly skillCategories = [
    {
      title: 'Programming & Framework',
      icon: 'fa-solid fa-code',
      items: [
        { label: 'HTML', icon: 'fa-brands fa-html5' },
        { label: 'CSS', icon: 'fa-brands fa-css3-alt' },
        { label: 'JavaScript (JS)', icon: 'fa-brands fa-js' },
        { label: 'TypeScript (TS)', icon: 'fa-solid fa-code' },
        { label: 'Angular', icon: 'fa-brands fa-angular' },
        { label: 'ASP.NET Core', icon: 'fa-brands fa-microsoft' },
        { label: '.NET Core', icon: 'fa-brands fa-microsoft' },
        { label: 'C#', icon: 'fa-solid fa-code' },
        { label: 'C++', icon: 'fa-solid fa-code' },
        { label: 'REST API', icon: 'fa-solid fa-network-wired' },
      ],
    },
    {
      title: 'IDE & Development',
      icon: 'fa-solid fa-laptop-code',
      items: [
        { label: 'Visual Studio', icon: 'fa-solid fa-window-maximize' },
        { label: 'VS Code', icon: 'fa-solid fa-laptop-code' },
        { label: 'Git', icon: 'fa-brands fa-git-alt' },
        { label: 'GitHub', icon: 'fa-brands fa-github' },
        { label: 'Postman', icon: 'fa-solid fa-flask' },
      ],
    },
    {
      title: 'Database',
      icon: 'fa-solid fa-database',
      items: [
        { label: 'Microsoft SQL Server', icon: 'fa-solid fa-database' },
        { label: 'PostgreSQL', icon: 'fa-solid fa-database' },
        { label: 'MySQL', icon: 'fa-solid fa-database' },
        { label: 'Oracle Database', icon: 'fa-solid fa-server' },
        { label: 'Redis', icon: 'fa-solid fa-bolt' },
        { label: 'Typesense', icon: 'fa-solid fa-magnifying-glass' },
      ],
    },
    {
      title: 'DevOps & Infrastructure',
      icon: 'fa-solid fa-gears',
      items: [
        { label: 'Docker', icon: 'fa-brands fa-docker' },
        { label: 'Nginx', icon: 'fa-solid fa-server' },
        { label: 'RabbitMQ', icon: 'fa-solid fa-envelope-open-text' },
        { label: 'Jenkins', icon: 'fa-solid fa-gears' },
        { label: 'Windows Server', icon: 'fa-brands fa-windows' },
        { label: 'AlmaLinux', icon: 'fa-brands fa-linux' },
        { label: 'Ubuntu Linux', icon: 'fa-brands fa-ubuntu' },
        { label: 'Cloudflare', icon: 'fa-brands fa-cloudflare' },
      ],
    },
    {
      title: 'Cloud & Storage',
      icon: 'fa-solid fa-cloud',
      items: [
        { label: 'DigitalOcean', icon: 'fa-brands fa-digital-ocean' },
        { label: 'DigitalOcean Spaces', icon: 'fa-solid fa-hard-drive' },
      ],
    },
  ];

  readonly stats = [
    { value: '15+', label: 'Years Experience', icon: 'fa-solid fa-crown' },
    { value: '80+', label: 'Projects Completed', icon: 'fa-solid fa-laptop-code' },
    { value: '85+', label: 'Happy Clients', icon: 'fa-solid fa-award' },
    { value: '20+', label: 'Technologies', icon: 'fa-solid fa-layer-group' },
  ];

  readonly works = [
    {
      title: 'Enterprise web platforms',
      note: 'Reliable Angular & .NET systems for day-to-day operations.',
      tag: 'Full-stack',
    },
    {
      title: 'API & database solutions',
      note: 'SQL Server, Oracle, PostgreSQL and MySQL-backed services.',
      tag: 'Backend',
    },
    {
      title: 'DevOps & delivery',
      note: 'Docker, Jenkins and server setups that keep releases smooth.',
      tag: 'DevOps',
    },
  ];

  contact = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  onPortraitLoad(): void {
    this.portraitReady = true;
  }

  onPortraitError(): void {
    this.portraitReady = false;
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }

  sendMessage(event: Event): void {
    event.preventDefault();
    const subject = encodeURIComponent(this.contact.subject || 'Hello from partha.info.bd');
    const body = encodeURIComponent(
      `Name: ${this.contact.name}\nEmail: ${this.contact.email}\n\n${this.contact.message}`,
    );
    window.location.href = `mailto:${this.email}?subject=${subject}&body=${body}`;
  }
}
