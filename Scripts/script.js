function downloadResume() 
{
    const resumeLink = document.createElement('a');
    resumeLink.href = './assets/PDF/Resume_ElvinMartinez.pdf';
    resumeLink.download = 'Elvin_Martinez_Resume.pdf';
    document.body.appendChild(resumeLink);
    resumeLink.click();
    document.body.removeChild(resumeLink);
}
