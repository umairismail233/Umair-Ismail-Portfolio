/**
 * UMAIR ISMAIL PORTFOLIO — INTERACTIVE ARCHITECTURE ENGINE
 * Empathy-first, human-centered story engine
 * Zero external libraries, lightning-fast vanilla JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {
  initDiagnosticTool();
  initCaseStudyModal();
  initCopyEmail();
  initScrollSpy();
  initFloatingDock();
});

/* --------------------------------------------------------------------------
   1. Interactive Team Diagnostic Engine (Empathy & Human Resolution)
   -------------------------------------------------------------------------- */
const DIAGNOSTIC_DATA = {
  onboarding: {
    title: 'Welcoming, High-Clarity Digital Onboarding',
    desc: 'When new hires are dumped into 40-hour lecture marathons, retention drops and anxiety spikes. We replace passive lectures with welcoming, interactive onboarding journeys. Learners test real-life tasks step-by-step with immediate coaching, cutting trainer exhaustion and letting newcomers feel confident from week one.',
    whatsappQuery: 'Onboarding%20Experience',
    deliverables: [
      'Interactive decision scenarios where failure is safe and educational',
      'Clear milestone checklists so learners always know where they stand',
      'Practical digital job aids integrated directly into daily tools',
      'Drastically reduced stress and higher long-term team retention'
    ]
  },
  hesitation: {
    title: 'Safe Rehearsal & Decision-Driven Scenario Practice',
    desc: 'Staff memorize compliance checklists easily, but freeze under real customer pressure. We identify exact moments of doubt, then design realistic conversational sandboxes with compassionate, real-time feedback so confidence becomes muscle memory.',
    whatsappQuery: 'Scenario%20Practice%20and%20Confidence',
    deliverables: [
      'Real-world branching conversation simulators (e.g. WhatsApp / CRM chat)',
      'Constructive feedback loops that build self-assurance instead of anxiety',
      'Measurable boost in real-world policy application and customer satisfaction',
      'Empowered frontline team members who feel supported'
    ]
  },
  support: {
    title: 'Living Knowledge Hubs & Self-Serve Assistant Architecture',
    desc: 'When team leads spend a third of their day answering the same repetitive questions, everyone burns out. We organize tribal knowledge into beautifully categorized, searchable hubs backed by automated self-serve guides so teams get answers in seconds.',
    whatsappQuery: 'Knowledge%20Hubs%20and%20Support',
    deliverables: [
      'Living, searchable knowledge base organized by real employee questions',
      'Interactive Dialogflow FAQ decision trees for instant frontline guidance',
      'Over 60% reduction in repetitive internal helpdesk escalations',
      'Hours returned to team leads to mentor and innovate'
    ]
  }
};

function initDiagnosticTool() {
  const tabs = document.querySelectorAll('.diag-tab-btn');
  const solutionBox = document.getElementById('diagSolution');
  const deliverablesBox = document.getElementById('diagDeliverables');
  if (!tabs.length || !solutionBox || !deliverablesBox) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      const key = tab.getAttribute('data-diag');
      const data = DIAGNOSTIC_DATA[key];
      if (!data) return;

      solutionBox.innerHTML = `
        <h4>${data.title}</h4>
        <p>${data.desc}</p>
        <a class="btn btn-whatsapp" href="https://wa.me/923318434147?text=Hi%20Umair,%20I'd%20love%20to%20discuss%20improving%20our%20team's%20${data.whatsappQuery}." target="_blank" rel="noopener noreferrer">
          <span>Let's Discuss This Challenge with Umair</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </a>
      `;

      deliverablesBox.innerHTML = data.deliverables.map(item => `
        <div class="deliverable-row">
          <svg class="deliverable-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
          <span>${item}</span>
        </div>
      `).join('');
    });
  });
}

/* --------------------------------------------------------------------------
   2. Story Deep-Dive Modal System (Verified Career Chronicles)
   -------------------------------------------------------------------------- */
