function toggleParagraph(paragraphId, buttonId) {
    var paragraph = document.getElementById(paragraphId);
    var button = document.getElementById(buttonId);
  console.log(paragraph)
  console.log(button)
    paragraph.classList.toggle("collapsed");
  
    if (paragraph.classList.contains("collapsed")) {
      button.textContent = "Read More";
      paragraph.style.display = "none";
    } else {
      button.textContent = "Read Less ";
      paragraph.style.display = "block";
    }
  }



  