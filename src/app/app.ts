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

  readonly email = 'info@apollosoft.com.bd';
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

  contactSubjects = [
    'Project Inquiry',
    'Freelance / Contract Work',
    'Web Application Development',
    'ERP / Accounting Software',
    'POS / Inventory System',
    'API Development & Integration',
    'Database Design & Optimization',
    'Performance & Security',
    'Technical Consultation',
    'Collaboration Opportunity',
    'Job / Career Opportunity',
    'Training / Mentorship',
    'General Inquiry',
    'Other',
  ];

  contact = {
    name: '',
    email: '',
    subject: '',
    message: '',
    captchaAnswer: '',
  };

  captchaImageUrl = '';
  private captchaExpected = '';
  formError = '';

  blockImageAction(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
  }

  ngAfterViewInit(): void {
    this.refreshCaptcha();
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

  refreshCaptcha(): void {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let code = '';
    for (let i = 0; i < 5; i += 1) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    this.captchaExpected = code;
    this.captchaImageUrl = this.drawCaptchaImage(code);
    this.contact.captchaAnswer = '';
    this.formError = '';
  }

  private drawCaptchaImage(code: string): string {
    if (typeof document === 'undefined') {
      return '';
    }

    const width = 180;
    const height = 56;
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      return '';
    }

    // Background
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, '#1a2018');
    gradient.addColorStop(1, '#0b0d10');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    // Noise dots
    for (let i = 0; i < 200; i += 1) {
      ctx.fillStyle = `rgba(${70 + Math.random() * 140}, ${100 + Math.random() * 110}, ${40 + Math.random() * 60}, ${0.22 + Math.random() * 0.42})`;
      ctx.fillRect(Math.random() * width, Math.random() * height, Math.random() * 2.8 + 0.4, Math.random() * 2.8 + 0.4);
    }

    // Soft decoy glyphs
    const decoys = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    for (let i = 0; i < 16; i += 1) {
      ctx.save();
      ctx.globalAlpha = 0.14 + Math.random() * 0.16;
      ctx.translate(Math.random() * width, 12 + Math.random() * 32);
      ctx.rotate((Math.random() - 0.5) * 1.25);
      ctx.font = `${13 + Math.floor(Math.random() * 14)}px Arial`;
      ctx.fillStyle = Math.random() > 0.5 ? '#4a6a32' : '#6b8f4a';
      ctx.fillText(decoys.charAt(Math.floor(Math.random() * decoys.length)), 0, 0);
      ctx.restore();
    }

    // Interference waves (behind text)
    for (let i = 0; i < 10; i += 1) {
      ctx.strokeStyle = `rgba(98, 169, 43, ${0.2 + Math.random() * 0.32})`;
      ctx.lineWidth = 1 + Math.random() * 2;
      ctx.beginPath();
      const yBase = 8 + Math.random() * 40;
      ctx.moveTo(0, yBase);
      for (let x = 0; x <= width; x += 10) {
        ctx.lineTo(x, yBase + Math.sin(x * 0.09 + i * 1.3) * (7 + Math.random() * 8));
      }
      ctx.stroke();
    }

    // Characters — one random letter is more obscured
    const fonts = ['Arial', 'Courier New', 'Verdana', 'Tahoma', 'Georgia'];
    const blurIndex = Math.floor(Math.random() * code.length);
    for (let i = 0; i < code.length; i += 1) {
      const ch = code[i];
      const heavy = i === blurIndex;
      const x = 14 + i * 32 + (Math.random() * (heavy ? 10 : 8) - (heavy ? 5 : 4));
      const y = 36 + (Math.random() * (heavy ? 18 : 14) - (heavy ? 9 : 7));
      const angle = (Math.random() - 0.5) * (heavy ? 1.35 : 0.9);
      ctx.save();
      ctx.translate(x, y);
      if (heavy) {
        ctx.transform(1, (Math.random() - 0.5) * 0.4, (Math.random() - 0.5) * 0.35, 1, 0, 0);
      }
      ctx.rotate(angle);
      ctx.font = `700 ${21 + Math.floor(Math.random() * 7)}px ${fonts[i % fonts.length]}`;

      // Ghost smear (heavier on one char)
      const ghosts = heavy ? 7 : 3;
      for (let g = 0; g < ghosts; g += 1) {
        ctx.globalAlpha = heavy ? 0.12 + Math.random() * 0.18 : 0.2 + Math.random() * 0.15;
        ctx.fillStyle = '#5a7a3a';
        const spread = heavy ? 6 : 3.5;
        ctx.fillText(ch, Math.random() * spread - spread / 2, Math.random() * spread - spread / 2);
      }

      ctx.globalAlpha = heavy ? 0.48 + Math.random() * 0.2 : 0.82;
      ctx.fillStyle = heavy
        ? i % 2 === 0
          ? '#5f8a38'
          : '#8aa86a'
        : i % 2 === 0
          ? '#84c04a'
          : '#c5d9a8';
      ctx.shadowColor = 'rgba(20, 30, 10, 0.7)';
      ctx.shadowBlur = heavy ? 5 : 2;
      ctx.fillText(ch, 0, 0);

      // Cross strike(s)
      ctx.shadowBlur = 0;
      const strikes = heavy ? 3 : 1;
      for (let s = 0; s < strikes; s += 1) {
        ctx.globalAlpha = heavy ? 0.55 + Math.random() * 0.3 : 0.5;
        ctx.strokeStyle = `rgba(${55 + Math.random() * 70}, ${85 + Math.random() * 70}, ${30 + Math.random() * 40}, 0.85)`;
        ctx.lineWidth = heavy ? 1.2 + Math.random() : 1 + Math.random() * 0.6;
        ctx.beginPath();
        ctx.moveTo(-4, Math.random() * (heavy ? 14 : 10) - (heavy ? 7 : 5));
        ctx.lineTo(18, Math.random() * (heavy ? 14 : 10) - (heavy ? 7 : 5));
        ctx.stroke();
      }

      // Extra local noise over the heavy char
      if (heavy) {
        for (let n = 0; n < 28; n += 1) {
          ctx.globalAlpha = 0.25 + Math.random() * 0.35;
          ctx.fillStyle = `rgba(${40 + Math.random() * 80}, ${60 + Math.random() * 80}, ${20 + Math.random() * 40}, 0.7)`;
          ctx.fillRect(Math.random() * 20 - 4, Math.random() * 22 - 12, Math.random() * 2.5 + 0.5, Math.random() * 2.5 + 0.5);
        }
        for (let n = 0; n < 3; n += 1) {
          ctx.globalAlpha = 0.4;
          ctx.strokeStyle = `rgba(90, 140, 50, ${0.35 + Math.random() * 0.4})`;
          ctx.lineWidth = 1 + Math.random();
          ctx.beginPath();
          ctx.moveTo(-6, Math.random() * 16 - 8);
          ctx.quadraticCurveTo(6, Math.random() * 20 - 10, 20, Math.random() * 16 - 8);
          ctx.stroke();
        }
      }
      ctx.restore();
    }

    // Overlay curves
    for (let i = 0; i < 9; i += 1) {
      ctx.strokeStyle = `rgba(${40 + Math.random() * 100}, ${65 + Math.random() * 95}, ${25 + Math.random() * 50}, ${0.25 + Math.random() * 0.35})`;
      ctx.lineWidth = 1 + Math.random() * 1.6;
      ctx.beginPath();
      ctx.moveTo(Math.random() * width, Math.random() * height);
      ctx.bezierCurveTo(
        Math.random() * width,
        Math.random() * height,
        Math.random() * width,
        Math.random() * height,
        Math.random() * width,
        Math.random() * height,
      );
      ctx.stroke();
    }

    // Grain
    for (let i = 0; i < 160; i += 1) {
      ctx.fillStyle =
        Math.random() > 0.5
          ? `rgba(255, 255, 255, ${Math.random() * 0.14})`
          : `rgba(0, 0, 0, ${Math.random() * 0.28})`;
      ctx.fillRect(Math.random() * width, Math.random() * height, Math.random() > 0.75 ? 2 : 1, 1);
    }

    // Border
    ctx.strokeStyle = 'rgba(42, 49, 60, 0.95)';
    ctx.lineWidth = 2;
    ctx.strokeRect(1, 1, width - 2, height - 2);

    return canvas.toDataURL('image/png');
  }

  private isValidEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim());
  }

  private validateContactForm(): string | null {
    const name = this.contact.name.trim();
    const email = this.contact.email.trim();
    const subject = this.contact.subject.trim();
    const message = this.contact.message.trim();
    const captcha = this.contact.captchaAnswer.trim();

    if (!name) {
      return 'Name is required.';
    }
    if (!email) {
      return 'Valid email is required.';
    }
    if (!this.isValidEmail(email)) {
      return 'Please enter a valid email address.';
    }
    if (!subject) {
      return 'Subject is required.';
    }
    if (!message) {
      return 'Message is required.';
    }
    if (!captcha) {
      return 'Please enter the captcha text.';
    }
    if (captcha.toUpperCase() !== this.captchaExpected) {
      return 'Captcha is incorrect. Please try again.';
    }
    return null;
  }
  sendMessage(event: Event): void {
    event.preventDefault();

    const error = this.validateContactForm();
    if (error) {
      this.formError = error;
      if (error.toLowerCase().includes('captcha')) {
        this.refreshCaptcha();
      }
      return;
    }

    this.formError = '';
    const subject = encodeURIComponent(this.contact.subject.trim());
    const body = encodeURIComponent(
      `Name: ${this.contact.name.trim()}\nEmail: ${this.contact.email.trim()}\n\n${this.contact.message.trim()}`,
    );
    this.refreshCaptcha();
    window.location.href = `mailto:${this.email}?subject=${subject}&body=${body}`;
  }
}
