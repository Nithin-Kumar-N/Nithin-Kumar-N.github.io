document.addEventListener("DOMContentLoaded", function() {
    loadProjects();
    
    document.getElementById("contactForm").addEventListener("submit", function(event) {
      event.preventDefault();
      validateForm();
    });
  
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
  
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  });
  
  function loadProjects() {
    fetch('projects.json')
      .then(response => response.json())
      .then(data => {
        const projectsList = document.getElementById("projectsList");
        data.forEach(project => {
          const projectDiv = document.createElement("div");
          projectDiv.classList.add("project");
          projectDiv.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
          `;
          projectsList.appendChild(projectDiv);
        });
      })
      .catch(error => console.error('Error loading projects:', error));
  }
  
  function validateForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
  
    if (name === "" || email === "" || message === "") {
      alert("Please fill in all fields.");
      return;
    }
  
    if (!isValidEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }
  
    // If all validations pass, you can proceed with form submission, for example:
    // document.getElementById("contactForm").submit();
  }
  
  function isValidEmail(email) {
    // Simple email validation using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  