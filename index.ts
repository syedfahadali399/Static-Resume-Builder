// Define a type for form data
interface ResumeFormData {
    name: string;
    file: File | null;
    email: string;
    phoneNumber: string;
    location: string;
    jobType: string;
    company: string;
    jobDate: string;
    degree: string;
    institution: string;
}

// Wait for the DOM content to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Safely get elements from the DOM
    const resumeBox = document.getElementById("resume-box") as HTMLDivElement | null;
    const hiddenButtons = document.getElementById("buttons") as HTMLDivElement | null;
    const resumeContainer = document.getElementById("resume") as HTMLDivElement | null;
    const editButton = document.getElementById("edit-resume-button") as HTMLButtonElement | null;

    // Initial setup: hide the resume box and hidden buttons
    if (resumeBox) resumeBox.style.display = "none";
    if (hiddenButtons) hiddenButtons.style.display = "none";

    const form = document.getElementById("resume-form") as HTMLFormElement | null;

    if (form) {
        form.addEventListener("submit", (event: Event) => {
            event.preventDefault();

            // Safely get form inputs
            const nameInput = document.getElementById("name") as HTMLInputElement | null;
            const fileInput = document.getElementById("file") as HTMLInputElement | null;
            const emailInput = document.getElementById("email") as HTMLInputElement | null;
            const phoneInput = document.getElementById("phone-number") as HTMLInputElement | null;
            const locationInput = document.getElementById("location") as HTMLInputElement | null;
            const jobTypeInput = document.getElementById("job-type") as HTMLInputElement | null;
            const companyInput = document.getElementById("comapny") as HTMLInputElement | null;
            const jobDateInput = document.getElementById("job-date") as HTMLInputElement | null;
            const degreeInput = document.getElementById("degree") as HTMLInputElement | null;
            const institutionInput = document.getElementById("insitution") as HTMLInputElement | null;

            if (
                nameInput && fileInput && emailInput && phoneInput &&
                locationInput && jobTypeInput && companyInput &&
                jobDateInput && degreeInput && institutionInput &&
                resumeContainer && resumeBox
            ) {
                // Create the form data object
                const formData: ResumeFormData = {
                    name: nameInput.value,
                    file: fileInput.files ? fileInput.files[0] : null,
                    email: emailInput.value,
                    phoneNumber: phoneInput.value,
                    location: locationInput.value,
                    jobType: jobTypeInput.value,
                    company: companyInput.value,
                    jobDate: jobDateInput.value,
                    degree: degreeInput.value,
                    institution: institutionInput.value,
                };

                // Create a URL for the uploaded image file if provided
                let imageURL = '';
                if (formData.file) {
                    imageURL = URL.createObjectURL(formData.file);
                }

                // Generate HTML for the resume
                const resumeHTML = `
                    <h1>Resume Generated</h1>
                    <hr>
                    <div id="name-img">
                        <h2>${formData.name}</h2>
                        <span><img src="${imageURL}" alt="Image"></span>
                    </div>
                    <hr>
                    <p><strong>Email:</strong> ${formData.email}</p>
                    <p><strong>Phone Number:</strong> ${formData.phoneNumber}</p>
                    <p><strong>Location:</strong> ${formData.location}</p>
                    <hr>
                    <h3>Experience</h3>
                    <p><strong>Job Type:</strong> ${formData.jobType}</p>
                    <p><strong>Company:</strong> ${formData.company}</p>
                    <p><strong>Job Date:</strong> ${formData.jobDate}</p>
                    <hr>
                    <h3>Education</h3>
                    <p><strong>Degree:</strong> ${formData.degree}</p>
                    <p><strong>Institution:</strong> ${formData.institution}</p>
                `;

                // Update the resume container with the generated HTML
                if (resumeContainer) {
                    resumeContainer.innerHTML = resumeHTML;
                }

                // Show the resume box and hidden buttons
                if (hiddenButtons) hiddenButtons.style.display = "flex";
                if (resumeBox) resumeBox.style.display = "flex";

                // Scroll into view
                const outputResume = document.getElementById("output-resume") as HTMLElement | null;
                if (outputResume) {
                    outputResume.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });

        // Handle the edit button click event
        if (editButton) {
            editButton.addEventListener("click", () => {
                const nameInput = document.getElementById("name") as HTMLInputElement | null;
                const fileInput = document.getElementById("file") as HTMLInputElement | null;
                const emailInput = document.getElementById("email") as HTMLInputElement | null;
                const phoneInput = document.getElementById("phone-number") as HTMLInputElement | null;
                const locationInput = document.getElementById("location") as HTMLInputElement | null;
                const jobTypeInput = document.getElementById("job-type") as HTMLInputElement | null;
                const companyInput = document.getElementById("comapny") as HTMLInputElement | null;
                const jobDateInput = document.getElementById("job-date") as HTMLInputElement | null;
                const degreeInput = document.getElementById("degree") as HTMLInputElement | null;
                const institutionInput = document.getElementById("insitution") as HTMLInputElement | null;

                if (
                    nameInput && fileInput && emailInput && phoneInput &&
                    locationInput && jobTypeInput && companyInput &&
                    jobDateInput && degreeInput && institutionInput &&
                    resumeBox
                ) {
                    // Repopulate form fields with previous data
                    if (nameInput) nameInput.value = nameInput.value; // No changes
                    if (fileInput) fileInput.value = ''; // Files cannot be programmatically set
                    if (emailInput) emailInput.value = emailInput.value;
                    if (phoneInput) phoneInput.value = phoneInput.value;
                    if (locationInput) locationInput.value = locationInput.value;
                    if (jobTypeInput) jobTypeInput.value = jobTypeInput.value;
                    if (companyInput) companyInput.value = companyInput.value;
                    if (jobDateInput) jobDateInput.value = jobDateInput.value;
                    if (degreeInput) degreeInput.value = degreeInput.value;
                    if (institutionInput) institutionInput.value = institutionInput.value;

                    // Hide the resume box to show the form again
                    if (resumeBox) resumeBox.style.display = "none";
                }
            });
        }
    }
});






