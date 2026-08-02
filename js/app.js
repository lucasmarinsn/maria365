// App State
let currentDay = 1;
let audioPlayer = null;
let userAccess = false;
const MONTHS = [
  'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
  'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
];

const DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// Access Control - Free access for all users
function hasAccess() {
  return true;
}

function setAccess(email, name) {
  localStorage.setItem('maria365_user_email', email || '');
  localStorage.setItem('maria365_user_name', name || '');
}

// Initialize
document.addEventListener('DOMContentLoaded', async () => {
  // Grant access to all users
  if (!localStorage.getItem('maria365_user_email')) {
    setAccess('user@maria365.com', 'Usuario');
  }
  
  userAccess = true;
  
  audioPlayer = new AudioPlayer();
  audioPlayer.onPlayCallback = () => updatePlayButton(true);
  audioPlayer.onPauseCallback = () => updatePlayButton(false);
  audioPlayer.onEndCallback = () => updatePlayButton(false);

  setupSpeedButtons();
  showHome();
});

// Progress Management
function getProgress() {
  const data = localStorage.getItem('maria365_progress');
  if (data) return JSON.parse(data);
  return {
    completedDays: [],
    currentStreak: 0,
    lastCompletedDate: null,
    startDate: new Date().toISOString().split('T')[0]
  };
}

function saveProgress(progress) {
  localStorage.setItem('maria365_progress', JSON.stringify(progress));
}

function toggleComplete() {
  const progress = getProgress();
  const index = progress.completedDays.indexOf(currentDay);

  if (index === -1) {
    progress.completedDays.push(currentDay);
    progress.completedDays.sort((a, b) => a - b);
  } else {
    progress.completedDays.splice(index, 1);
  }

  // Update streak
  const today = new Date().toISOString().split('T')[0];
  if (progress.completedDays.includes(currentDay)) {
    if (progress.lastCompletedDate === today || !progress.lastCompletedDate) {
      progress.currentStreak++;
    } else {
      const lastDate = new Date(progress.lastCompletedDate);
      const todayDate = new Date(today);
      const diffDays = Math.floor((todayDate - lastDate) / (1000 * 60 * 60 * 24));
      if (diffDays === 1) {
        progress.currentStreak++;
      } else if (diffDays > 1) {
        progress.currentStreak = 1;
      }
    }
    progress.lastCompletedDate = today;
  } else {
    progress.currentStreak = Math.max(0, progress.currentStreak - 1);
  }

  saveProgress(progress);
  updateProgress();
  updateCompleteButton();
  renderCalendar();
}

function updateProgress() {
  const progress = getProgress();
  const completed = progress.completedDays.length;
  const percent = Math.round((completed / 365) * 100);

  document.getElementById('completedCount').textContent = completed;
  document.getElementById('progressPercent').textContent = `${percent}%`;
  document.getElementById('progressFill').style.width = `${percent}%`;

  // Update streak
  if (progress.currentStreak > 0) {
    document.getElementById('streakBadge').style.display = 'inline-flex';
    document.getElementById('streakCount').textContent = progress.currentStreak;
  } else {
    document.getElementById('streakBadge').style.display = 'none';
  }

  updateCompleteButton();
}

function updateCompleteButton() {
  const progress = getProgress();
  const btn = document.getElementById('completeBtn');
  if (progress.completedDays.includes(currentDay)) {
    btn.textContent = '✓ Completado';
    btn.classList.add('completed');
  } else {
    btn.textContent = 'Marcar como Completado ✓';
    btn.classList.remove('completed');
  }
}

// Calendar Rendering
function renderCalendar() {
  const container = document.getElementById('calendarView');
  container.innerHTML = '';

  let dayCounter = 1;

  MONTHS.forEach((month, monthIndex) => {
    const section = document.createElement('div');
    section.className = 'month-section';

    const title = document.createElement('h2');
    title.className = 'month-title';
    title.textContent = month;
    section.appendChild(title);

    const grid = document.createElement('div');
    grid.className = 'days-grid';

    const daysInMonth = DAYS_IN_MONTH[monthIndex];

    for (let d = 0; d < daysInMonth; d++) {
      const dayNum = dayCounter;
      const cell = document.createElement('div');
      cell.className = 'day-cell';
      cell.textContent = dayNum;

      const progress = getProgress();
      const today = new Date();
      const dayOfYear = getDayOfYear(today);
      const isCompleted = progress.completedDays.includes(dayNum);

      if (isCompleted) {
        cell.classList.add('completed');
      }

      if (dayNum === dayOfYear) {
        cell.classList.add('current');
      } else if (dayNum > dayOfYear) {
        cell.classList.add('future');
      }

      cell.onclick = () => openDay(dayNum);
      grid.appendChild(cell);
      dayCounter++;
    }

    section.appendChild(grid);
    container.appendChild(section);
  });
}

