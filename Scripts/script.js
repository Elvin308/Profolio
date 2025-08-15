function downloadResume() 
{
    const resumeLink = document.createElement('a');
    resumeLink.href = './assets/Resume_ElvinMartinez.pdf';
    resumeLink.download = 'Elvin_Martinez_Resume.pdf';
    document.body.appendChild(resumeLink);
    link.click();
    document.body.removeChild(resumeLink);
}