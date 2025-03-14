document.addEventListener('DOMContentLoaded', function() {
    // Theme Toggle Functionality
    const body = document.body;
    let currentTheme = localStorage.getItem('theme') || 'dark';
    
    // Apply saved theme on load
    body.setAttribute('data-theme', currentTheme);
    
    // Create theme toggle button
    const themeToggle = document.createElement('div');
    themeToggle.classList.add('theme-toggle');
    themeToggle.innerHTML = currentTheme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    document.body.appendChild(themeToggle);
    
    // Theme toggle event listener
    themeToggle.addEventListener('click', function() {
        currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
        body.setAttribute('data-theme', currentTheme);
        localStorage.setItem('theme', currentTheme);
        themeToggle.innerHTML = currentTheme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    });
    
    // Create animated background
    const animatedBg = document.createElement('div');
    animatedBg.classList.add('animated-background');
    document.body.appendChild(animatedBg);
    
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on a nav link
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
    
    // Sticky Header and get hero section reference
    const header = document.querySelector('header');
    const heroSection = document.querySelector('.hero');
    
    if (header && heroSection) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                header.style.padding = '10px 0';
            } else {
                header.style.padding = '20px 0';
            }
        });
    }
    
    // Scroll Animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Add animation classes to elements
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        const headings = section.querySelectorAll('h1, h2, h3');
        const paragraphs = section.querySelectorAll('p');
        const features = section.querySelectorAll('.feature');
        const teamMembers = section.querySelectorAll('.team-member');
        const portfolioItems = section.querySelectorAll('.portfolio-item');
        const timeMachineCards = section.querySelectorAll('.time-machine-card');

        headings.forEach(heading => {
            heading.classList.add('fade-in');
            observer.observe(heading);
        });

        paragraphs.forEach(paragraph => {
            paragraph.classList.add('fade-in');
            observer.observe(paragraph);
        });

        features.forEach((feature, i) => {
            feature.classList.add(i % 2 === 0 ? 'slide-in-left' : 'slide-in-right');
            observer.observe(feature);
        });

        teamMembers.forEach((member, i) => {
            member.classList.add('fade-in');
            observer.observe(member);
        });

        portfolioItems.forEach((item, i) => {
            item.classList.add('fade-in');
            observer.observe(item);
        });

        timeMachineCards.forEach((card, i) => {
            card.classList.add('fade-in');
            observer.observe(card);
        });
    });
    
    // Add animation keyframes for particles
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes float {
            0%, 100% {
                transform: translateY(0) translateX(0);
            }
            25% {
                transform: translateY(-20px) translateX(10px);
            }
            50% {
                transform: translateY(-10px) translateX(20px);
            }
            75% {
                transform: translateY(-30px) translateX(-10px);
            }
        }
    `;
    document.head.appendChild(style);
    
    // Create 3D Cube Element for Hero Section
    if (heroSection) {
        const hero3dElement = document.createElement('div');
        hero3dElement.classList.add('hero-3d-element');
        
        const cube = document.createElement('div');
        cube.classList.add('cube');
        
        // Create cube faces
        const faces = ['front', 'back', 'right', 'left', 'top', 'bottom'];
        const icons = ['fa-bitcoin', 'fa-ethereum', 'fa-chart-line', 'fa-code', 'fa-rocket', 'fa-lightbulb'];
        
        faces.forEach((face, index) => {
            const cubeFace = document.createElement('div');
            cubeFace.classList.add('cube-face', face);
            cubeFace.innerHTML = `<i class="fas ${icons[index]}"></i>`;
            cube.appendChild(cubeFace);
        });
        
        hero3dElement.appendChild(cube);
        heroSection.appendChild(hero3dElement);
    }
    
    // Scroll Reveal Animations
    const sr = ScrollReveal({
        origin: 'bottom',
        distance: '60px',
        duration: 1000,
        delay: 200,
        reset: false
    });
    
    sr.reveal('.hero-content', {});
    sr.reveal('.about-content', {});
    sr.reveal('.team-member', { interval: 100 });
    sr.reveal('.portfolio-item', { interval: 50 });
    sr.reveal('.contact-content', {});
    sr.reveal('.contact-item', { interval: 100 });
    sr.reveal('.footer-social a', { interval: 100 });
    
    // Enhanced hover effects for portfolio items
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    portfolioItems.forEach(item => {
        // Random subtle background color on hover
        item.addEventListener('mouseenter', function() {
            const colors = [
                'rgba(156, 39, 176, 0.1)', // Purple
                'rgba(103, 58, 183, 0.1)', // Deep Purple
                'rgba(126, 87, 194, 0.1)'  // Medium Purple
            ];
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            this.style.backgroundColor = randomColor;
            
            // Scale up icon
            const icon = this.querySelector('i');
            if (icon) {
                icon.style.transform = 'scale(1.2)';
                icon.style.transition = 'transform 0.3s ease';
                icon.style.color = '#9C27B0'; // Brighter purple on hover
            }
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.backgroundColor = 'var(--card-bg)';
            
            // Reset icon
            const icon = this.querySelector('i');
            if (icon) {
                icon.style.transform = '';
                icon.style.color = '';
            }
        });
        
        // Click event
        item.addEventListener('click', function() {
            const projectName = this.querySelector('h3').textContent;
            console.log(`Clicked on ${projectName}`);
        });
    });
    
    // Add links to portfolio items
    const portfolioLinks = {
        'Flashbots': 'https://www.flashbots.net/',
        'Ryzz': 'https://ryzz.xyz/',
        'Polymarket': 'https://polymarket.com/',
        'Metacartel Venture DAO': 'https://www.metacartel.org/',
        'Pokt Network': 'https://www.pokt.network/',
        'Polkadot': 'https://polkadot.network/',
        'Solana': 'https://solana.com/',
        'Deribit': 'https://www.deribit.com/',
        'HairDAO': 'https://hairdao.xyz/',
        'Seda': 'https://www.seda.xyz/',
        'HydraDX': 'https://hydradx.io/',
        'Gensyn': 'https://gensyn.ai/',
        'Brahma': 'https://www.brahma.fi/',
        'Holyheld': 'https://holyheld.com/',
        'Zapper.fi': 'https://zapper.fi/',
        'Biconomy': 'https://www.biconomy.io/',
        'STEPN': 'https://stepn.com/',
        'Manta Network': 'https://manta.network/',
        'OlympusDAO': 'https://www.olympusdao.finance/',
        'Molecule': 'https://www.molecule.to/',
        'Kyve': 'https://www.kyve.network/',
        'Subsquid': 'https://subsquid.io/',
        'Thalesmarket': 'https://thalesmarket.io/',
        'Moxy': 'https://moxy.io/',
        'Parallel': 'https://parallel.fi/',
        'Glitter': 'https://glitter.finance/',
        'Fjord': 'https://fjord.foundation/',
        'BOB': 'https://www.bob.io/',
        'Agentcoin': 'https://www.agentcoin.xyz/',
        'Safe': 'https://safe.global/',
        'Dflow': 'https://dflow.net/',
        'Gearbox': 'https://gearbox.fi/',
        'Lens': 'https://www.lens.xyz/',
        'Magic Eden': 'https://magiceden.io/',
        'Mangrove': 'https://mangrove.finance/',
        'Panoptic': 'https://panoptic.xyz/',
        'Plato': 'https://platonetwork.xyz/',
        'Pocket Universe': 'https://pocketuniverse.app/',
        'Reblink': 'https://reblink.io/',
        'Frodobots': 'https://frodobots.com/',
        'Silent': 'https://www.silentprotocol.org/',
        'Mode': 'https://www.mode.network/',
        'Snag': 'https://snag.xyz/',
        'Glif': 'https://www.glif.io/',
        'Alterscope': 'https://alterscope.xyz/',
        'BIO': 'https://bio.xyz/'
    };
    
    portfolioItems.forEach(item => {
        const projectName = item.querySelector('h3').textContent;
        if (portfolioLinks[projectName]) {
            item.addEventListener('click', function() {
                window.open(portfolioLinks[projectName], '_blank');
            });
            item.style.cursor = 'pointer';
        }
    });
    
    // Animate team member cards on hover
    const teamMembers = document.querySelectorAll('.team-member');
    
    teamMembers.forEach(member => {
        member.addEventListener('mouseenter', function() {
            const icon = this.querySelector('i');
            if (icon) {
                icon.style.transform = 'translateY(-5px) scale(1.2)';
                icon.style.color = '#9C27B0'; // Brighter purple on hover
                icon.style.transition = 'all 0.3s ease';
            }
        });
        
        member.addEventListener('mouseleave', function() {
            const icon = this.querySelector('i');
            if (icon) {
                icon.style.transform = '';
                icon.style.color = '';
            }
        });
    });
    
    // Add smooth scrolling for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Adjust for header height
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add typing effect to hero heading
    const heroHeading = document.querySelector('.hero-content h1');
    if (heroHeading) {
        const originalText = heroHeading.textContent;
        heroHeading.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < originalText.length) {
                heroHeading.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };
        
        // Start typing effect after a short delay
        setTimeout(typeWriter, 500);
    }
    
    // Add parallax effect to hero section
    if (heroSection) {
        window.addEventListener('scroll', function() {
            const scrollPosition = window.scrollY;
            heroSection.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
        });
    }
    
    // Add interactive contact form validation
    const contactForm = document.querySelector('.contact form');
    if (contactForm) {
        const inputs = contactForm.querySelectorAll('input, textarea');
        
        inputs.forEach(input => {
            // Add focus effects
            input.addEventListener('focus', function() {
                this.parentElement.classList.add('focused');
            });
            
            input.addEventListener('blur', function() {
                if (this.value === '') {
                    this.parentElement.classList.remove('focused');
                }
                
                // Simple validation
                if (this.value === '' && this.hasAttribute('required')) {
                    this.classList.add('error');
                } else {
                    this.classList.remove('error');
                }
                
                // Email validation
                if (this.type === 'email' && this.value !== '') {
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!emailRegex.test(this.value)) {
                        this.classList.add('error');
                    } else {
                        this.classList.remove('error');
                    }
                }
            });
        });
    }
    
    // Add special animation for Time Machine cards
    const timeMachineSection = document.querySelector('.time-machine');
    if (timeMachineSection) {
        const cards = timeMachineSection.querySelectorAll('.time-machine-card');
        cards.forEach((card, index) => {
            card.style.animationDelay = `${index * 0.2}s`;
        });
    }
}); 