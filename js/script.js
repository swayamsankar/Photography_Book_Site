// Image Slider Functionality
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.hero-image');
    let currentIndex = 0;
    let intervalId = null;

    // Ensure at least one image is visible initially
    if (images.length > 0) {
        images[currentIndex].classList.add('active');
    }

    function changeImage() {
        if (images.length === 0) return; // Exit if no images found
        
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('active');
    }

    // Only set interval if there are multiple images
    if (images.length > 1) {
        intervalId = setInterval(changeImage, 3000);
    }

    // Cleanup interval on page unload
    window.addEventListener('beforeunload', () => {
        if (intervalId) {
            clearInterval(intervalId);
        }
    });
});

// Tab Switching Functionality
const tablinks = document.querySelectorAll(".tab-links");
const tabcontents = document.querySelectorAll(".tab-contents");

function opentab(tabname, event) {
    if (!event) {
        console.error('Event object is undefined');
        return;
    }
    
    // Remove active-link class from all tab links
    tablinks.forEach(tablink => tablink.classList.remove("active-link"));
    
    // Remove active-tab class from all tab contents
    tabcontents.forEach(tabcontent => tabcontent.classList.remove("active-tab"));

    // Add active-link to the clicked tab and display corresponding content
    event.currentTarget.classList.add("active-link");
    const tabContent = document.getElementById(tabname);
    if (tabContent) {
        tabContent.classList.add("active-tab");
    } else {
        console.error(`Tab content with id ${tabname} not found`);
    }
}

// Side Menu Functionality
const sidemenu = document.getElementById("sidemenu");

if (sidemenu) {
    function openmenu() {
        sidemenu.style.right = "0";  // Open side menu by setting its right position to 0
    }

    function closemenu() {
        sidemenu.style.right = "-200px";  // Close side menu by moving it off-screen
    }
} else {
    console.error('Side menu element not found');
}

// Smooth Scroll to Home Section
document.querySelectorAll('a[href="#hero"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
            // Close menu if open
            closemenu();
        } else {
            console.error('Hero section not found');
        }
    });
});

// document.addEventListener('DOMContentLoaded', () => {
//     // ✅ Your Deployed Google Apps Script Web App URL
//     const scriptURL = "https://script.google.com/macros/s/AKfycbxS7qcgCVYtoioTTaXGstrksmgKGVRvYqfRxl38CifAq9l5DyhPNvzxxWZMTcoUOVJXeQ/exec";

//     const form = document.querySelector('form[name="submit-to-google-sheet"]');
//     const responseMessage = document.getElementById("response-message");

//     if (!form) {
//         console.error('Form element with name "submit-to-google-sheet" not found in HTML');
//         return;
//     }

//     if (!responseMessage) {
//         console.error('Response message element with id "response-message" not found in HTML');
//         return;
//     }

//     form.addEventListener("submit", async (event) => {
//         event.preventDefault();
//         responseMessage.textContent = "Submitting...";
//         responseMessage.style.color = "black";

//         // Validate required fields
//         const requiredFields = form.querySelectorAll('[required]');
//         let isValid = true;
//         requiredFields.forEach(field => {
//             if (!field.value.trim()) {
//                 isValid = false;
//                 field.style.borderColor = 'red';
//             } else {
//                 field.style.borderColor = '';
//             }
//         });

//         if (!isValid) {
//             responseMessage.textContent = "Please fill in all required fields.";
//             responseMessage.style.color = "red";
//             return;
//         }

//         // ✅ Send form data
//         const formData = new FormData(form);

//         try {
//             const response = await fetch(scriptURL, {
//                 method: "POST",
//                 body: formData,
//                 mode: 'no-cors', // Add this to handle cross-origin requests
//                 headers: {
//                     // Remove Content-Type header for no-cors mode
//                     // 'Content-Type': 'multipart/form-data'
//                 }
//             });

//             // In no-cors mode, response will be opaque and can't be read
//             responseMessage.textContent = "Form submitted successfully!";
//             responseMessage.style.color = "green";
//             form.reset();

//         } catch (error) {
//             responseMessage.textContent = "Error submitting form. Please check your network connection.";
//             responseMessage.style.color = "red";
//             console.error("Fetch Error:", error);
//         }
//     });
// });
