// Dark Mode Toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
const html = document.documentElement;

// Load theme from localStorage
const currentTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', currentTheme);

darkModeToggle.addEventListener('click', () => {
  const currentTheme = html.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
});

// Mobile Menu Toggle
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navList = document.querySelector('.nav-list');

navToggle.addEventListener('click', () => {
  navList.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navList.classList.remove('active');
  });
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Render Projects
function renderProjects(filterType = 'all', searchQuery = '') {
  const container = document.getElementById('projects-container');
  const filteredProjects = projects.filter(project => {
    const matchesType = filterType === 'all' || project.type === filterType;
    const matchesSearch = 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesType && matchesSearch;
  });

  if (filteredProjects.length === 0) {
    container.innerHTML = '<p style="text-align: center; color: var(--text-secondary); grid-column: 1 / -1;">검색 결과가 없습니다.</p>';
    return;
  }

  container.innerHTML = filteredProjects.map(project => `
    <div class="project-card" onclick="openProjectDetail('${project.id}')">
      <div class="project-card-header">
        <div>
          <h3 class="project-card-title">${project.title}</h3>
          <div class="project-card-meta">${project.period} · ${project.type === 'company' ? '회사 프로젝트' : '개인 프로젝트'} · ${project.role}</div>
        </div>
        ${project.featured ? '<span class="project-featured">Featured</span>' : ''}
      </div>
      <p class="project-card-description">${project.shortDescription}</p>
      <div class="project-card-tech">
        ${project.technologies.slice(0, 6).map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
        ${project.technologies.length > 6 ? `<span class="tech-tag">+${project.technologies.length - 6}</span>` : ''}
      </div>
      <div class="project-card-footer">
        <span class="read-more">자세히 보기 →</span>
      </div>
    </div>
  `).join('');
}

// Project Filter
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filterType = btn.getAttribute('data-filter');
    const searchQuery = document.getElementById('project-search').value;
    renderProjects(filterType, searchQuery);
  });
});

// Project Search
document.getElementById('project-search').addEventListener('input', (e) => {
  const activeFilter = document.querySelector('.filter-btn.active');
  const filterType = activeFilter ? activeFilter.getAttribute('data-filter') : 'all';
  renderProjects(filterType, e.target.value);
});

