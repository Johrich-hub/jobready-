function showBuilder() {

    document.getElementById("home").style.display = "none";

    document.querySelector(".features").style.display = "none";

    document.getElementById("builder").classList.remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


function updateCV() {

    const fullName =
        document.getElementById("fullName").value;

    const jobTitle =
        document.getElementById("jobTitle").value;

    const phone =
        document.getElementById("phone").value;

    const email =
        document.getElementById("email").value;

    const location =
        document.getElementById("location").value;

    const education =
        document.getElementById("education").value;

    const institution =
        document.getElementById("institution").value;

    const educationYear =
        document.getElementById("educationYear").value;

    const experienceTitle =
        document.getElementById("experienceTitle").value;

    const company =
        document.getElementById("company").value;

    const workPeriod =
        document.getElementById("workPeriod").value;

    const experience =
        document.getElementById("experience").value;

    const skills =
        document.getElementById("skills").value;

    const profile =
        document.getElementById("profile").value;


    document.getElementById("previewName").textContent =
        fullName || "Your Name";

    document.getElementById("previewJob").textContent =
        jobTitle || "Professional Candidate";

    document.getElementById("previewPhone").textContent =
        phone || "Phone";

    document.getElementById("previewEmail").textContent =
        email || "Email";

    document.getElementById("previewLocation").textContent =
        location || "Location";


    document.getElementById("previewEducation").textContent =
        education || "Qualification";

    document.getElementById("previewInstitution").textContent =
        institution || "Institution";

    document.getElementById("previewEducationYear").textContent =
        educationYear || "Year";


    document.getElementById("previewExperienceTitle").textContent =
        experienceTitle || "Job Title";

    document.getElementById("previewCompany").textContent =
        company || "Company";

    document.getElementById("previewWorkPeriod").textContent =
        workPeriod || "Work Period";

    document.getElementById("previewExperience").textContent =
        experience || "Your work experience will appear here.";


    document.getElementById("previewSkills").textContent =
        skills || "Your skills will appear here.";

    document.getElementById("previewProfile").textContent =
        profile || "Your professional profile will appear here.";
}


function printCV() {

    const cv =
        document.getElementById("cvPreview").innerHTML;

    const original =
        document.body.innerHTML;

    document.body.innerHTML = `
        <div class="cv print-cv">
            ${cv}
        </div>
    `;

    window.print();

    document.body.innerHTML = original;

    location.reload();
}
