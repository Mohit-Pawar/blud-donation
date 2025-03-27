// Wait for DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
    // Navbar scroll behavior
    const navbar = document.querySelector('.navbar');
    const toggleButton = document.getElementById('mobile-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');
    const donateForm = document.getElementById('donateForm');
    const donateFormContainer = document.getElementById('donateFormContainer');
    const successMessage = document.getElementById('successMessage');
    const newAppointmentButton = document.getElementById('newAppointmentButton');
    
    // Navbar hide/show on scroll
    let lastScroll = 0;
    window.addEventListener('scroll', function() {
      const currentScroll = window.pageYOffset;
      
      if (currentScroll <= 0) {
        navbar.classList.remove('scroll-up');
        return;
      }
      
      if (currentScroll > lastScroll && !navbar.classList.contains('scroll-down')) {
        // Scroll Down
        navbar.classList.remove('scroll-up');
        navbar.classList.add('scroll-down');
      } else if (currentScroll < lastScroll && navbar.classList.contains('scroll-down')) {
        // Scroll Up
        navbar.classList.remove('scroll-down');
        navbar.classList.add('scroll-up');
      }
      lastScroll = currentScroll;
    });
    
    // Function to scroll to section
    function scrollToSection(sectionId) {
        const section = document.querySelector(sectionId);
        if (section) {
            window.scrollTo({
                top: section.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    }

    // Add click handlers for Donate Now buttons in navbar
    const navbarDonateButton = document.querySelector('.navbar-desktop .btn-primary');
    const mobileDonateButton = document.querySelector('.navbar-mobile-menu .btn-primary');
    const heroScheduleButton = document.querySelector('.hero-buttons .btn-primary');

    if (navbarDonateButton) {
        navbarDonateButton.addEventListener('click', function(e) {
            e.preventDefault();
            scrollToSection('#donate');
        });
    }

    if (mobileDonateButton) {
        mobileDonateButton.addEventListener('click', function(e) {
            e.preventDefault();
            scrollToSection('#donate');
            // Close mobile menu after clicking
            mobileMenu.classList.add('hidden');
            menuIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
        });
    }

    if (heroScheduleButton) {
        heroScheduleButton.addEventListener('click', function(e) {
            e.preventDefault();
            scrollToSection('#donate');
        });
    }
  
    // Mobile menu toggle
    if (toggleButton) {
      toggleButton.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
        menuIcon.classList.toggle('hidden');
        closeIcon.classList.toggle('hidden');
      });
    }
  
    // Close mobile menu when clicking on a link
    const mobileLinks = document.querySelectorAll('.navbar-mobile-link');
    mobileLinks.forEach(link => {
      link.addEventListener('click', function() {
        mobileMenu.classList.add('hidden');
        menuIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
      });
    });
  
    // Smooth scrolling for all links that point to IDs
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        
        if (targetId === '#') return;
        
        e.preventDefault();
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      });
    });
  
    // IntersectionObserver for fade-in animations
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, observerOptions);
  
    const fadeElements = document.querySelectorAll('.fade-in-section');
    fadeElements.forEach((element) => {
      observer.observe(element);
    });
  
    // Tab switching functionality
    const tabTriggers = document.querySelectorAll('.tab-trigger');
    const tabContents = document.querySelectorAll('.tab-content');

    function switchTab(tabId) {
      // Remove active class from all triggers and contents
      tabTriggers.forEach(t => t.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));
      
      // Add active class to selected trigger and content
      const selectedTrigger = document.querySelector(`.tab-trigger[data-tab="${tabId}"]`);
      const selectedContent = document.getElementById(`${tabId}-tab`);
      
      if (selectedTrigger && selectedContent) {
        selectedTrigger.classList.add('active');
        selectedContent.classList.add('active');
      }
    }

    // Add click handlers to tab triggers
    tabTriggers.forEach(trigger => {
      trigger.addEventListener('click', () => {
        const tabId = trigger.getAttribute('data-tab');
        switchTab(tabId);
      });
    });

    // Form switch links
    const formSwitchLinks = document.querySelectorAll('.form-switch-link');
    formSwitchLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const tabId = link.getAttribute('data-tab');
        switchTab(tabId);
      });
    });

    // Login form submission
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
      loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(loginForm);
        const formDataObj = {};
        formData.forEach((value, key) => {
          formDataObj[key] = value;
        });
        
        // In a real application, you would send the form data to a server here
        console.log('Login form submitted:', formDataObj);
        alert('Login functionality would be implemented here in a real application.');
      });
    }

    // Signup form submission
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
      signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(signupForm);
        const formDataObj = {};
        formData.forEach((value, key) => {
          formDataObj[key] = value;
        });
        
        // In a real application, you would send the form data to a server here
        console.log('Signup form submitted:', formDataObj);
        alert('Signup functionality would be implemented here in a real application.');
      });
    }
  
    // Donation form submission
    if (donateForm) {
      donateForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(donateForm);
        const formDataObj = {};
        formData.forEach((value, key) => {
          formDataObj[key] = value;
        });
        
        // In a real application, you would send the form data to a server here
        // For this demo, we'll just show the success message
        donateFormContainer.classList.add('hidden');
        successMessage.classList.remove('hidden');
        
        // Scroll to success message
        successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
      });
    }
  
    // New appointment button
    if (newAppointmentButton) {
      newAppointmentButton.addEventListener('click', function() {
        donateFormContainer.classList.remove('hidden');
        successMessage.classList.add('hidden');
        donateForm.reset();
        
        // Scroll back to form
        donateFormContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
      });
    }
  });
  