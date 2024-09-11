document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("resume-box").style.display = "none";
    
    document.getElementById("resume-form").addEventListener("submit", function(event) {
        event.preventDefault();
        
        // Collect form input values
        const h1tag = "Resume Generated";
        const name = document.getElementById("name").value;
        const image = document.getElementById("file").files[0]; // Use files[0] to get the selected file
        const email = document.getElementById("email").value;
        const phoneNumber = document.getElementById("phone-number").value;
        const location = document.getElementById("location").value;
        const jobType = document.getElementById("job-type").value;
        const company = document.getElementById("comapny").value;
        const jobDate = document.getElementById("job-date").value;
        const degree = document.getElementById("degree").value;
        const institution = document.getElementById("insitution").value;
    
        let imageURL = '';
        if (image) {
            imageURL = URL.createObjectURL(image);
        }
        
         const resumeHTML = `
            <h1>${h1tag}</h1>
            <hr>
            <div id="name-img">
            <h2>${name}</h2>
            <span><img src="${imageURL}" alt="Image"></span>
            </div>
            <hr>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone Number:</strong> ${phoneNumber}</p>
            <p><strong>Location:</strong> ${location}</p>
    
            <hr>
            <h3>Experience</h3>
                <p><strong>Job Type:</strong> ${jobType}</p>
            <p><strong>Company:</strong> ${company}</p>
            <p><strong>Job Date:</strong> ${jobDate}</p>
    
            <hr>
            <h3>Education</h3>
            <p><strong>Degree:</strong> ${degree}</p>
                <p><strong>Institution:</strong> ${institution}</p>
        `;
        
        const resumeContainer = document.getElementById("resume");
        resumeContainer.innerHTML = resumeHTML;

        document.getElementById("resume-box").style.display = "flex";
        
        document.getElementById("output-resume").scrollIntoView({ behavior: 'smooth' });
    });
});
    