function getDayOfYear(date) {
  const start = new Date(date.getFullYear(), 0, 0);
  const diff = date - start;
  const oneDay = 1000 * 60 * 60 * 24;
  return Math.floor(diff / oneDay);
}

// Day View
function openDay(day) {
  currentDay = day;
  const data = devotionalData[day - 1];

  if (!data) {
    console.error(`No data for day ${day}`);
    return;
  }

  document.getElementById('dayNumber').textContent = `Día ${data.day}`;
  document.getElementById('dayTitle').textContent = data.title;
  document.getElementById('dayMonth').textContent = data.month;
  document.getElementById('verseText').textContent = `"${data.verse.text}"`;
  document.getElementById('verseReference').textContent = `— ${data.verse.reference}`;
  document.getElementById('reflectionText').textContent = data.reflection;
  document.getElementById('prayerText').textContent = data.prayer;

  // Update navigation
  document.getElementById('prevBtn').disabled = day <= 1;
  document.getElementById('nextBtn').disabled = day >= 365;

  // Stop any playing audio
  if (audioPlayer) audioPlayer.stop();
  updatePlayButton(false);

  updateCompleteButton();

  // Switch views
  hideAllViews();
  document.getElementById('dayView').classList.add('active');
  document.getElementById('backBtn').style.display = 'flex';
  document.getElementById('streakBadge').style.display = 'none';
  document.getElementById('bottomNav').classList.add('hidden');
  updateNavActive('hoy');

  window.scrollTo(0, 0);
}

function showCalendar() {
  if (audioPlayer) audioPlayer.stop();
  updatePlayButton(false);

  hideAllViews();
  document.getElementById('calendarView').style.display = 'block';
  document.getElementById('backBtn').style.display = 'none';

  const progress = getProgress();
  if (progress.currentStreak > 0) {
    document.getElementById('streakBadge').style.display = 'inline-flex';
  }

  renderCalendar();
  updateProgress();
  updateNavActive('calendario');
  window.scrollTo(0, 0);
}

function showHome() {
  if (audioPlayer) audioPlayer.stop();
  updatePlayButton(false);

  hideAllViews();
  document.getElementById('homeView').classList.add('active');
  document.getElementById('backBtn').style.display = 'none';

  updateHome();
  updateNavActive('inicio');
  window.scrollTo(0, 0);
}

function showToday() {
  const today = new Date();
  const dayOfYear = getDayOfYear(today);
  openDay(dayOfYear);
}

function showLogros() {
  if (audioPlayer) audioPlayer.stop();
  updatePlayButton(false);

  hideAllViews();
  document.getElementById('logrosView').classList.add('active');
  document.getElementById('backBtn').style.display = 'none';

  updateLogros();
  updateNavActive('logros');
  window.scrollTo(0, 0);
}

function hideAllViews() {
  document.getElementById('homeView').classList.remove('active');
  document.getElementById('calendarView').style.display = 'none';
  document.getElementById('dayView').classList.remove('active');
  document.getElementById('logrosView').classList.remove('active');
  document.getElementById('bottomNav').classList.remove('hidden');
}

function goBack() {
  const homeActive = document.getElementById('homeView').classList.contains('active');
  if (homeActive) {
    showCalendar();
  } else {
    showHome();
  }
}

function updateNavActive(section) {
  document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
  const map = { inicio: 0, calendario: 1, hoy: 2, logros: 3 };
  const idx = map[section];
  if (idx !== undefined) {
    document.querySelectorAll('.nav-item')[idx].classList.add('active');
  }
}

function navigateDay(direction) {
  const newDay = currentDay + direction;
  if (newDay >= 1 && newDay <= 365) {
    openDay(newDay);
  }
}

// Audio Controls
function toggleAudio() {
  const data = devotionalData[currentDay - 1];
  if (!data) return;

  const textToSpeak = `${data.verse.text}. ${data.verse.reference}. ${data.prayer}`;
  audioPlayer.toggle(textToSpeak);
}

function updatePlayButton(playing) {
  const btn = document.getElementById('playBtn');
  const waveBars = document.querySelectorAll('.wave-bar');

  if (playing) {
    btn.textContent = '⏸';
    waveBars.forEach(bar => bar.classList.add('active'));
  } else {
    btn.textContent = '▶';
    waveBars.forEach(bar => bar.classList.remove('active'));
  }
}

function setupSpeedButtons() {
  document.querySelectorAll('.speed-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.speed-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      const rate = parseFloat(e.target.dataset.rate);
      if (audioPlayer) audioPlayer.setRate(rate);
    });
  });
}

