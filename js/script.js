/* ===================================================================
   IGNITE — data
   Sample data only — swap with real event details before launch.
   =================================================================== */
const EVENTS = [
  { code: 'EVT_01', name: 'Web Development Workshop', category: 'Technical',
    desc: 'Hands-on session building and deploying a responsive site from scratch.' },
  { code: 'EVT_02', name: 'AI & Machine Learning Session', category: 'Technical',
    desc: 'Intro to ML fundamentals with a live model training walkthrough.' },
  { code: 'EVT_03', name: 'Coding Challenge', category: 'Technical',
    desc: 'Timed problem-solving round across multiple difficulty levels.' },

  { code: 'EVT_04', name: 'Resume Building', category: 'Professional',
    desc: 'Workshop on writing resumes that survive ATS screening and recruiters.' },
  { code: 'EVT_05', name: 'LinkedIn & Networking Workshop', category: 'Professional',
    desc: 'Build a profile and outreach habits that actually get replies.' },
  { code: 'EVT_06', name: 'Career Guidance Talk', category: 'Professional',
    desc: 'Industry professionals share how they planned their early career moves.' },

  { code: 'EVT_07', name: 'Tech Quiz', category: 'Interactive',
    desc: 'Buzzer-round quiz covering CS fundamentals, trivia, and current tech.' },
  { code: 'EVT_08', name: 'Innovation Pitch', category: 'Interactive',
    desc: 'Pitch an original idea to a panel in under five minutes.' },
  { code: 'EVT_09', name: 'Problem-Solving Challenge', category: 'Interactive',
    desc: 'Teams tackle an open-ended brief against the clock.' },
];

const SCHEDULE = [
  { time: '09:00', name: 'Registration & Opening Ceremony', track: 'GENERAL' },
  { time: '09:45', name: 'Web Development Workshop', track: 'TECH' },
  { time: '11:00', name: 'AI & Machine Learning Session', track: 'TECH' },
  { time: '12:15', name: 'Resume Building', track: 'PRO' },
  { time: '13:00', name: 'Lunch Break', track: 'GENERAL' },
  { time: '14:00', name: 'Coding Challenge', track: 'TECH' },
  { time: '15:30', name: 'Tech Quiz', track: 'INTERACTIVE' },
  { time: '16:30', name: 'Innovation Pitch', track: 'INTERACTIVE' },
  { time: '17:30', name: 'Closing & Prize Distribution', track: 'GENERAL' },
];

const FAQS = [
  { q: 'Who can participate in IGNITE?',
    a: 'IGNITE is open to all currently enrolled students. Some events may have team-size limits — check each event card for details.' },
  { q: 'Is there a registration fee?',
    a: 'Most sessions are free for IEEE members. A nominal fee applies for select competitive events; details are shared at registration.' },
  { q: 'Can I attend more than one event?',
    a: 'Yes. As long as timings do not overlap, you can register for and attend multiple events across all three tracks.' },
  { q: 'Will certificates be provided?',
    a: 'Yes, e-certificates are issued to all participants, with separate certificates for winners of competitive events.' },
  { q: 'Do I need to bring my own laptop?',
    a: 'For hands-on technical sessions, yes. Quiz and pitch events do not require one.' },
];

/* ===================================================================
   RENDER: events grid
   =================================================================== */
const eventsGrid  = document.getElementById('eventsGrid');
const eventsEmpty = document.getElementById('eventsEmpty');
const searchInput = document.getElementById('searchInput');
const filterBtns  = document.querySelectorAll('.filter-btn');

let activeFilter = 'All';
let searchTerm   = '';

function renderEvents() {
  const filtered = EVENTS.filter(ev => {
    const matchesCategory = activeFilter === 'All' || ev.category === activeFilter;
    const matchesSearch   = ev.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  eventsGrid.innerHTML = filtered.map(ev => `
    <article class="event-card">
      <div class="event-card__top">
        <span class="event-card__code">${ev.code}</span>
        <span class="event-card__pill pill--${ev.category}">${ev.category.toUpperCase()}</span>
      </div>
      <h3>${ev.name}</h3>
      <p>${ev.desc}</p>
    </article>
  `).join('');

  eventsEmpty.hidden = filtered.length !== 0;
}

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    activeFilter = btn.dataset.filter;
    filterBtns.forEach(b => b.classList.toggle('is-active', b === btn));
    renderEvents();
  });
});

searchInput.addEventListener('input', (e) => {
  searchTerm = e.target.value.trim();
  renderEvents();
});

/* ===================================================================
   RENDER: schedule
   =================================================================== */
const scheduleTable = document.getElementById('scheduleTable');

SCHEDULE.forEach(row => {
  const rowEl = document.createElement('div');
  rowEl.className = 'schedule__row';
  rowEl.setAttribute('role', 'row');
  rowEl.innerHTML = `
    <span class="schedule__time">${row.time}</span>
    <span class="schedule__name">${row.name}</span>
    <span class="schedule__track">${row.track}</span>
  `;
  scheduleTable.appendChild(rowEl);
});

/* ===================================================================
   RENDER: FAQ accordion
   =================================================================== */
const faqList = document.getElementById('faqList');

FAQS.forEach((item, i) => {
  const el = document.createElement('div');
  el.className = 'faq__item';
  el.innerHTML = `
    <button class="faq__question" aria-expanded="false" aria-controls="faq-answer-${i}">
      ${item.q}
      <span class="faq__icon" aria-hidden="true"></span>
    </button>
    <div class="faq__answer" id="faq-answer-${i}">
      <p>${item.a}</p>
    </div>
  `;
  faqList.appendChild(el);

  const question = el.querySelector('.faq__question');
  const answer   = el.querySelector('.faq__answer');

  question.addEventListener('click', () => {
    const isOpen = el.classList.contains('is-open');

    el.classList.toggle('is-open', !isOpen);
    question.setAttribute('aria-expanded', String(!isOpen));
    answer.style.maxHeight = isOpen ? null : answer.scrollHeight + 'px';
  });
});

/* ===================================================================
   NAV: mobile toggle + close-on-link-click + active link on scroll
   =================================================================== */
const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('is-open');
  navToggle.classList.toggle('is-open', isOpen);
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('.nav__link').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('is-open');
    navToggle.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

const sections = document.querySelectorAll('main section[id]');
const navLinkEls = document.querySelectorAll('.nav__link');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinkEls.forEach(link => {
        link.classList.toggle('is-active', link.getAttribute('href') === `#${entry.target.id}`);
      });
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(section => sectionObserver.observe(section));

/* ===================================================================
   INIT
   =================================================================== */
renderEvents();
