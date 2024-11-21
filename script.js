// Scroll to "About Us" and "Contact Us" sections
document.querySelectorAll('.navbar ul li a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Make "Book Now" buttons functional
document.querySelectorAll('.book-now-btn').forEach(button => {
    button.addEventListener('click', function () {
        const carName = this.getAttribute('data-car');
        if (carName) {
            const carSelect = document.getElementById('car-select');
            carSelect.value = carName;
            document.querySelector('.booking-form').scrollIntoView({ behavior: 'smooth' });
        } else {
            alert("This car's booking functionality is under maintenance.");
        }
    });
});

// Learn More Button
document.getElementById('learn-more-btn').addEventListener('click', function () {
    const moreInfo = document.getElementById('more-info');
    if (moreInfo.style.display === 'none' || !moreInfo.style.display) {
        moreInfo.style.display = 'block';
        this.textContent = 'Show Less';
    } else {
        moreInfo.style.display = 'none';
        this.textContent = 'Learn More';
    }
});

// Contact form submission (dummy handler)
document.querySelector('.contact-form form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for reaching out! We will get back to you soon.');
});

// Booking form submission
document.querySelector('.booking-form form').addEventListener('submit', function (e) {
    e.preventDefault();

    const car = document.getElementById('car-select').value;
    const pickup = document.getElementById('pickup-date').value;
    const dropoff = document.getElementById('dropoff-date').value;

    if (!car || !pickup || !dropoff) {
        alert('Please fill out all fields in the form.');
        return;
    }

    const pickupDate = new Date(pickup);
    const dropoffDate = new Date(dropoff);

    if (pickupDate >= dropoffDate) {
        alert('Dropoff date must be after the pickup date.');
        return;
    }

    const duration = Math.ceil((dropoffDate - pickupDate) / (1000 * 60 * 60 * 24));
    const rates = {
        "Toyota Corolla": 40,
        "Honda Civic": 35,
        "Mercedes-Benz C-Class": 60,
        "MG Hector": 50,
        "Maruti Suzuki Ciaz": 30,
        "Tata Harrier": 55,
        "Mahindra XUV700": 65,
        "Toyota Fortuner": 60,
        "Mahindra Scorpio": 55,
        "Ford Endeavour": 65,
    };

    const price = rates[car] * duration;
    alert(`You have booked ${car} for ${duration} day(s). Total cost: $${price}.`);
});
document.querySelector('.contact-form form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for contacting us! We will respond shortly.');
});
document.addEventListener('scroll', function () {
    const aboutSection = document.querySelector('.about-us');
    const position = aboutSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight;

    if (position < screenPosition) {
        aboutSection.style.opacity = '1';
        aboutSection.style.transform = 'translateY(0)';
        aboutSection.style.transition = 'all 0.8s ease-out';
    }
});

document.querySelector('.booking-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission
    alert('Thank you for your booking! We’ll confirm your reservation shortly.');
});