const CAREER_STORIES = {
  'case-gso': {
    org: 'Global Study Options · Lahore',
    title: 'Transforming Academic Materials into Engaging Student Learning Journeys',
    scope: 'Assistant Manager — Learning Experience Design (March 2026 — Present)',
    bottleneck: 'Educational documentation and student onboarding materials were dense, text-heavy, and difficult for learners to digest independently. Program coordinators spent excessive time repeatedly answering common assessment queries.',
    intervention: 'I analyzed learner assessment flows and structured traditional curriculum content into engaging, modular learning paths. By establishing clear milestones, interactive checkpoints, and streamlined documentation workflows, students navigate requirements with clarity and ease.',
    outcomes: [
      'Significantly improved student onboarding completion and engagement rates',
      'Established seamless coordination between academic teams and operational leads',
      'Created standardized, reusable assessment tracking frameworks across programs',
      'Ongoing daily operational leadership ensuring quality and accessibility'
    ]
  },
  'case-zameen': {
    org: 'Zameen.com · Proptech Unicorn',
    title: 'Scaling Onboarding with Clarity & Real-Time Performance Dashboards',
    scope: 'E-Learning Associate (May 2022 — September 2023) · 2,000+ Active Workforce',
    bottleneck: 'During periods of rapid corporate growth, new hires across multiple sales and operations departments experienced inconsistent onboarding quality. Senior trainers were stretched thin repeating identical introductory modules every week.',
    intervention: 'I designed structured digital learning curricula tailored for over 2,000 workforce members. Replaced passive lecture marathons with modular interactive scenario challenges, coupled with real-time reporting dashboards that gave managers immediate visibility into trainee readiness.',
    outcomes: [
      'Accelerated time-to-competency across onboarding batches by 3x',
      'Gave leadership real-time clarity into training milestones across departments',
      'Drastically reduced trainer fatigue while elevating participant satisfaction',
      'Created a sustainable, standardized knowledge foundation that scaled effortlessly'
    ]
  },
  'case-ptcl': {
    org: 'PTCL.Official · Telecom Fleet',
    title: 'Empowering Frontline Teams with Centralized Knowledge Hubs & AI Support',
    scope: 'Team Lead – Learning & Process (2021–2022) · Training Specialist (2017–2021)',
    bottleneck: 'Thousands of customer service representatives relied on outdated, fragmented static pages for policy and product updates. Modifying a help page took days, leaving frontline staff hesitant during high-stress customer calls.',
    intervention: 'I led the Quality Assurance Unit Help Desk knowledge overhaul, restructuring over 100 raw pages into a comprehensive, categorized 360+ page living knowledge hub. Additionally, I built and launched a Dialogflow AI chatbot trained on 500+ real customer scenario decision trees.',
    outcomes: [
      'Frontline agents received instant, accurate guidance during live customer interactions',
      'Substantially reduced internal helpdesk query volume and escalation times',
      'Delivered structured coaching sessions and workshops for thousands of employees',
      'Standardized operational SOPs, eliminating chronic performance gaps across teams'
    ]
  }
};

function initCaseStudyModal() {
  const overlay = document.getElementById('caseModal');
  const closeBtn = document.getElementById('modalClose');
  const triggerBtns = document.querySelectorAll('[data-case-trigger]');
  if (!overlay || !closeBtn) return;

  triggerBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const caseId = btn.getAttribute('data-case-trigger');
      const data = CAREER_STORIES[caseId];
      if (!data) return;

      document.getElementById('modalOrg').textContent = data.org;
      document.getElementById('modalTitle').textContent = data.title;
      document.getElementById('modalScope').textContent = data.scope;
      document.getElementById('modalBottleneck').textContent = data.bottleneck;
      document.getElementById('modalIntervention').textContent = data.intervention;
      
      const metricsList = document.getElementById('modalMetrics');
      metricsList.innerHTML = data.outcomes.map(o => `<li>${o}</li>`).join('');

      overlay.classList.add('open');
      document.body.style.overflow = 'hidden';
      closeBtn.focus();
    });
  });

  const closeModal = () => {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  };

  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('open')) closeModal();
  });
}

/* --------------------------------------------------------------------------
   3. Copy Email with Toast Feedback
   -------------------------------------------------------------------------- */
function initCopyEmail() {
  const copyBtn = document.getElementById('copyEmailBtn');
  const toast = document.getElementById('copyToast');
  if (!copyBtn || !toast) return;

  copyBtn.addEventListener('click', async () => {
    const email = 'umair.ismail22@gmail.com';
    try {
      await navigator.clipboard.writeText(email);
      showToast('✓ Email copied: ' + email);
    } catch (err) {
      const input = document.createElement('input');
      input.value = email;
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      document.body.removeChild(input);
      showToast('✓ Email copied: ' + email);
    }
  });

  let toastTimer;
  function showToast(msg) {
    clearTimeout(toastTimer);
    toast.textContent = msg;
    toast.classList.add('show');
    toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 3200);
  }
}

/* --------------------------------------------------------------------------
   4. Smooth Scroll & Scroll Spy
   -------------------------------------------------------------------------- */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.header-nav a[href^="#"]');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 120;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  }, { passive: true });
}

/* --------------------------------------------------------------------------
   5. Floating Action Dock Behavior
   -------------------------------------------------------------------------- */
function initFloatingDock() {
  const dock = document.getElementById('floatingDock');
  if (!dock) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 350) {
      dock.classList.add('visible');
    } else {
      dock.classList.remove('visible');
    }
  }, { passive: true });
}
