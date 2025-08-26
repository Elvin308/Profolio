function downloadResume() 
{
    const resumeLink = document.createElement('a');
    resumeLink.href = '/assets/PDF/Resume_ElvinMartinez.pdf';
    resumeLink.download = 'Elvin_Martinez_Resume.pdf';
    document.body.appendChild(resumeLink);
    resumeLink.click();
    document.body.removeChild(resumeLink);
}


const toggleBtn = document.querySelector(".menu-toggle");
const navMenu = document.querySelector("header nav ul");

  toggleBtn.addEventListener("click", () => {
    navMenu.classList.toggle("show");
    toggleBtn.textContent = (toggleBtn.textContent == "☰" ? "✖" : "☰");
  });