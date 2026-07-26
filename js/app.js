// App State
let currentDay = 1;
let audioPlayer = null;
const MONTHS = [
  'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
  'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
];

const DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// Paywall
function isSubscribed() {
  return localStorage.getItem('maria365_subscribed') === 'true';
}

function showPaywall() {
  document.getElementById('paywall').classList.add('active');
}

function hidePaywall() {
  document.getElementById('paywall').classList.remove('active');
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  audioPlayer = new AudioPlayer();
  audioPlayer.onPlayCallback = () => updatePlayButton(true);
  audioPlayer.onPauseCallback = () => updatePlayButton(false);
  audioPlayer.onEndCallback = () => updatePlayButton(false);

  setupSpeedButtons();
  renderCalendar();
  updateProgress();
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
  if (day !== 1 && !isSubscribed()) {
    showPaywall();
    return;
  }

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
  document.getElementById('calendarView').style.display = 'none';
  document.getElementById('dayView').classList.add('active');
  document.getElementById('backBtn').style.display = 'flex';
  document.getElementById('streakBadge').style.display = 'none';

  window.scrollTo(0, 0);
}

function showCalendar() {
  if (audioPlayer) audioPlayer.stop();
  updatePlayButton(false);

  document.getElementById('calendarView').style.display = 'block';
  document.getElementById('dayView').classList.remove('active');
  document.getElementById('backBtn').style.display = 'none';

  const progress = getProgress();
  if (progress.currentStreak > 0) {
    document.getElementById('streakBadge').style.display = 'inline-flex';
  }

  renderCalendar();
  updateProgress();
  window.scrollTo(0, 0);
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

// Keyboard Navigation
document.addEventListener('keydown', (e) => {
  if (document.getElementById('dayView').classList.contains('active')) {
    if (e.key === 'ArrowLeft') navigateDay(-1);
    if (e.key === 'ArrowRight') navigateDay(1);
    if (e.key === 'Escape') showCalendar();
    if (e.key === ' ') {
      e.preventDefault();
      toggleAudio();
    }
  }
});
