document.querySelector(".bmi-calc").addEventListener('click',()=>{
  var weight = parseFloat(document.getElementById("weightInput").value);
  var height = parseFloat(document.getElementById("heightInput").value);

  if (isNaN(weight) || isNaN(height)) {
    alert("Please enter valid weight and height values.");
    return;
  }

  var bmi = weight / ((height / 100) * (height / 100));
  var bmiCategory = "";

  if (bmi < 18.5) {
    bmiCategory = "Underweight";
  } else if (bmi >= 18.5 && bmi < 24.9) {
    bmiCategory = "Healthy";
  } else {
    bmiCategory = "Overweight";
  }

  document.getElementById("bmiResult").textContent = bmi.toFixed(2);

  function category() {}
  document.getElementById("weightResult").textContent = bmiCategory;
});


document.querySelector(".hamburger-menu").addEventListener('click', ()=>{
  document.querySelector(".hamburger-menu-con").classList.add("change");
  
});


document.querySelector(".close i").addEventListener('click', ()=>{
  document.querySelector(".hamburger-menu-con").classList.remove("change");
});


const menu = document.querySelectorAll(".hamburger-menu-con a");

menu.forEach(function(link) {
  link.addEventListener('click', function() {
    document.querySelector(".hamburger-menu-con").classList.remove("change");
  });
});


// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//   anchor.addEventListener('click', function (e) {
//       e.preventDefault();

//       const targetId = this.getAttribute('href').substring(1);
//       const targetElement = document.getElementById(targetId);

//       if (targetElement) {
//           window.scrollTo({
//               top: targetElement.offsetTop,
//               behavior: 'smooth'
//           });
//       }
//   });
// });