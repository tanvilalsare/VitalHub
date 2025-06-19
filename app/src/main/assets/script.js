function calculateBMI() {
  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value);
  const heightUnit = document.getElementById("heightUnit").value; 
  const resultBox = document.getElementById("result");

  if (weight > 0 && height > 0) {
   
    const heightInMeters = heightUnit === "cm" ? height / 100 : height;
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    let status;

    if (bmi < 18.5) {
      status = "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
      status = "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
      status = "Overweight";
    } else {
      status = "Obese";
    }

    resultBox.innerHTML = `Your BMI is <span style="color: #00796b;">${bmi}</span> (${status})`;
    resultBox.classList.add("visible");
  } else {
    resultBox.innerHTML = "<span style='color: red;'>Please enter valid weight and height values.</span>";
    resultBox.classList.add("visible");
  }
}

document.getElementById("darkModeToggle").addEventListener("change", () => {
  document.body.classList.toggle("dark-mode");
  document.querySelector(".container").classList.toggle("dark-mode");
  document.querySelectorAll("input").forEach(input => input.classList.toggle("dark-mode"));
  document.querySelector("button").classList.toggle("dark-mode");
});

  