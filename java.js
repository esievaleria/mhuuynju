
document.addEventListener('DOMContentLoaded', function() {
    
    const dots = document.querySelectorAll('.horizontal-dot');
    const sections = document.querySelectorAll('.horizontal-section');
    const layout = document.querySelector('.horizontal-layout');
    
    dots.forEach(dot => {
        dot.addEventListener('click', function() {
            const sectionId = this.getAttribute('data-section');
            const section = document.getElementById(sectionId);
            
            
            dots.forEach(d => d.classList.remove('active'));
            this.classList.add('active');
            
            
            layout.scrollTo({
                left: section.offsetLeft - 30,
                behavior: 'smooth'
            });
        });
    });
    
    
    layout.addEventListener('scroll', function() {
        const scrollPosition = layout.scrollLeft + layout.clientWidth / 2;
        
        sections.forEach((section, index) => {
            if (scrollPosition > section.offsetLeft && 
                scrollPosition < section.offsetLeft + section.offsetWidth) {
                dots.forEach(d => d.classList.remove('active'));
                dots[index].classList.add('active');
            }
        });
    });
});

const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;


if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark-mode');
    darkModeToggle.checked = true;
}


darkModeToggle.addEventListener('change', function() {
    if (this.checked) {
        body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'enabled');
    } else {
        body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'disabled');
    }
});


const searchForm = document.getElementById('searchForm');
searchForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    
    
    
    if (searchTerm.trim() !== '') {
        alert(`Searching for: ${searchTerm}`);
        
    }
});
document.addEventListener('DOMContentLoaded', function() {
    
    document.querySelectorAll('a[href="#courses"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const coursesSection = document.getElementById('courses');
            if (coursesSection) {
                window.scrollTo({
                    top: coursesSection.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    
    const filterButtons = document.querySelectorAll('.filter-btn');
    const courseCards = document.querySelectorAll('.course-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            
        
            courseCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-level') === filter) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});