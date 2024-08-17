let burger = document.querySelector('.burger');
let child = burger.firstElementChild;
let cross = document.createElement('i');
let header = document.querySelector('.side-bar');
cross.className = 'fas fa-times';
burger.onclick = function() {
    burger.classList.toggle('active');
    if (burger.classList.contains('active')) {
        burger.appendChild(cross);
        burger.removeChild(child);
        header.classList.add('active');

    } else {
        burger.removeChild(cross);
        burger.appendChild(child);
        header.classList.remove('active');
    }
    }

/*Contact Form*/
// Assuming you have a form element with the class 'contact-form'
const form = document.querySelector('.contact-form');

// Attach an event listener to the form's submit event
form.addEventListener('submit', async function(event) {
    event.preventDefault();

    const name = form.querySelector(".name").value;
    const email = form.querySelector(".email").value;
    const phone = form.querySelector(".number").value;
    const subject = form.querySelector(".subject").value;
    const message = form.querySelector(".message").value;

    const data = { name, email, phone, subject, message };

    try {

        const response = await fetch("/sendMail", {
            method: "POST",
            headers: {
                "Content-Type": "application/json", 
            },
            body: JSON.stringify(data),
        });

        if (response.status === 200) {
            console.log("Email sent successfully");
            form.reset();
        } else {
            console.error("Failed to send email");
        }
    } catch (error) {
        console.error("An error occurred:", error);
    }
});

/*CV*/
document.querySelector(".cv").addEventListener("click", () => {
    window.open("https://drive.usercontent.google.com/u/0/uc?id=1PWbqztEwy8XHNq-PYs4gTez_2HvcBUIV&export=download")
});
/*Scroller*/
window.addEventListener("scroll", () => {
    let value = window.scrollY;
    if (value > 300) {
        document.querySelector(".scroller").classList.add("active");
    } else {
        document.querySelector(".scroller").classList.remove("active");
    }
});
document.querySelector(".scroller").addEventListener("click", () => {
    window.location.href = "#home";
});
/*Initialize AOS*/
AOS.init();
