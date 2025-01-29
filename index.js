// Dark mode toggle
const theme = {
    get: () => localStorage.getItem('theme') || 'light',
    set: (value) => localStorage.setItem('theme', value)
};

const toggleTheme = () => {
    const newTheme = theme.get() === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    document.querySelector('.theme-toggle').textContent = newTheme === 'light' ? '🌙' : '☀️';
    theme.set(newTheme);
};

// Initialize theme
document.documentElement.setAttribute('data-theme', theme.get());
document.querySelector('.theme-toggle').textContent = theme.get() === 'light' ? '🌙' : '☀️';
document.querySelector('.theme-toggle').addEventListener('click', toggleTheme);

// Intersection Observer for scroll animations
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationDelay = '0s';
                observer.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.1 }
);

document.querySelectorAll('section').forEach(section => observer.observe(section));