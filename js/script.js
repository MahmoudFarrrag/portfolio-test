/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
};


/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offser = sec.offsettTop =150;
        let height = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');

            })
        };
    });

    /*==================== sticky navbar ====================*/

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);



    /*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/

    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')


};

/*==================== scroll reveal ====================*/

ScrollReveal({ 
    // reset:true,
    distance: '80px',
    duration: 2000,
    delay: 200
    });

    ScrollReveal().reveal('.home-content, .heading', {origin: 'top' });
    ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form',
    {origin: 'bottom' });
    ScrollReveal().reveal('.home-content h1, .about-img',
    {origin: 'left' });
    ScrollReveal().reveal('.home-content p, .about-content',
    {origin: 'right' });
/*==================== typed js ====================*/

const typed = new Typed('.multiple-text', {
    strings: ['Front end Developer' , 'Front end Developer' , 'Angular | TypeScript'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});




// Function to generate a random number between min and max
function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

// particles   

// script.js
particlesJS("particles-js", {
    particles: {
      number: {
        value: 80, // Adjust the number of particles
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: ["#00ff00", "#ffd700" , "#0000ff" ] // Change particle color
      },
      shape: {
        type: "circle", // Particle shape
        stroke: {
          width: 0,
          color: "#00ff00",
        },
        polygon: {
          nb_sides: 5,
        },
      },
      opacity: {
        value: 0.5, // Particle opacity
        random: true,
      },
      size: {
        value: 5, // Particle size
        random: true,
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 6, // Particle speed
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
      },
    },
    interactivity: {
      detect_on: "window",
      events: {
        onhover: {
          enable: true,
          mode: "repulse",
        },
        onclick: {
          enable: true,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 200,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 200,
          size: 50,
          duration: 4,
          opacity: 10,
          speed: 4,
        },
        repulse: {
          distance: 150,
          duration: 0.6,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
  });


