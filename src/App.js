
   const projects= [
       {

        title: "Text-Voice converter",
        image: "Screenshot (3).png", // Replace with your image URL
        link: "https://ng-voice-converter-rwjr.vercel.app/"
    },
    {
        title: "yumio Online food delivers",
        image: "Screenshot (4).png",
        link: "https://sanjay-adepu-yumio.onrender.com/"
    },
    {
        title: "COLLEGE ATTENDENCE PORTAL",
        image: "Screenshot (5).png",
        link: "https://tkrcet.vercel.app/"
    }
];

const container = document.getElementById("projects-container");

projects.forEach(project => {
    const projectElement = document.createElement("div");
    projectElement.classList.add("project");

    projectElement.innerHTML = `
        <img src="${project.image}" alt="${project.title}">
        <h3>${project.title}</h3>
        <a href="${project.link}" target="_blank">View Project</a>
    `;

    container.appendChild(projectElement);
    
});


    
