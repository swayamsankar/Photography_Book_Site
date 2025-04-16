// Get package type from URL
const urlParams = new URLSearchParams(window.location.search);
const packageType = urlParams.get("package");

if (packageType) {
    document.getElementById("package-name").innerText = packageType.charAt(0).toUpperCase() + packageType.slice(1);
}

// Handle Payment Method Switching
const paymentMethods = document.querySelectorAll('.payment-method');
const paymentForms = document.querySelectorAll('.payment-form');

paymentMethods.forEach(method => {
    method.addEventListener('click', function() {
        // Remove active class from all methods
        paymentMethods.forEach(m => m.classList.remove('active'));
        // Add active class to clicked method
        this.classList.add('active');
        
        // Show corresponding form and hide others
        const methodType = this.dataset.method;
        paymentForms.forEach(form => {
            form.style.display = form.id === `${methodType}-form` ? 'block' : 'none';
        });
    });
});

// Handle Form Submissions
const cardForm = document.getElementById('card-form');
const phoneForm = document.getElementById('phone-form');
const successMessage = document.getElementById('success-message');

function handleFormSubmit(event) {
    event.preventDefault();
    
    // Get the submit button and disable it
    const submitButton = event.target.querySelector('button[type="submit"]');
    submitButton.disabled = true;
    submitButton.textContent = 'Processing...';
    
    // Simulate Payment Process (Replace with real API integration if needed)
    setTimeout(() => {
        // Hide all forms
        cardForm.style.display = 'none';
        phoneForm.style.display = 'none';
        // Show success message
        successMessage.style.display = 'block';
        
        // Re-enable the button after process is complete
        submitButton.disabled = false;
        submitButton.textContent = 'Submit Payment';
    }, 2000);
}

// Add event listeners with proper error handling
try {
    if (cardForm) {
        cardForm.addEventListener('submit', handleFormSubmit);
    }
    if (phoneForm) {
        phoneForm.addEventListener('submit', handleFormSubmit);
    }
} catch (error) {
    console.error('Error initializing form event listeners:', error);
}

// Initialize first payment method as active if exists
if (paymentMethods.length > 0) {
    paymentMethods[0].click();
}
