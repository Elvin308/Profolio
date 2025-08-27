
//   ************************Resume Download*******************************   //
function downloadResume() 
{
    const resumeLink = document.createElement('a');
    resumeLink.href = '../assets/PDF/Resume_ElvinMartinez.pdf';
    resumeLink.download = 'Elvin_Martinez_Resume.pdf';
    document.body.appendChild(resumeLink);
    resumeLink.click();
    document.body.removeChild(resumeLink);
}


//   ************************Navigation bar toggle*******************************   //

const toggleBtn = document.querySelector(".menu-toggle");
const navMenu = document.querySelector("header nav ul");

  toggleBtn.addEventListener("click", () => {
    navMenu.classList.toggle("show");
    toggleBtn.textContent = (toggleBtn.textContent == "☰" ? "✖" : "☰");
  });



//   ************************Rain Effect*******************************   //

  const rainContainer = document.getElementById('rain');
  const numDrops = 50;

    for (let i = 0; i < numDrops; i++) {
      const drop = document.createElement('div');
      drop.classList.add('drop');

      // Random position and speed
      drop.style.left = Math.random() * 100 + 'vw';
      drop.style.animationDuration = 2 + Math.random() * 3 + 's';
      drop.style.animationDelay = Math.random() * 5 + 's';

      rainContainer.appendChild(drop);
    }