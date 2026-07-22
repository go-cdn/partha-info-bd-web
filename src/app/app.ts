import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements AfterViewInit, OnDestroy {
  readonly year = new Date().getFullYear();

  /** Portrait at public/images/portrait.jpg */
  readonly portraitSrc = 'images/portrait.jpg';
  menuOpen = false;

  readonly email = 'partho.netvs@gmail.com';
  readonly facebookUrl = 'https://www.facebook.com/partho.torofder/';
  readonly phoneTel = '+8809617171718';
  readonly phoneTelDisplay = '+88 09617 171718';
  readonly phoneOffice = '+8809638032030';
  readonly phoneOfficeDisplay = '+88 09638 032030';

  readonly brandText = 'Partha.info.bd';
  typedBrand = '';
  brandTypingDone = false;

  readonly skillsIntroText =
    'Languages, frameworks, databases, and platforms I use to ship production software.';
  typedSkillsIntro = '';
  skillsTypingDone = false;

  @ViewChild('skillsIntro') private skillsIntroRef?: ElementRef<HTMLElement>;

  private typingTimer?: ReturnType<typeof setInterval>;
  private brandTypingTimer?: ReturnType<typeof setInterval>;
  private brandPauseTimer?: ReturnType<typeof setTimeout>;
  private skillsObserver?: IntersectionObserver;
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
        { label: 'ElectronJS', icon: 'fa-brands fa-node-js' },
        { label: 'Node.js', icon: 'fa-brands fa-node' },
        { label: 'ASP.NET Core', icon: 'fa-brands fa-microsoft' },
        { label: 'Java Swing', icon: 'fa-brands fa-java' },
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
        { label: 'Apache NetBeans', icon: 'fa-solid fa-code' },
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
        { label: 'Traefik', icon: 'fa-solid fa-route' },
        { label: 'RabbitMQ', icon: 'fa-solid fa-envelope-open-text' },
        { label: 'Jenkins', icon: 'fa-solid fa-gears' },
        { label: 'Windows Server', icon: 'fa-brands fa-windows' },
        { label: 'AlmaLinux', icon: 'fa-brands fa-linux' },
        { label: 'Ubuntu Linux', icon: 'fa-brands fa-ubuntu' },
        { label: 'Cloudflare', icon: 'fa-brands fa-cloudflare' },
      ],
    },
    {
      title: 'CI/CD Pipelines',
      icon: 'fa-solid fa-rocket',
      items: [
        { label: 'Jenkins', icon: 'fa-solid fa-gears' },
        { label: 'GitHub Actions', icon: 'fa-brands fa-github' },
        { label: 'GitLab CI/CD', icon: 'fa-brands fa-gitlab' },
        { label: 'Azure DevOps Pipelines', icon: 'fa-brands fa-microsoft' },
        { label: 'TeamCity', icon: 'fa-solid fa-building' },
        { label: 'Argo CD', icon: 'fa-solid fa-code-branch' },
      ],
    },
    {
      title: 'Cloud & Storage',
      icon: 'fa-solid fa-cloud',
      items: [
        { label: 'DigitalOcean', icon: 'fa-brands fa-digital-ocean' },
        { label: 'DigitalOcean Spaces', icon: 'fa-solid fa-hard-drive' },
        { label: 'Amazon S3', icon: 'fa-brands fa-aws' },
      ],
    },
  ];

  readonly education = [
    {
      degree: 'MSc in Computer Science and Engineering',
      icon: 'fa-solid fa-certificate',
    },
    {
      degree: 'BSc in Computer Science and Engineering',
      icon: 'fa-solid fa-certificate',
    },
    {
      degree: 'HSC — Higher Secondary School Certificate',
      icon: 'fa-solid fa-certificate',
    },
    {
      degree: 'SSC — Secondary School Certificate',
      icon: 'fa-solid fa-certificate',
    },
  ];

  readonly memberships = [
    {
      title: 'Member, Bangladesh Computer Society (BCS)',
      icon: 'fa-solid fa-id-card',
    },
    {
      title: 'Member, IDEB, Bangladesh',
      icon: 'fa-solid fa-id-card',
    },
  ];

  readonly stats = [
    {
      value: '15+',
      label: 'Years Experience',
      icon: 'fa-solid fa-crown',
      color: '#F25022', // Microsoft Red
    },
    {
      value: '80+',
      label: 'Projects Completed',
      icon: 'fa-solid fa-laptop-code',
      color: '#7FBA00', // Microsoft Green
    },
    {
      value: '85+',
      label: 'Happy Clients',
      icon: 'fa-solid fa-award',
      color: '#00A4EF', // Microsoft Blue
    },
    {
      value: '20+',
      label: 'Technologies',
      icon: 'fa-solid fa-layer-group',
      color: '#FFB900', // Microsoft Yellow
    },
  ];

  readonly works = [
    {
      title: '6 ERP Software on Agro based Industry',
      tag: 'ERP',
      icon: 'fa-solid fa-seedling',
      tech: ['C#', '.NET Core', 'SQL Server', 'Angular'],
    },
    {
      title: '2 ERP Software on Leather Industry',
      tag: 'ERP',
      icon: 'fa-solid fa-industry',
      tech: ['ASP.NET Core', 'C#', 'Oracle', 'REST API'],
    },
    {
      title: '6 Education Multimedia Applications',
      tag: 'Education',
      icon: 'fa-solid fa-chalkboard-user',
      tech: ['C#', 'JavaScript', 'MySQL', 'HTML/CSS'],
    },
    {
      title: '13 Accounting Software',
      tag: 'Finance',
      icon: 'fa-solid fa-calculator',
      tech: ['.NET Core', 'SQL Server', 'C#', 'Crystal Reports'],
    },
    {
      title: '4 Retail POS Software',
      tag: 'Retail',
      icon: 'fa-solid fa-cash-register',
      tech: ['C#', 'SQL Server', 'WinForms', 'Barcode'],
    },
    {
      title: '3 PLC Software',
      tag: 'Industrial',
      icon: 'fa-solid fa-microchip',
      tech: ['C++', 'C#', 'Serial/TCP', 'Windows'],
    },
    {
      title: '1 School ERP Software',
      tag: 'ERP',
      icon: 'fa-solid fa-school',
      tech: ['Angular', 'ASP.NET Core', 'PostgreSQL', 'REST API'],
    },
    {
      title: '3 HRM Software',
      tag: 'HR',
      icon: 'fa-solid fa-users',
      tech: ['.NET Core', 'SQL Server', 'Angular', 'JWT'],
    },
    {
      title: 'Paperless Document Management Application',
      tag: 'DMS',
      icon: 'fa-solid fa-file-lines',
      tech: ['ASP.NET Core', 'SQL Server', 'Redis', 'Docker'],
    },
    {
      title: '10+ Web Pages using CMS (WP, Joomla, Drupal, MediaWiki)',
      tag: 'CMS',
      icon: 'fa-brands fa-wordpress',
      tech: ['WordPress', 'Joomla', 'Drupal', 'MediaWiki', 'PHP/MySQL'],
    },
    {
      title: 'Maintaining a large-scale web application',
      tag: 'Web',
      icon: 'fa-solid fa-globe',
      tech: ['Angular', '.NET Core', 'Nginx', 'Jenkins'],
    },
    {
      title: 'Architecture Design',
      tag: 'Architecture',
      icon: 'fa-solid fa-sitemap',
      tech: ['Microservices', 'REST', 'Docker', 'SQL/NoSQL'],
    },
    {
      title: 'RESTful API Development and Integration',
      tag: 'API',
      icon: 'fa-solid fa-network-wired',
      tech: ['ASP.NET Core', 'C#', 'Swagger', 'Postman'],
    },
    {
      title: 'Performance & Security Upgradation',
      tag: 'Security',
      icon: 'fa-solid fa-shield-halved',
      tech: ['OWASP', 'Redis Cache', 'SQL Tuning', 'Cloudflare'],
    },
  ];

  contact = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  blockImageAction(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
  }

  ngAfterViewInit(): void {
    this.startBrandTyping();

    const el = this.skillsIntroRef?.nativeElement;
    if (!el || typeof IntersectionObserver === 'undefined') {
      this.startSkillsTyping();
      return;
    }

    this.skillsObserver = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          this.startSkillsTyping();
          this.skillsObserver?.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    this.skillsObserver.observe(el);
  }

  ngOnDestroy(): void {
    if (this.typingTimer) {
      clearInterval(this.typingTimer);
    }
    if (this.brandTypingTimer) {
      clearInterval(this.brandTypingTimer);
    }
    if (this.brandPauseTimer) {
      clearTimeout(this.brandPauseTimer);
    }
    this.skillsObserver?.disconnect();
  }

  private startBrandTyping(): void {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      this.typedBrand = this.brandText;
      this.brandTypingDone = true;
      return;
    }

    const typeForward = () => {
      let index = 0;
      this.typedBrand = '';
      this.brandTypingDone = false;
      this.brandTypingTimer = setInterval(() => {
        index += 1;
        this.typedBrand = this.brandText.slice(0, index);
        if (index >= this.brandText.length) {
          clearInterval(this.brandTypingTimer);
          this.brandTypingTimer = undefined;
          this.brandTypingDone = true;
          this.brandPauseTimer = setTimeout(() => eraseText(), 1800);
        }
      }, 90);
    };

    const eraseText = () => {
      this.brandTypingDone = false;
      this.brandTypingTimer = setInterval(() => {
        if (this.typedBrand.length === 0) {
          clearInterval(this.brandTypingTimer);
          this.brandTypingTimer = undefined;
          this.brandPauseTimer = setTimeout(() => typeForward(), 400);
          return;
        }
        this.typedBrand = this.typedBrand.slice(0, -1);
      }, 45);
    };

    typeForward();
  }

  private startSkillsTyping(): void {
    if (this.typingTimer || this.typedSkillsIntro.length > 0) {
      return;
    }

    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      this.typedSkillsIntro = this.skillsIntroText;
      this.skillsTypingDone = true;
      return;
    }

    let index = 0;
    this.typingTimer = setInterval(() => {
      index += 1;
      this.typedSkillsIntro = this.skillsIntroText.slice(0, index);
      if (index >= this.skillsIntroText.length) {
        clearInterval(this.typingTimer);
        this.typingTimer = undefined;
        this.skillsTypingDone = true;
      }
    }, 32);
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
