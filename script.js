    // 1. Typing Effect Logic
    const textElement = document.querySelector(".typing-text");
    const texts = ["Java Developer", "Software Engineer", "Problem Solver"];
    let count = 0;
    let index = 0;
    let currentText = "";
    let letter = "";

    (function type() {
        if (count === texts.length) {
            count = 0;
        }
        currentText = texts[count];
        letter = currentText.slice(0, ++index);

        textElement.textContent = letter;

        if (letter.length === currentText.length) {
            count++;
            index = 0;
            setTimeout(type, 2000); // Pause at end of word
        } else {
            setTimeout(type, 100); // Typing speed
        }
    })();

    // 2. Navbar Background Change on Scroll
    const navbar = document.getElementById("mainNav");
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    // 3. Scroll Reveal Animation (Intersection Observer)
    const observerOptions = {
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show-element');
            }
        });
    }, observerOptions);

    const hiddenElements = document.querySelectorAll('.hidden-element');
    hiddenElements.forEach((el) => observer.observe(el));


    // 4. Form Validation (Preserved & Improved)
    document.getElementById("contactForm").addEventListener("submit", function(e) {
        e.preventDefault();

        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let subject = document.getElementById("subject").value.trim();
        let message = document.getElementById("message").value.trim();

        if (!name || !email || !subject || !message) {
            alert("Please fill in all fields correctly.");
            return;
        }

        // You would typically send data to backend here
        alert(`Thanks ${name}! Your message has been sent successfully.`);
        this.reset();
    });