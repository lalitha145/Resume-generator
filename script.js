// script.js

document.getElementById('resumeForm').addEventListener('submit', function (event) {
  event.preventDefault();

  // Get form values
  const fullName = document.getElementById('fullName').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const address = document.getElementById('address').value;
  const skills = document.getElementById('skills').value;
  const graduationStartYear = document.querySelector('.graduation-start-year').value;
  const githubProfile = document.getElementById('github').value;
  const linkedinProfile = document.getElementById('linkedin').value;
  const profileDescription = document.getElementById('profileDescription').value;

  const educationEntries = document.querySelectorAll('.education-entry');
  const education = Array.from(educationEntries).map(entry => ({
    school: entry.querySelector('.school-name').value,
    degree: entry.querySelector('.degree').value,
    graduationYear: entry.querySelector('.graduation-year').value,
    graduationStartYear: graduationStartYear,
  }));

  const experienceEntries = document.querySelectorAll('.experience-entry');
  const experience = Array.from(experienceEntries).map(entry => ({
    jobTitle: entry.querySelector('.job-title').value,
    company: entry.querySelector('.company').value,
    employmentPeriod: entry.querySelector('.employment-period').value,
    jobDescription: entry.querySelector('.job-description').value,
  }));

  // Generate the resume output
  const resumeOutput = `
    <h1>${fullName}</h1>
    <p>Email: ${email} | Phone: ${phone} | Address: ${address}</p>
    
    <h2>Education</h2>
    ${education.map(edu => `<p><strong>${edu.degree}</strong> - ${edu.school} (${edu.graduationStartYear} - ${edu.graduationYear})</p>`).join('')}
    
    <h2>Work Experience</h2>
    ${experience.map(exp => `
      <h3>${exp.jobTitle} - ${exp.company} (${exp.employmentPeriod})</h3>
      <p>${exp.jobDescription}</p>
    `).join('')}
    
    <h2>Skills</h2>
    <p>${skills}</p>
    
    <h2>Coding Profiles</h2>
    <p>GitHub: <a href="${githubProfile}" target="_blank">${githubProfile}</a></p>
    <p>LinkedIn: <a href="${linkedinProfile}" target="_blank">${linkedinProfile}</a></p>
    
    <h2>Profile Description</h2>
    <p>${profileDescription}</p>
  `;

  // Display the generated resume
  document.getElementById('resumeOutput').innerHTML = resumeOutput;
});
