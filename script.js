/* script.js */

// 1. Sticky Navbar & Scroll Background
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// 2. Scroll Animation (Fade Up)
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.animate-up').forEach(el => {
    observer.observe(el);
});

// 3. Smooth Scrolling untuk Link Navigasi
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// 4. Mobile Menu Toggle (Sederhana)
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

if (mobileMenu) {
    mobileMenu.addEventListener('click', () => {
        // Logika untuk menampilkan menu mobile jika diperlukan tambahan CSS
        alert("Navigasi mobile dapat dikembangkan lebih lanjut sesuai kebutuhan UI.");
    });
}

// 5. Hero Text Reveal Effect (Logic Ringan)
document.addEventListener('DOMContentLoaded', () => {
    const heroContent = document.querySelector('.hero-content');
    heroContent.style.opacity = "1";
    heroContent.style.transform = "translateY(0)";
});