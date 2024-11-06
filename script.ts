document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#resumeForm") as HTMLFormElement;
    const outputSection = document.getElementById("generatedResume") as HTMLElement;

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        // Capture form data
        const name = (document.getElementById("name") as HTMLInputElement).value.trim();
        const email = (document.getElementById("email") as HTMLInputElement).value.trim();
        const phone = (document.getElementById("phone") as HTMLInputElement).value.trim();
        const education = (document.getElementById("education") as HTMLTextAreaElement).value.trim();
        const experience = (document.getElementById("experience") as HTMLTextAreaElement).value.trim();
        const skills = (document.getElementById("skills") as HTMLTextAreaElement).value.trim();

        // Display the generated resume in the output section
        outputSection.innerHTML = `
            <h2>Generated Resume</h2>
            <h3>${name}</h3>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <h4>Education</h4>
            <p>${education}</p>
            <h4>Experience</h4>
            <p>${experience}</p>
            <h4>Skills</h4>
            <p>${skills}</p>
        `;

        // Scroll to the generated resume section
        outputSection.scrollIntoView({ behavior: "smooth" });
    });
});
