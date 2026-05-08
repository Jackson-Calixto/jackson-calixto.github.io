(function () {
  var y = document.getElementById("ano");
  if (y) y.textContent = String(new Date().getFullYear());

  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  var navLinks = Array.prototype.slice.call(document.querySelectorAll("[data-nav]"));
  var sections = navLinks
    .map(function (a) {
      var id = (a.getAttribute("href") || "").replace("#", "");
      return document.getElementById(id);
    })
    .filter(Boolean);

  function setActive(id) {
    navLinks.forEach(function (a) {
      var active = (a.getAttribute("href") || "") === "#" + id;
      a.classList.toggle("is-active", active);
    });
  }

  if (sections.length) {
    var io = new IntersectionObserver(
      function (entries) {
        var best = entries
          .filter(function (e) {
            return e.isIntersecting;
          })
          .sort(function (a, b) {
            return b.intersectionRatio - a.intersectionRatio;
          })[0];
        if (best && best.target && best.target.id) setActive(best.target.id);
      },
      { root: null, threshold: [0.2, 0.35, 0.5] }
    );
    sections.forEach(function (s) {
      io.observe(s);
    });
  }

  var LANG_KEY = "jc_portfolio_lang";
  var htmlEl = document.documentElement;
  var currentLang = "pt-BR";

  var I18N = {
    "pt-BR": {
      "page.title": "Jackson Calixto | Portf\u00f3lio",
      "meta.description": "Jackson Calixto \u2014 desenvolvedor full stack. Portf\u00f3lio, GitHub e experi\u00eancia.",
      "skip.label": "Pular para o conte\u00fado",
      "logo.aria": "In\u00edcio",
      "nav.aria": "Principal",
      "nav.projects": "Projetos",
      "nav.skills": "Compet\u00eancias",
      "nav.certs": "Certifica\u00e7\u00f5es",
      "nav.about": "Sobre",
      "nav.contact": "Contato",
      "nav.toggle.open": "Abrir menu",
      "nav.toggle.close": "Fechar menu",
      "lang.groupAria": "Idioma",
      "lang.ariaPt": "Portugu\u00eas (Brasil)",
      "lang.ariaEn": "English",
      "lang.ariaEs": "Espa\u00f1ol",
      "hero.pillsAria": "Destaques",
      "hero.location": "Joinville, SC \u00b7 Brasil",
      "hero.hi": "Oi, eu sou o",
      "hero.subtitle": "Software Developer \u00b7 .NET / Angular \u00b7 Observabilidade (OTel / Datadog)",
      "hero.desc":
        "Desenvolvo e sustento solu\u00e7\u00f5es corporativas com foco em APIs, integra\u00e7\u00f5es e qualidade. No meu GitHub eu publico laborat\u00f3rios e projetos de estudo (Clean Architecture, microservi\u00e7os, Docker, automa\u00e7\u00e3o com Playwright).",
      "hero.ctaWork": "Ver meus projetos",
      "hero.ctaResume": "Baixar curr\u00edculo",
      "hero.badgeAwards": "Reconhecimentos",
      "hero.badgeCerts": "Certifica\u00e7\u00f5es",
      "hero.statYears": "anos na GM",
      "hero.statRepos": "repos p\u00fablicos",
      "hero.statCerts": "certifica\u00e7\u00f5es",
      "hero.statLangs": "idiomas",
      "projects.title": "Projetos em destaque",
      "projects.subtitle": "Sele\u00e7\u00e3o de reposit\u00f3rios p\u00fablicos que representam a minha stack atual.",
      "projects.viewAll": "Ver todos no GitHub \u2192",
      "projects.tagPublic": "P\u00fablico",
      "projects.btnRepo": "Ver reposit\u00f3rio",
      "projects.btnDetails": "Detalhes",
      "proj.c1.tag": ".NET / C#",
      "proj.c1.h": ".NET Core & Clean Architecture",
      "proj.c1.p": "Laborat\u00f3rio de projetos .NET Core seguindo princ\u00edpios de Clean Architecture.",
      "proj.c2.tag": "Full Stack",
      "proj.c2.h": "Web API + Angular + EF Core",
      "proj.c2.p": "Angular, ASP.NET Core Web API, Entity Framework Core e Identity.",
      "proj.c3.tag": "Microservi\u00e7os",
      "proj.c3.h": "Microservices (Spring + Docker)",
      "proj.c3.p": "Microservi\u00e7os com Spring Cloud / Boot e Docker (laborat\u00f3rios).",
      "proj.c4.tag": "Testes",
      "proj.c4.h": "Playwright + Java",
      "proj.c4.p": "Framework de automa\u00e7\u00e3o de testes end-to-end.",
      "modal.ca.title": ".NET Core & Clean Architecture",
      "modal.ca.desc": "Organiza\u00e7\u00e3o em camadas, separa\u00e7\u00e3o de responsabilidades e boas pr\u00e1ticas em projetos .NET.",
      "modal.fs.title": "Web API + Angular + EF Core",
      "modal.fs.desc": "Exemplo de aplica\u00e7\u00e3o full stack com autentica\u00e7\u00e3o e persist\u00eancia.",
      "modal.ms.title": "Microservices (Spring + Docker)",
      "modal.ms.desc": "Estudos de arquitetura, configura\u00e7\u00e3o e execu\u00e7\u00e3o de servi\u00e7os.",
      "modal.pw.title": "Playwright + Java",
      "modal.pw.desc": "Estrutura para testes automatizados e boas pr\u00e1ticas de execu\u00e7\u00e3o.",
      "skills.title": "Compet\u00eancias e tecnologias",
      "skills.intro": "Stack principal baseada no meu hist\u00f3rico profissional e reposit\u00f3rios p\u00fablicos.",
      "skills.fe": "Front-end",
      "skills.be": "Back-end",
      "skills.data": "Dados",
      "skills.devops": "DevOps e observabilidade",
      "skills.comp": "Tecnologias complementares",
      "about.h2": "Sobre",
      "about.p1":
        "Sou <strong>Software Developer na General Motors</strong>, com trajet\u00f3ria consolidada em desenvolvimento e sustenta\u00e7\u00e3o de solu\u00e7\u00f5es corporativas, integra\u00e7\u00e3o entre sistemas, automa\u00e7\u00e3o de testes e colabora\u00e7\u00e3o pr\u00f3xima a neg\u00f3cio e opera\u00e7\u00f5es em m\u00faltiplas regi\u00f5es. No LinkedIn tamb\u00e9m listo <strong>Web Development</strong> como servi\u00e7o oferecido.",
      "about.p2":
        "Valorizo aprendizado cont\u00ednuo (cursos e certifica\u00e7\u00f5es), compartilhamento de conhecimento com o time e postura de dono em incidentes e entregas cr\u00edticas \u2014 alinhado ao que aparece nos meus reconhecimentos p\u00fablicos no perfil profissional.",
      "exp.h2": "Experi\u00eancia",
      "exp.intro":
        "Resumo baseado no <a href=\"https://www.linkedin.com/in/jackson-calixto/\" target=\"_blank\" rel=\"noopener noreferrer\">LinkedIn</a>. Detalhes internos da GM s\u00f3 com aprova\u00e7\u00e3o de comunica\u00e7\u00e3o.",
      "exp.gm.time": "mar 2013 \u2014 atual",
      "exp.gm.h": "Software Developer",
      "exp.gm.p":
        "Desenvolvimento e evolu\u00e7\u00e3o de sistemas de TI; integra\u00e7\u00f5es; sustenta\u00e7\u00e3o de aplica\u00e7\u00f5es cr\u00edticas ao neg\u00f3cio; colabora\u00e7\u00e3o com times globais.",
      "exp.hp.time": "fev 2012 \u2014 mar 2013",
      "exp.hp.h": "Analista de sistemas",
      "exp.hp.p": "An\u00e1lise e suporte em ambiente corporativo de grande porte.",
      "exp.gati.time": "jul 2011 \u2014 fev 2012",
      "exp.gati.h": "Programador de sistemas",
      "exp.gati.p": "Programa\u00e7\u00e3o e sustenta\u00e7\u00e3o de sistemas.",
      "exp.dai.time": "fev 2009 \u2014 fev 2010",
      "exp.dai.h": "Analista de sistemas",
      "exp.dai.p": "An\u00e1lise e desenvolvimento de sistemas.",
      "exp.pt.time": "mar 2004 \u2014 fev 2009",
      "exp.pt.h": "Analista de sistemas",
      "exp.pt.p": "An\u00e1lise e desenvolvimento de sistemas.",
      "edu.h2": "Forma\u00e7\u00e3o",
      "edu.u1.time": "2021 \u2014 2026 (previsto)",
      "edu.u1.h": "Bacharelado em Engenharia da Computa\u00e7\u00e3o",
      "edu.u1.p": "Forma\u00e7\u00e3o em andamento, alinhada \u00e0 atua\u00e7\u00e3o t\u00e9cnica em software.",
      "edu.u2.time": "1997 \u2014 1999",
      "edu.u2.h": "Processamento de dados / forma\u00e7\u00e3o t\u00e9cnica correlata",
      "edu.u2.p":
        "Base em desenvolvimento, arquitetura de computadores, banco de dados e engenharia (conforme hist\u00f3rico no LinkedIn).",
      "cert.h2": "Certifica\u00e7\u00f5es",
      "cert.intro": "Principais certifica\u00e7\u00f5es listadas no LinkedIn (Udemy, Skillsoft, Rosetta Stone).",
      "cert.langs":
        "<strong>Idiomas:</strong> portugu\u00eas e ingl\u00eas (nativo/bil\u00edngue); espanhol (profissional).",
      "cert.i1": "<strong>Advanced OAuth Security</strong> <span class=\"cert-issuer\">\u2014 Udemy, out/2023</span>",
      "cert.i2": "<strong>Automation Framework with Playwright and Java</strong> <span class=\"cert-issuer\">\u2014 Udemy, jul/2023</span>",
      "cert.i3": "<strong>FSD Front-End Development: Frameworks</strong> <span class=\"cert-issuer\">\u2014 Skillsoft, jul/2023</span>",
      "cert.i4": "<strong>Clean Architecture Essencial \u2014 ASP.NET Core com C#</strong> <span class=\"cert-issuer\">\u2014 Udemy, mar/2023</span>",
      "cert.i5": "<strong>Full-Stack com .NET Web API e Angular + EF Core</strong> <span class=\"cert-issuer\">\u2014 Udemy, jan/2023</span>",
      "cert.i6": "<strong>Microservices do zero com Spring Cloud, Spring Boot e Docker</strong> <span class=\"cert-issuer\">\u2014 Udemy, jul/2022</span>",
      "cert.i7": "<strong>C# curso completo (b\u00e1sico ao avan\u00e7ado)</strong> <span class=\"cert-issuer\">\u2014 Udemy, mar/2022</span>",
      "cert.i8": "<strong>English Pre-Test</strong> <span class=\"cert-issuer\">\u2014 Rosetta Stone, fev/2017</span>",
      "contact.h2": "Contato",
      "contact.p1":
        "O jeito mais r\u00e1pido de falar comigo \u00e9 pelo <a href=\"https://www.linkedin.com/in/jackson-calixto/\" target=\"_blank\" rel=\"noopener noreferrer\">LinkedIn</a> ou pela p\u00e1gina do <a href=\"https://github.com/Jackson-Calixto\" target=\"_blank\" rel=\"noopener noreferrer\">GitHub</a>.",
      "contact.emailLabel": "E-mail:",
      "contact.btnIn": "Mensagem no LinkedIn",
      "contact.btnGh": "GitHub",
      "footer.suffix": " Jackson Calixto. Conte\u00fado p\u00fablico \u2014 GM apenas como empregador.",
      "modal.openGh": "Abrir no GitHub",
      "modal.close": "Fechar",
      "modal.closeAria": "Fechar"
    },
    en: {
      "page.title": "Jackson Calixto | Portfolio",
      "meta.description": "Jackson Calixto \u2014 full stack developer. Portfolio, GitHub and experience.",
      "skip.label": "Skip to content",
      "logo.aria": "Home",
      "nav.aria": "Main",
      "nav.projects": "Projects",
      "nav.skills": "Skills",
      "nav.certs": "Certifications",
      "nav.about": "About",
      "nav.contact": "Contact",
      "nav.toggle.open": "Open menu",
      "nav.toggle.close": "Close menu",
      "lang.groupAria": "Language",
      "lang.ariaPt": "Portuguese (Brazil)",
      "lang.ariaEn": "English",
      "lang.ariaEs": "Spanish",
      "hero.pillsAria": "Highlights",
      "hero.location": "Joinville, SC \u00b7 Brazil",
      "hero.hi": "Hi, I'm",
      "hero.subtitle": "Software Developer \u00b7 .NET / Angular \u00b7 Observability (OTel / Datadog)",
      "hero.desc":
        "I build and maintain enterprise solutions focused on APIs, integrations, and quality. On GitHub I publish labs and study projects (Clean Architecture, microservices, Docker, Playwright automation).",
      "hero.ctaWork": "View my work",
      "hero.ctaResume": "Download resume",
      "hero.badgeAwards": "Awards",
      "hero.badgeCerts": "Certifications",
      "hero.statYears": "years at GM",
      "hero.statRepos": "public repos",
      "hero.statCerts": "certifications",
      "hero.statLangs": "languages",
      "projects.title": "Featured projects",
      "projects.subtitle": "A selection of public repositories that represent my current stack.",
      "projects.viewAll": "View all on GitHub \u2192",
      "projects.tagPublic": "Public",
      "projects.btnRepo": "View repository",
      "projects.btnDetails": "Details",
      "proj.c1.tag": ".NET / C#",
      "proj.c1.h": ".NET Core & Clean Architecture",
      "proj.c1.p": ".NET Core lab projects following Clean Architecture principles.",
      "proj.c2.tag": "Full Stack",
      "proj.c2.h": "Web API + Angular + EF Core",
      "proj.c2.p": "Angular, ASP.NET Core Web API, Entity Framework Core, and Identity.",
      "proj.c3.tag": "Microservices",
      "proj.c3.h": "Microservices (Spring + Docker)",
      "proj.c3.p": "Microservices with Spring Cloud / Boot and Docker (labs).",
      "proj.c4.tag": "Testing",
      "proj.c4.h": "Playwright + Java",
      "proj.c4.p": "End-to-end test automation framework.",
      "modal.ca.title": ".NET Core & Clean Architecture",
      "modal.ca.desc": "Layered design, separation of concerns, and good practices in .NET projects.",
      "modal.fs.title": "Web API + Angular + EF Core",
      "modal.fs.desc": "Full-stack sample with authentication and persistence.",
      "modal.ms.title": "Microservices (Spring + Docker)",
      "modal.ms.desc": "Architecture, configuration, and service execution studies.",
      "modal.pw.title": "Playwright + Java",
      "modal.pw.desc": "Structure for automated tests and solid execution practices.",
      "skills.title": "Skills & technologies",
      "skills.intro": "Core stack based on my professional background and public repositories.",
      "skills.fe": "Front-end",
      "skills.be": "Back-end",
      "skills.data": "Data",
      "skills.devops": "DevOps & observability",
      "skills.comp": "Complementary technologies",
      "about.h2": "About",
      "about.p1":
        "I am a <strong>Software Developer at General Motors</strong>, with a solid track record building and maintaining enterprise solutions, system integration, test automation, and close collaboration with business and operations across regions. On LinkedIn I also list <strong>Web Development</strong> as a service I offer.",
      "about.p2":
        "I value continuous learning (courses and certifications), knowledge sharing with the team, and ownership during incidents and critical deliveries\u2014aligned with my public recognitions on my professional profile.",
      "exp.h2": "Experience",
      "exp.intro":
        "Summary based on <a href=\"https://www.linkedin.com/in/jackson-calixto/\" target=\"_blank\" rel=\"noopener noreferrer\">LinkedIn</a>. Internal GM details only with communications approval.",
      "exp.gm.time": "Mar 2013 \u2014 Present",
      "exp.gm.h": "Software Developer",
      "exp.gm.p":
        "Development and evolution of IT systems; integrations; support for business-critical applications; collaboration with global teams.",
      "exp.hp.time": "Feb 2012 \u2014 Mar 2013",
      "exp.hp.h": "System Analyst",
      "exp.hp.p": "Analysis and support in a large corporate environment.",
      "exp.gati.time": "Jul 2011 \u2014 Feb 2012",
      "exp.gati.h": "System Programmer",
      "exp.gati.p": "Programming and maintenance of systems.",
      "exp.dai.time": "Feb 2009 \u2014 Feb 2010",
      "exp.dai.h": "System Analyst",
      "exp.dai.p": "Analysis and development of systems.",
      "exp.pt.time": "Mar 2004 \u2014 Feb 2009",
      "exp.pt.h": "System Analyst",
      "exp.pt.p": "Analysis and development of systems.",
      "edu.h2": "Education",
      "edu.u1.time": "2021 \u2014 2026 (expected)",
      "edu.u1.h": "B.Sc. Computer Engineering",
      "edu.u1.p": "In progress, aligned with hands-on software work.",
      "edu.u2.time": "1997 \u2014 1999",
      "edu.u2.h": "Data processing / related technical training",
      "edu.u2.p": "Foundation in development, computer architecture, databases, and engineering (per LinkedIn history).",
      "cert.h2": "Certifications",
      "cert.intro": "Key certifications listed on LinkedIn (Udemy, Skillsoft, Rosetta Stone).",
      "cert.langs":
        "<strong>Languages:</strong> Portuguese and English (native / bilingual); Spanish (professional).",
      "cert.i1": "<strong>Advanced OAuth Security</strong> <span class=\"cert-issuer\">\u2014 Udemy, Oct 2023</span>",
      "cert.i2": "<strong>Automation Framework with Playwright and Java</strong> <span class=\"cert-issuer\">\u2014 Udemy, Jul 2023</span>",
      "cert.i3": "<strong>FSD Front-End Development: Frameworks</strong> <span class=\"cert-issuer\">\u2014 Skillsoft, Jul 2023</span>",
      "cert.i4": "<strong>Clean Architecture Essentials \u2014 ASP.NET Core with C#</strong> <span class=\"cert-issuer\">\u2014 Udemy, Mar 2023</span>",
      "cert.i5": "<strong>Full-Stack with .NET Web API and Angular + EF Core</strong> <span class=\"cert-issuer\">\u2014 Udemy, Jan 2023</span>",
      "cert.i6": "<strong>Microservices from scratch with Spring Cloud, Spring Boot and Docker</strong> <span class=\"cert-issuer\">\u2014 Udemy, Jul 2022</span>",
      "cert.i7": "<strong>C# complete course (beginner to advanced)</strong> <span class=\"cert-issuer\">\u2014 Udemy, Mar 2022</span>",
      "cert.i8": "<strong>English Pre-Test</strong> <span class=\"cert-issuer\">\u2014 Rosetta Stone, Feb 2017</span>",
      "contact.h2": "Contact",
      "contact.p1":
        "The fastest way to reach me is via <a href=\"https://www.linkedin.com/in/jackson-calixto/\" target=\"_blank\" rel=\"noopener noreferrer\">LinkedIn</a> or my <a href=\"https://github.com/Jackson-Calixto\" target=\"_blank\" rel=\"noopener noreferrer\">GitHub</a> page.",
      "contact.emailLabel": "Email:",
      "contact.btnIn": "Message on LinkedIn",
      "contact.btnGh": "GitHub",
      "footer.suffix": " Jackson Calixto. Public content \u2014 GM listed only as employer.",
      "modal.openGh": "Open on GitHub",
      "modal.close": "Close",
      "modal.closeAria": "Close"
    },
    es: {
      "page.title": "Jackson Calixto | Portafolio",
      "meta.description": "Jackson Calixto \u2014 desarrollador full stack. Portafolio, GitHub y experiencia.",
      "skip.label": "Ir al contenido",
      "logo.aria": "Inicio",
      "nav.aria": "Principal",
      "nav.projects": "Proyectos",
      "nav.skills": "Habilidades",
      "nav.certs": "Certificaciones",
      "nav.about": "Sobre m\u00ed",
      "nav.contact": "Contacto",
      "nav.toggle.open": "Abrir men\u00fa",
      "nav.toggle.close": "Cerrar men\u00fa",
      "lang.groupAria": "Idioma",
      "lang.ariaPt": "Portugu\u00e9s (Brasil)",
      "lang.ariaEn": "Ingl\u00e9s",
      "lang.ariaEs": "Espa\u00f1ol",
      "hero.pillsAria": "Destacados",
      "hero.location": "Joinville, SC \u00b7 Brasil",
      "hero.hi": "Hola, soy",
      "hero.subtitle": "Software Developer \u00b7 .NET / Angular \u00b7 Observabilidad (OTel / Datadog)",
      "hero.desc":
        "Desarrollo y mantengo soluciones empresariales con foco en APIs, integraciones y calidad. En GitHub publico laboratorios y proyectos de estudio (Clean Architecture, microservicios, Docker, automatizaci\u00f3n con Playwright).",
      "hero.ctaWork": "Ver proyectos",
      "hero.ctaResume": "Descargar CV",
      "hero.badgeAwards": "Reconocimientos",
      "hero.badgeCerts": "Certificaciones",
      "hero.statYears": "a\u00f1os en GM",
      "hero.statRepos": "repos p\u00fablicos",
      "hero.statCerts": "certificaciones",
      "hero.statLangs": "idiomas",
      "projects.title": "Proyectos destacados",
      "projects.subtitle": "Selecci\u00f3n de repositorios p\u00fablicos que representan mi stack actual.",
      "projects.viewAll": "Ver todo en GitHub \u2192",
      "projects.tagPublic": "P\u00fablico",
      "projects.btnRepo": "Ver repositorio",
      "projects.btnDetails": "Detalles",
      "proj.c1.tag": ".NET / C#",
      "proj.c1.h": ".NET Core y Clean Architecture",
      "proj.c1.p": "Laboratorio de proyectos .NET Core siguiendo principios de Clean Architecture.",
      "proj.c2.tag": "Full Stack",
      "proj.c2.h": "Web API + Angular + EF Core",
      "proj.c2.p": "Angular, ASP.NET Core Web API, Entity Framework Core e Identity.",
      "proj.c3.tag": "Microservicios",
      "proj.c3.h": "Microservicios (Spring + Docker)",
      "proj.c3.p": "Microservicios con Spring Cloud / Boot y Docker (laboratorios).",
      "proj.c4.tag": "Pruebas",
      "proj.c4.h": "Playwright + Java",
      "proj.c4.p": "Marco de automatizaci\u00f3n de pruebas end-to-end.",
      "modal.ca.title": ".NET Core y Clean Architecture",
      "modal.ca.desc": "Organizaci\u00f3n en capas, separaci\u00f3n de responsabilidades y buenas pr\u00e1cticas en .NET.",
      "modal.fs.title": "Web API + Angular + EF Core",
      "modal.fs.desc": "Ejemplo full stack con autenticaci\u00f3n y persistencia.",
      "modal.ms.title": "Microservicios (Spring + Docker)",
      "modal.ms.desc": "Estudios de arquitectura, configuraci\u00f3n y ejecuci\u00f3n de servicios.",
      "modal.pw.title": "Playwright + Java",
      "modal.pw.desc": "Estructura para pruebas automatizadas y buenas pr\u00e1cticas de ejecuci\u00f3n.",
      "skills.title": "Habilidades y tecnolog\u00edas",
      "skills.intro": "Stack principal basado en mi trayectoria profesional y repositorios p\u00fablicos.",
      "skills.fe": "Front-end",
      "skills.be": "Back-end",
      "skills.data": "Datos",
      "skills.devops": "DevOps y observabilidad",
      "skills.comp": "Tecnolog\u00edas complementarias",
      "about.h2": "Sobre m\u00ed",
      "about.p1":
        "Soy <strong>Software Developer en General Motors</strong>, con trayectoria consolidada en desarrollo y mantenimiento de soluciones corporativas, integraci\u00f3n de sistemas, automatizaci\u00f3n de pruebas y colaboraci\u00f3n cercana con negocio y operaciones en varias regiones. En LinkedIn tambi\u00e9n ofrezco <strong>Web Development</strong> como servicio.",
      "about.p2":
        "Valoro el aprendizaje continuo (cursos y certificaciones), compartir conocimiento con el equipo y la actitud de responsabilidad en incidentes y entregas cr\u00edticas, alineado con mis reconocimientos p\u00fablicos en el perfil profesional.",
      "exp.h2": "Experiencia",
      "exp.intro":
        "Resumen basado en <a href=\"https://www.linkedin.com/in/jackson-calixto/\" target=\"_blank\" rel=\"noopener noreferrer\">LinkedIn</a>. Detalles internos de GM solo con aprobaci\u00f3n de comunicaci\u00f3n.",
      "exp.gm.time": "mar 2013 \u2014 actual",
      "exp.gm.h": "Software Developer",
      "exp.gm.p":
        "Desarrollo y evoluci\u00f3n de sistemas de TI; integraciones; soporte de aplicaciones cr\u00edticas para el negocio; colaboraci\u00f3n con equipos globales.",
      "exp.hp.time": "feb 2012 \u2014 mar 2013",
      "exp.hp.h": "Analista de sistemas",
      "exp.hp.p": "An\u00e1lisis y soporte en un entorno corporativo de gran tama\u00f1o.",
      "exp.gati.time": "jul 2011 \u2014 feb 2012",
      "exp.gati.h": "Programador de sistemas",
      "exp.gati.p": "Programaci\u00f3n y mantenimiento de sistemas.",
      "exp.dai.time": "feb 2009 \u2014 feb 2010",
      "exp.dai.h": "Analista de sistemas",
      "exp.dai.p": "An\u00e1lisis y desarrollo de sistemas.",
      "exp.pt.time": "mar 2004 \u2014 feb 2009",
      "exp.pt.h": "Analista de sistemas",
      "exp.pt.p": "An\u00e1lisis y desarrollo de sistemas.",
      "edu.h2": "Formaci\u00f3n",
      "edu.u1.time": "2021 \u2014 2026 (previsto)",
      "edu.u1.h": "Grado en Ingenier\u00eda de Computaci\u00f3n",
      "edu.u1.p": "En curso, alineado con la pr\u00e1ctica t\u00e9cnica en software.",
      "edu.u2.time": "1997 \u2014 1999",
      "edu.u2.h": "Procesamiento de datos / formaci\u00f3n t\u00e9cnica af\u00edn",
      "edu.u2.p": "Base en desarrollo, arquitectura de computadores, bases de datos e ingenier\u00eda (seg\u00fan historial en LinkedIn).",
      "cert.h2": "Certificaciones",
      "cert.intro": "Principales certificaciones listadas en LinkedIn (Udemy, Skillsoft, Rosetta Stone).",
      "cert.langs":
        "<strong>Idiomas:</strong> portugu\u00e9s e ingl\u00e9s (nativo/biling\u00fce); espa\u00f1ol (profesional).",
      "cert.i1": "<strong>Advanced OAuth Security</strong> <span class=\"cert-issuer\">\u2014 Udemy, oct 2023</span>",
      "cert.i2": "<strong>Automation Framework with Playwright and Java</strong> <span class=\"cert-issuer\">\u2014 Udemy, jul 2023</span>",
      "cert.i3": "<strong>FSD Front-End Development: Frameworks</strong> <span class=\"cert-issuer\">\u2014 Skillsoft, jul 2023</span>",
      "cert.i4": "<strong>Clean Architecture Esencial \u2014 ASP.NET Core con C#</strong> <span class=\"cert-issuer\">\u2014 Udemy, mar 2023</span>",
      "cert.i5": "<strong>Full-Stack con .NET Web API y Angular + EF Core</strong> <span class=\"cert-issuer\">\u2014 Udemy, ene 2023</span>",
      "cert.i6": "<strong>Microservicios desde cero con Spring Cloud, Spring Boot y Docker</strong> <span class=\"cert-issuer\">\u2014 Udemy, jul 2022</span>",
      "cert.i7": "<strong>C# curso completo (de b\u00e1sico a avanzado)</strong> <span class=\"cert-issuer\">\u2014 Udemy, mar 2022</span>",
      "cert.i8": "<strong>English Pre-Test</strong> <span class=\"cert-issuer\">\u2014 Rosetta Stone, feb 2017</span>",
      "contact.h2": "Contacto",
      "contact.p1":
        "La forma m\u00e1s r\u00e1pida de contactarme es por <a href=\"https://www.linkedin.com/in/jackson-calixto/\" target=\"_blank\" rel=\"noopener noreferrer\">LinkedIn</a> o la p\u00e1gina de <a href=\"https://github.com/Jackson-Calixto\" target=\"_blank\" rel=\"noopener noreferrer\">GitHub</a>.",
      "contact.emailLabel": "Correo:",
      "contact.btnIn": "Mensaje en LinkedIn",
      "contact.btnGh": "GitHub",
      "footer.suffix": " Jackson Calixto. Contenido p\u00fablico \u2014 GM solo como empleador.",
      "modal.openGh": "Abrir en GitHub",
      "modal.close": "Cerrar",
      "modal.closeAria": "Cerrar"
    }
  };

  function resolveLang(lang) {
    var s = (lang || "").toLowerCase();
    if (s === "pt" || s === "pt-br" || s === "pt_br") return "pt-BR";
    if (s === "en" || s === "en-us" || s === "en_us") return "en";
    if (s === "es" || s === "es-es" || s === "es_es") return "es";
    return "pt-BR";
  }

  function applyLang(lang) {
    var l = resolveLang(lang);
    currentLang = l;
    var dict = I18N[l] || I18N["pt-BR"];

    if (htmlEl) htmlEl.setAttribute("lang", l === "pt-BR" ? "pt-BR" : l);

    if (dict["page.title"]) {
      var t = document.getElementById("page-title") || document.querySelector("title");
      if (t) t.textContent = dict["page.title"];
    }

    document.querySelectorAll("[data-i18n-attr][data-i18n-key]").forEach(function (el) {
      var attr = el.getAttribute("data-i18n-attr");
      var key = el.getAttribute("data-i18n-key");
      if (!attr || !key) return;
      if (dict[key]) el.setAttribute(attr, dict[key]);
    });

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (!key) return;
      if (dict[key]) el.textContent = dict[key];
    });

    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-html");
      if (!key) return;
      if (dict[key]) el.innerHTML = dict[key];
    });

    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      var dl = btn.getAttribute("data-lang") || "";
      btn.setAttribute("aria-pressed", resolveLang(dl) === l ? "true" : "false");
      var ariaKey =
        dl === "pt-BR" ? "lang.ariaPt" : dl === "en" ? "lang.ariaEn" : dl === "es" ? "lang.ariaEs" : null;
      if (ariaKey && dict[ariaKey]) btn.setAttribute("aria-label", dict[ariaKey]);
    });

    var navToggle = document.querySelector(".nav-toggle");
    if (navToggle && nav) {
      var menuOpen = nav.classList.contains("is-open");
      navToggle.setAttribute("aria-label", menuOpen ? dict["nav.toggle.close"] : dict["nav.toggle.open"]);
    }

    if (modalCloseBtn && dict["modal.close"]) modalCloseBtn.textContent = dict["modal.close"];
    if (modalCloseX && dict["modal.closeAria"]) modalCloseX.setAttribute("aria-label", dict["modal.closeAria"]);

    var resumeA = document.getElementById("resume-download");
    if (resumeA) {
      var pdf =
        l === "en"
          ? "assets/Jackson-Calixto-CV-2026-EN.pdf"
          : l === "es"
            ? "assets/Jackson-Calixto-CV-2026-ES.pdf"
            : "assets/Jackson-Calixto-CV-2026-PT.pdf";
      var pdfName =
        l === "en"
          ? "Jackson-Calixto-CV-2026-EN.pdf"
          : l === "es"
            ? "Jackson-Calixto-CV-2026-ES.pdf"
            : "Jackson-Calixto-CV-2026-PT.pdf";
      resumeA.setAttribute("href", pdf);
      resumeA.setAttribute("download", pdfName);
    }

    try {
      localStorage.setItem(LANG_KEY, l);
    } catch {}
  }

  var modal = document.getElementById("projectModal");
  var modalTitle = document.getElementById("modalTitle");
  var modalDesc = document.getElementById("modalDesc");
  var modalTech = document.getElementById("modalTech");
  var modalLink = document.getElementById("modalLink");
  var modalCloseBtn = document.getElementById("modalCloseBtn");
  var modalCloseX = document.getElementById("modalCloseX");

  function openModal(btn) {
    if (!modal) return;
    var l = currentLang;
    var dict = I18N[l] || I18N["pt-BR"];
    var mk = btn.getAttribute("data-mk") || "";
    var tech = btn.getAttribute("data-tech") || "";
    var link = btn.getAttribute("data-link") || "";

    var titleKey = "modal." + mk + ".title";
    var descKey = "modal." + mk + ".desc";
    if (modalTitle) modalTitle.textContent = dict[titleKey] || btn.getAttribute("data-title") || "";
    if (modalDesc) modalDesc.textContent = dict[descKey] || btn.getAttribute("data-desc") || "";
    if (modalTech) modalTech.textContent = tech;
    if (modalLink) {
      modalLink.setAttribute("href", link || "#");
      modalLink.textContent = dict["modal.openGh"] || "GitHub";
    }
    if (modalCloseBtn) modalCloseBtn.textContent = dict["modal.close"] || "Close";
    if (modalCloseX) modalCloseX.setAttribute("aria-label", dict["modal.closeAria"] || "Close");

    if (typeof modal.showModal === "function") modal.showModal();
  }

  document.querySelectorAll("[data-open-modal]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      openModal(btn);
    });
  });

  if (modalCloseX && modal) {
    modalCloseX.addEventListener("click", function (e) {
      e.preventDefault();
      if (typeof modal.close === "function") modal.close();
    });
  }

  var initial = "pt-BR";
  try {
    initial = localStorage.getItem(LANG_KEY) || initial;
  } catch (e) {}
  if (!initial) initial = (navigator.language || "pt-BR").toLowerCase();
  applyLang(initial);

  document.querySelectorAll(".lang-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      applyLang(btn.getAttribute("data-lang") || "pt-BR");
    });
  });

  if (toggle) {
    toggle.addEventListener("click", function () {
      var open = nav && nav.classList.contains("is-open");
      var dict = I18N[currentLang] || I18N["pt-BR"];
      toggle.setAttribute("aria-label", open ? dict["nav.toggle.close"] : dict["nav.toggle.open"]);
    });
  }
})();
