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

    const fullName = document.getElementById("fullName").value;
    const jobTitle = document.getElementById("jobTitle").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const location = document.getElementById("location").value;

    const education = document.getElementById("education").value;
    const institution = document.getElementById("institution").value;
    const educationYear = document.getElementById("educationYear").value;

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
        experience || "Your experience will appear here.";


    document.getElementById("previewSkills").textContent =
        skills || "Your skills will appear here.";

    document.getElementById("previewProfile").textContent =
        profile || "Your professional profile will appear here.";
}


function printCV() {

    const cv = document.getElementById("cvPreview").innerHTML;

    const printWindow = window.open("", "_blank");

    printWindow.document.write(`
        <!DOCTYPE html>

        <html>

        <head>

            <title>JobReady CV</title>

            <style>

                * {
                    box-sizing: border-box;
                }

                body {
                    font-family: Arial, Helvetica, sans-serif;
                    margin: 0;
                    background: white;
                    color: #172033;
                }

                .cv {
                    padding: 55px;
                    max-width: 800px;
                    margin: auto;
                }

                h1 {
                    font-size: 36px;
                    margin-bottom: 3px;
                }

                h2 {
                    color: #2563eb;
                    font-size: 17px;
                    font-weight: normal;
                }

                .contact {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 12px;
                    color: #667085;
                    font-size: 12px;
                    margin: 15px 0 35px;
                }

                .cv-section {
                    margin-bottom: 30px;
                }

                .cv-section h3 {
                    color: #2563eb;
                    font-size: 13px;
                    border-bottom: 1px solid #ddd;
                    padding-bottom: 7px;
                    margin-bottom: 12px;
                }

                .cv-section h4 {
                    font-size: 16px;
                }

                .cv-section p {
                    color: #4b5563;
                    font-size: 13px;
                    white-space: pre-line;
                }

                @media print {

                    body {
                        background: white;
                    }

                    .cv {
                        width: 100%;
                        padding: 35px;
                    }

                }

            </style>

        </head>

        <body>

            <div class="cv">

                ${cv}

            </div>

        </body>

        </html>
    `);

    printWindow.document.close();

    printWindow.focus();

    printWindow.print();

                    }
async function improveExperience() {

    const experience =
        document.getElementById("experience").value.trim();

    const message =
        document.getElementById("aiMessage");

    if (!experience) {

        message.textContent =
            "Please describe your experience first.";

        return;
    }

    message.textContent =
        "✨ JobReady AI is working...";

    try {

        const response = await fetch(
            "https://jobready-ai.johnrnoble99.workers.dev/",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    experience: experience
                })
            }
        );


        const data = await response.json();


        if (!response.ok) {

            message.textContent =
                data.error ||
                "Something went wrong. Please try again.";

            return;
        }


        if (data.improved) {

            document.getElementById("experience").value =
                data.improved;

            updateCV();

            message.textContent =
                "✨ Your experience has been improved!";

        } else {

            message.textContent =
                "The AI did not return an answer.";

        }


    } catch (error) {

        console.error(error);

        message.textContent =
            "Unable to connect to JobReady AI.";

    }

}