// Open Project Detail
function openProjectDetail(projectId) {
  const project = projects.find(p => p.id === projectId);
  if (!project) return;

  const projectsSection = document.getElementById('projects');
  const detailSection = document.getElementById('project-detail-section');
  const detailContent = document.getElementById('project-detail-content');
  
  // Hide projects list
  projectsSection.style.display = 'none';
  
  // Show detail section
  detailSection.style.display = 'block';
  
  // Build detailed content
  let contentHTML = `
    <div class="project-detail-header">
      <h1 class="project-detail-title">${project.title}</h1>
      <div class="project-detail-meta">
        <span class="meta-item">📅 ${project.period}</span>
        <span class="meta-item">${project.type === 'company' ? '🏢 회사 프로젝트' : '👤 개인 프로젝트'}</span>
        <span class="meta-item">👨‍💻 ${project.role}</span>
        ${project.featured ? '<span class="meta-item featured-badge">⭐ Featured</span>' : ''}
      </div>
    </div>

    <div class="project-detail-body">
      <section class="detail-section">
        <h2 class="detail-section-title">프로젝트 개요</h2>
        <p class="detail-description">${project.description}</p>
        ${project.background ? `<div class="detail-subsection">
          <h3 class="detail-subtitle">프로젝트 배경</h3>
          <p>${project.background}</p>
        </div>` : ''}
      </section>

      <section class="detail-section">
        <h2 class="detail-section-title">기술 스택</h2>
        <div class="tech-stack-grid">
          ${project.technologies.map(tech => `<span class="tech-badge-large">${tech}</span>`).join('')}
        </div>
      </section>

      ${project.challenges && project.challenges.length > 0 ? `
      <section class="detail-section">
        <h2 class="detail-section-title">주요 도전 과제</h2>
        <ul class="detail-list">
          ${project.challenges.map(challenge => `<li>${challenge}</li>`).join('')}
        </ul>
      </section>
      ` : ''}

      <section class="detail-section">
        <h2 class="detail-section-title">주요 기능 및 구현 내용</h2>
        <ul class="detail-list">
          ${project.highlights.map(highlight => `<li>${highlight}</li>`).join('')}
        </ul>
      </section>

      ${project.technicalDetails && project.technicalDetails.length > 0 ? `
      <section class="detail-section">
        <h2 class="detail-section-title">기술적 하이라이트</h2>
        <ul class="detail-list">
          ${project.technicalDetails.map(detail => `<li>${detail}</li>`).join('')}
        </ul>
      </section>
      ` : ''}

      <section class="detail-section">
        <h2 class="detail-section-title">성과 및 기여도</h2>
        <ul class="detail-list achievements-list">
          ${project.achievements.map(achievement => `<li>✅ ${achievement}</li>`).join('')}
        </ul>
      </section>
    </div>
  `;
  
  detailContent.innerHTML = contentHTML;
  
  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Close Project Detail
function closeProjectDetail() {
  const projectsSection = document.getElementById('projects');
  const detailSection = document.getElementById('project-detail-section');
  
  detailSection.style.display = 'none';
  projectsSection.style.display = 'block';
  
  // Scroll to projects section
  projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Render Skills
function renderSkills() {
  const container = document.getElementById('skills-container');
  const categories = Object.keys(skillCategories);
  
  container.innerHTML = categories.map(category => {
    const categorySkills = skills.filter(s => s.category === category);
    if (categorySkills.length === 0) return '';

    return `
      <div class="skill-category">
        <h3 class="skill-category-title">${skillCategories[category]}</h3>
        ${categorySkills.map(skill => {
          const levelClass = skill.level;
          const levelText = skill.level === 'expert' ? 'Expert' : skill.level === 'proficient' ? 'Proficient' : 'Familiar';
          return `
            <div class="skill-item">
              <div class="skill-header">
                <span class="skill-name">${skill.name}</span>
                <span class="skill-level ${levelClass}">${levelText}</span>
              </div>
              <div class="skill-progress">
                <div class="skill-progress-bar ${levelClass}"></div>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;
  }).join('');
}

// Render Experience
function renderExperience() {
  const container = document.getElementById('experience-container');
  container.innerHTML = experiences.map(exp => `
    <div class="experience-item">
      <div class="experience-dot"></div>
      <div class="experience-content">
        <h3 class="experience-company">${exp.company}</h3>
        <p class="experience-position">${exp.position}</p>
        <p class="experience-period">📅 ${exp.period}</p>
        <p class="experience-description">${exp.description}</p>
        <div class="experience-responsibilities">
          <h4>주요 업무:</h4>
          <ul>
            ${exp.responsibilities.map(resp => `<li>${resp}</li>`).join('')}
          </ul>
        </div>
        <div>
          <h4>사용 기술:</h4>
          <div class="experience-technologies">
            ${exp.technologies.map(tech => `<span class="tech-badge">${tech}</span>`).join('')}
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

// Render Achievements
function renderAchievements() {
  const container = document.getElementById('achievements-container');
  container.innerHTML = achievements.map(achievement => {
    let icon = '🏆';
    let iconColor = '#F59E0B';
    if (achievement.type === 'project') {
      icon = '⭐';
      iconColor = '#3B82F6';
    } else if (achievement.type === 'contribution') {
      icon = '🎖️';
      iconColor = '#10B981';
    }

    return `
      <div class="achievement-card">
        <div class="achievement-icon" style="color: ${iconColor}">${icon}</div>
        <div class="achievement-content">
          <h3 class="achievement-title">${achievement.title}</h3>
          <div class="achievement-date">${achievement.date}</div>
          <p class="achievement-description">${achievement.description}</p>
          ${achievement.projectId ? `<a href="#projects" class="achievement-link" onclick="openProjectDetail('${achievement.projectId}'); return false;">프로젝트 보기 →</a>` : ''}
          ${achievement.link ? `<a href="${achievement.link}" target="_blank" rel="noopener noreferrer" class="achievement-link">링크 보기 →</a>` : ''}
        </div>
      </div>
    `;
  }).join('');
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  renderProjects();
  renderSkills();
  renderExperience();
  renderAchievements();

  // Animate skill progress bars on scroll
  const observerOptions = {
    threshold: 0.5
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const progressBars = entry.target.querySelectorAll('.skill-progress-bar');
        progressBars.forEach(bar => {
          const width = bar.style.width;
          bar.style.width = '0';
          setTimeout(() => {
            bar.style.width = width;
          }, 100);
        });
      }
    });
  }, observerOptions);

  document.querySelectorAll('.skill-category').forEach(category => {
    observer.observe(category);
  });
});

// Header scroll effect
let lastScroll = 0;
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll <= 0) {
    header.style.boxShadow = 'none';
  } else {
    header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
  }
  
  lastScroll = currentScroll;
});