// Home View
function updateHome() {
  const progress = getProgress();
  const completed = progress.completedDays.length;
  const percent = Math.round((completed / 365) * 100);

  // Greeting
  const hour = new Date().getHours();
  let greeting = 'Buenos días';
  if (hour >= 12 && hour < 18) greeting = 'Buenas tardes';
  else if (hour >= 18) greeting = 'Buenas noches';
  document.getElementById('homeGreeting').textContent = greeting;

  // Date
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  document.getElementById('homeDate').textContent = new Date().toLocaleDateString('es-ES', options);

  // Stage calculation
  const stages = [
    { name: 'Iniciante', icon: '🌱', min: 0, max: 30, next: 'Intermediario', nextIcon: '⭐' },
    { name: 'Intermediario', icon: '⭐', min: 31, max: 90, next: 'Avanzado', nextIcon: '🔥' },
    { name: 'Avanzado', icon: '🔥', min: 91, max: 180, next: 'Mestre', nextIcon: '👑' },
    { name: 'Mestre', icon: '👑', min: 181, max: 365, next: null, nextIcon: null }
  ];

  let currentStage = stages[0];
  for (const stage of stages) {
    if (completed >= stage.min && completed <= stage.max) {
      currentStage = stage;
      break;
    }
  }

  document.getElementById('stageBadge').textContent = currentStage.icon;
  document.getElementById('stageName').textContent = currentStage.name;
  document.getElementById('stageProgressText').textContent = `${completed} de ${currentStage.max} días`;
  const stagePercent = Math.min(100, Math.round(((completed - currentStage.min) / (currentStage.max - currentStage.min)) * 100));
  document.getElementById('stageBarFill').style.width = `${stagePercent}%`;

  // Stats
  document.getElementById('homeStreak').textContent = progress.currentStreak;
  document.getElementById('homeCompleted').textContent = completed;
  document.getElementById('homePercent').textContent = `${percent}%`;

  // Next stage
  const nextStageEl = document.getElementById('homeNextStage');
  if (currentStage.next) {
    nextStageEl.style.display = 'block';
    document.querySelector('.next-stage-icon').textContent = currentStage.nextIcon;
    document.querySelector('.next-stage-name').textContent = currentStage.next;
    const daysLeft = currentStage.max + 1 - completed;
    document.querySelector('.next-stage-need').textContent = `Te faltan ${daysLeft} días`;
  } else {
    nextStageEl.style.display = 'none';
  }
}

// Logros View
function updateLogros() {
  const progress = getProgress();
  const completed = progress.completedDays.length;

  const stages = [
    { id: 'logroIniciante', min: 0, max: 30, name: 'Iniciante', icon: '🌱' },
    { id: 'logroIntermedio', min: 31, max: 90, name: 'Intermediario', icon: '⭐' },
    { id: 'logroAvanzado', min: 91, max: 180, name: 'Avanzado', icon: '🔥' },
    { id: 'logroMestre', min: 181, max: 365, name: 'Mestre', icon: '👑' }
  ];

  let currentStage = stages[0];
  stages.forEach(stage => {
    const el = document.getElementById(stage.id);
    if (completed >= stage.min) {
      el.classList.remove('locked');
      el.querySelector('.logro-status').textContent = '✓';
    }
    if (completed >= stage.min && completed <= stage.max) {
      currentStage = stage;
    }
  });

  document.getElementById('logrosCurrentStage').innerHTML = `
    <div class="logros-current-icon">${currentStage.icon}</div>
    <div class="logros-current-name">${currentStage.name}</div>
    <div class="logros-current-progress">${completed} días completados</div>
  `;
}

// Stage Toast
let stageToastTimer = null;
function showStageToast(icon, title, desc) {
  const toast = document.getElementById('stageToast');
  if (!toast) return;
  if (stageToastTimer) clearTimeout(stageToastTimer);
  document.getElementById('stageToastIcon').textContent = icon;
  document.getElementById('stageToastTitle').textContent = title;
  document.getElementById('stageToastDesc').textContent = desc;
  toast.style.display = 'flex';
  toast.classList.add('show');
  stageToastTimer = setTimeout(() => dismissStageToast(), 4000);
}

function dismissStageToast() {
  const toast = document.getElementById('stageToast');
  if (!toast) return;
  if (stageToastTimer) clearTimeout(stageToastTimer);
  toast.classList.remove('show');
  setTimeout(() => { toast.style.display = 'none'; }, 500);
}

// Click toast to dismiss
document.addEventListener('DOMContentLoaded', () => {
  const toast = document.getElementById('stageToast');
  if (toast) {
    toast.addEventListener('click', (e) => {
      if (e.target.id !== 'stageToastClose') dismissStageToast();
    });
  }
});

// Keyboard Navigation
document.addEventListener('keydown', (e) => {
  if (document.getElementById('dayView').classList.contains('active')) {
    if (e.key === 'ArrowLeft') navigateDay(-1);
    if (e.key === 'ArrowRight') navigateDay(1);
    if (e.key === 'Escape') goBack();
    if (e.key === ' ') {
      e.preventDefault();
      toggleAudio();
    }
  }
});
