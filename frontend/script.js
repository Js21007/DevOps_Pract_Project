// script.js

function generateResume(){

document.getElementById("pname").innerText =
document.getElementById("name").value || "Your Name";

document.getElementById("ptitle").innerText =
document.getElementById("title").value || "Professional Title";

document.getElementById("pcontact").innerText =
document.getElementById("email").value + " | " +
document.getElementById("phone").value;

document.getElementById("plinks").innerText =
document.getElementById("linkedin").value + " | " +
document.getElementById("github").value;

document.getElementById("psummary").innerText =
document.getElementById("summary").value;

document.getElementById("pskills").innerText =
document.getElementById("skills").value;

document.getElementById("peducation").innerText =
document.getElementById("education").value;

document.getElementById("pexperience").innerText =
document.getElementById("experience").value;

document.getElementById("pprojects").innerText =
document.getElementById("projects").value;

}


function downloadPDF(){

generateResume();

const { jsPDF } = window.jspdf;
const doc = new jsPDF();

doc.html(document.getElementById("resume"),{
    callback:function(doc){
        doc.save("Resume.pdf");
    },
    x:10,
    y:10,
    width:190,
    windowWidth:900
});

}