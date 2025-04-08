
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        
        document.querySelectorAll('.error-message').forEach(el => {
            el.style.display = 'none';
        });
        
        
        let isValid = true;
        const fullName = document.getElementById('fullName');
        const email = document.getElementById('email');
        const subject = document.getElementById('subject');
        const message = document.getElementById('message');
        
        if (!fullName.value.trim()) {
            document.getElementById('nameError').textContent = 'Please enter your full name';
            document.getElementById('nameError').style.display = 'block';
            isValid = false;
        }
        
        if (!email.value.trim()) {
            document.getElementById('emailError').textContent = 'Please enter your email address';
            document.getElementById('emailError').style.display = 'block';
            isValid = false;
        } else if (!isValidEmail(email.value)) {
            document.getElementById('emailError').textContent = 'Please enter a valid email address';
            document.getElementById('emailError').style.display = 'block';
            isValid = false;
        }
        
        if (!subject.value) {
            document.getElementById('subjectError').textContent = 'Please select a subject';
            document.getElementById('subjectError').style.display = 'block';
            isValid = false;
        }
        
        if (!message.value.trim()) {
            document.getElementById('messageError').textContent = 'Please enter your message';
            document.getElementById('messageError').style.display = 'block';
            isValid = false;
        }
        
        if (isValid) {
            
            
            
        
            contactForm.style.display = 'none';
            successMessage.style.display = 'block';
            
            
            contactForm.reset();
            
            
            successMessage.scrollIntoView({ behavior: 'smooth' });
        }
    });
    
    
    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    
    
    const whatsappBtn = document.querySelector('.whatsapp-btn');
    whatsappBtn.addEventListener('click', function(e) {
        
        console.log('WhatsApp button clicked');
    });
});