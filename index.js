const toggleButton = document.getElementById("toggle-mode");
toggleButton.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode"); 

    if (document.body.classList.contains("dark-mode")) {
        toggleButton.textContent = "Switch to Light Mode";
    } else {
        toggleButton.textContent = "Switch to Dark Mode";
    }
});

document.getElementById("demoForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const skill = document.getElementById("skill").value;
    const name = document.getElementById("name").value;

    if (skill === "HTML") {
        changeTextColor("red-text");
        changeBackgroundColor("html-background");
        displayMessage(`Hello, ${name}! You've selected HTML.`);
    } else if (skill === "CSS") {
        changeTextColor("blue-text");
        changeBackgroundColor("css-background");
        displayMessage(`Hello, ${name}! You've selected CSS.`);
    } else if (skill === "JavaScript") {
        changeTextColor("yellow-text");
        changeBackgroundColor("javascript-background");
        displayMessage(`Hello, ${name}! You've selected JavaScript.`);
    }
});

function changeTextColor(newColorClass) {
    const blueTextElements = document.querySelectorAll(".blue-text");

    blueTextElements.forEach(element => {
        element.classList.remove("red-text", "yellow-text");
        element.classList.add(newColorClass);
    });
}

function changeBackgroundColor(skillClass) {
    const header = document.getElementById("main-header");
    const footer = document.getElementById("main-footer");

    header.classList.remove("html-background", "css-background", "javascript-background");
    footer.classList.remove("html-background", "css-background", "javascript-background");

    header.classList.add(skillClass);
    footer.classList.add(skillClass);
}

function displayMessage(message) {
    const messageElement = document.getElementById("message");
    messageElement.textContent = message;
}
