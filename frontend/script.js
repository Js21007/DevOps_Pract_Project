function generateResume() {

  document.getElementById("pname").innerText =
    document.getElementById("name").value;

  document.getElementById("pemail").innerText =
    document.getElementById("email").value;

  document.getElementById("pphone").innerText =
    document.getElementById("phone").value;

  document.getElementById("pskills").innerText =
    document.getElementById("skills").value;

  document.getElementById("pedu").innerText =
    document.getElementById("education").value;

  document.getElementById("pexp").innerText =
    document.getElementById("experience").value;

  let template = document.getElementById("template").value;

  let color = "#007bff";
  let bg = "#ffffff";
  let border = "#007bff";

  if(template === "black"){
    color = "#000000";
    bg = "#f2f2f2";
    border = "#000000";
  }

  if(template === "green"){
    color = "#28a745";
    bg = "#f0fff4";
    border = "#28a745";
  }

  document.getElementById("pname").style.color = color;

  let headings = document.querySelectorAll(".resume-box h3");

  headings.forEach(function(item){
    item.style.color = color;
  });

  let box = document.querySelector(".resume-box");

  box.style.border = "3px solid " + border;
  box.style.background = bg;
  box.style.padding = "20px";
  box.style.borderRadius = "10px";
}

function downloadPDF() {

  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  let y = 20;
  let template = document.getElementById("template").value;

  let color = [0, 123, 255]; // blue

  if(template === "black"){
    color = [0, 0, 0];
  }

  if(template === "green"){
    color = [0, 150, 80];
  }

  // Name
  doc.setTextColor(...color);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(22);
  doc.text(document.getElementById("pname").innerText, 20, y);

  y += 8;

  doc.setDrawColor(...color);
  doc.line(20, y, 190, y);

  y += 10;

  doc.setTextColor(0,0,0);
  doc.setFontSize(12);
  doc.setFont("helvetica", "normal");

  doc.text("Email: " + document.getElementById("pemail").innerText, 20, y);
  y += 8;

  doc.text("Phone: " + document.getElementById("pphone").innerText, 20, y);
  y += 12;

  doc.setTextColor(...color);
  doc.setFont("helvetica", "bold");
  doc.text("Skills", 20, y);
  y += 8;

  doc.setTextColor(0,0,0);
  doc.setFont("helvetica", "normal");
  doc.text(document.getElementById("pskills").innerText, 20, y);
  y += 12;

  doc.setTextColor(...color);
  doc.setFont("helvetica", "bold");
  doc.text("Education", 20, y);
  y += 8;

  doc.setTextColor(0,0,0);
  let edu = doc.splitTextToSize(document.getElementById("pedu").innerText,170);
  doc.text(edu,20,y);

  y += edu.length * 8 + 8;

  doc.setTextColor(...color);
  doc.setFont("helvetica", "bold");
  doc.text("Experience",20,y);
  y += 8;

  doc.setTextColor(0,0,0);
  let exp = doc.splitTextToSize(document.getElementById("pexp").innerText,170);
  doc.text(exp,20,y);

  doc.save("resume.pdf");
}