// // Declare the jsPDF property on the global window object
// declare global {
//     interface Window {
//         jspdf: any; // 'any' type is used here for simplicity. You can specify the jsPDF type if you prefer.
//     }
// }

// document.addEventListener("DOMContentLoaded", () => {
//     const downloadButton = document.getElementById('download-pdf-button') as HTMLButtonElement;

//     // Handle Download PDF button click
//     downloadButton?.addEventListener('click', () => {
//         // Use window.jspdf as declared above
//         const doc = new window.jspdf.jsPDF();

//         // Capture form data
//         const name = (document.getElementById('name') as HTMLInputElement).value;
//         const email = (document.getElementById('email') as HTMLInputElement).value;
//         const phone = (document.getElementById('phone-number') as HTMLInputElement).value;
//         const location = (document.getElementById('location') as HTMLInputElement).value;
//         const jobType = (document.getElementById('job-type') as HTMLInputElement).value;
//         const company = (document.getElementById('comapny') as HTMLInputElement).value;
//         const jobDate = (document.getElementById('job-date') as HTMLInputElement).value;
//         const degree = (document.getElementById('degree') as HTMLInputElement).value;
//         const institution = (document.getElementById('insitution') as HTMLInputElement).value;

//         // Add form data to the PDF document
//         doc.text("Resume Information", 10, 10);
//         doc.text(`Name: ${name}`, 10, 20);
//         doc.text(`Email: ${email}`, 10, 30);
//         doc.text(`Phone Number: ${phone}`, 10, 40);
//         doc.text(`Location: ${location}`, 10, 50);
//         doc.text(`Job Type: ${jobType}`, 10, 60);
//         doc.text(`Company: ${company}`, 10, 70);
//         doc.text(`Job Date: ${jobDate}`, 10, 80);
//         doc.text(`Degree: ${degree}`, 10, 90);
//         doc.text(`Institution: ${institution}`, 10, 100);

//         // Save the PDF
//         doc.save('resume.pdf');
//     });
// })