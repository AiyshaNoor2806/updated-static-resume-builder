document.addEventListener("DOMContentLoaded", function () {
    var form = document.querySelector("#resumeForm");
    var outputSection = document.getElementById("generatedResume");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        // Capture form data
        var name = document.getElementById("name").value.trim();
        var email = document.getElementById("email").value.trim();
        var phone = document.getElementById("phone").value.trim();
        var education = document.getElementById("education").value.trim();
        var experience = document.getElementById("experience").value.trim();
        var skills = document.getElementById("skills").value.trim();
        // Display the generated resume in the output section
        outputSection.innerHTML = "\n            <h2>Generated Resume</h2>\n            <h3>".concat(name, "</h3>\n            <p><strong>Email:</strong> ").concat(email, "</p>\n            <p><strong>Phone:</strong> ").concat(phone, "</p>\n            <h4>Education</h4>\n            <p>").concat(education, "</p>\n            <h4>Experience</h4>\n            <p>").concat(experience, "</p>\n            <h4>Skills</h4>\n            <p>").concat(skills, "</p>\n        ");
        // Scroll to the generated resume section
        outputSection.scrollIntoView({ behavior: "smooth" });
    });
});
