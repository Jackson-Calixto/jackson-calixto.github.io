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

  // active nav highlight
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

  // project modal
  var modal = document.getElementById("projectModal");
  var modalTitle = document.getElementById("modalTitle");
  var modalDesc = document.getElementById("modalDesc");
  var modalTech = document.getElementById("modalTech");
  var modalLink = document.getElementById("modalLink");

  function openModal(btn) {
    if (!modal) return;
    var title = btn.getAttribute("data-title") || "";
    var desc = btn.getAttribute("data-desc") || "";
    var tech = btn.getAttribute("data-tech") || "";
    var link = btn.getAttribute("data-link") || "";

    if (modalTitle) modalTitle.textContent = title;
    if (modalDesc) modalDesc.textContent = desc;
    if (modalTech) modalTech.textContent = tech;
    if (modalLink) modalLink.setAttribute("href", link || "#");

    if (typeof modal.showModal === "function") modal.showModal();
  }

  document.querySelectorAll("[data-open-modal]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      openModal(btn);
    });
  });

  // i18n
  var LANG_KEY = "jc_portfolio_lang";
  var htmlEl = document.documentElement;

  // Use Unicode escapes to avoid encoding issues.
  var I18N = {
    "pt-BR": {
      "meta.description": "Jackson Calixto \u2014 desenvolvedor full stack. Portf\u00f3lio, GitHub e experi\u00eancia.",
      "nav.projects": "Projetos",
      "nav.skills": "Skills",
      "nav.certs": "Certifica\u00e7\u00f5es",
      "nav.about": "Sobre",
      "nav.contact": "Contato",
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
      "projects.viewAll": "Ver todos no GitHub \u2192"
    },
    en: {
      "meta.description": "Jackson Calixto \u2014 full stack developer. Portfolio, GitHub and experience.",
      "nav.projects": "Projects",
      "nav.skills": "Skills",
      "nav.certs": "Certifications",
      "nav.about": "About",
      "nav.contact": "Contact",
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
      "projects.viewAll": "View all on GitHub \u2192"
    },
    es: {
      "meta.description": "Jackson Calixto \u2014 desarrollador full stack. Portafolio, GitHub y experiencia.",
      "nav.projects": "Proyectos",
      "nav.skills": "Habilidades",
      "nav.certs": "Certificaciones",
      "nav.about": "Sobre m\u00ed",
      "nav.contact": "Contacto",
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
      "projects.viewAll": "Ver todo en GitHub \u2192"
    }
  };

  function resolveLang(lang) {
    if (lang === "pt" || lang === "pt-BR") return "pt-BR";
    if (lang === "en") return "en";
    if (lang === "es") return "es";
    return "pt-BR";
  }

  function applyLang(lang) {
    var l = resolveLang(lang);
    var dict = I18N[l] || I18N["pt-BR"];

    // set html lang
    if (htmlEl) htmlEl.setAttribute("lang", l);

    // update meta attrs
    document.querySelectorAll("[data-i18n-attr][data-i18n-key]").forEach(function (el) {
      var attr = el.getAttribute("data-i18n-attr");
      var key = el.getAttribute("data-i18n-key");
      if (!attr || !key) return;
      if (dict[key]) el.setAttribute(attr, dict[key]);
    });

    // update text nodes
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (!key) return;
      if (dict[key]) el.textContent = dict[key];
    });

    // update language buttons
    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      btn.setAttribute("aria-pressed", btn.getAttribute("data-lang") === l ? "true" : "false");
    });

    try {
      localStorage.setItem(LANG_KEY, l);
    } catch {}
  }

  // init lang from storage or browser
  var initial = "pt-BR";
  try {
    initial = localStorage.getItem(LANG_KEY) || initial;
  } catch {}
  if (!initial) initial = (navigator.language || "pt-BR").toLowerCase();
  applyLang(initial);

  document.querySelectorAll(".lang-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      applyLang(btn.getAttribute("data-lang") || "pt-BR");
    });
  });
})();
