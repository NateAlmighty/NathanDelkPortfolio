// DARK MODE TOGGLE
const toggleButton = document.getElementById('darkModeToggle');

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  const isDarkMode = document.body.classList.contains('dark-mode');
  localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
});

// Load saved dark mode preference
if (localStorage.getItem('darkMode') === 'enabled') {
  document.body.classList.add('dark-mode');
}

// KEYBOARD SHORTCUTS + ARIA LIVE ANNOUNCEMENTS
const shortcutDescriptions = {
  '1': 'About section',
  '2': 'Portfolio section',
  '3': 'Certifications section',
  '4': 'Contact section'
};

document.addEventListener('keydown', function(e) {
  const liveRegion = document.getElementById('liveRegion');

  if (e.altKey && e.key >= '1' && e.key <= '4') {
    const sectionId = ['about', 'portfolio', 'certifications', 'contact'][e.key - 1];
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      section.focus();

      if (liveRegion) {
        liveRegion.textContent = `Navigating to ${shortcutDescriptions[e.key]}.`;
      }
    }
  }
});
