
const toggleButton = document.querySelector(".ham-btn");
const elementToToggle = document.querySelector(".side-nav");


// toggleButton.addEventListener("click", function() {
  
//   if (elementToToggle.style.width === "none") {
//     elementToToggle.style.display = "block";
//   } else {
//     elementToToggle.style.display = "none";
//   }
// });

toggleButton.addEventListener("click", function() {
  
    if (elementToToggle.classList.contains('active')) {
      elementToToggle.classList.remove('active');
    } else {
      elementToToggle.classList.add('active');
    }
  });
