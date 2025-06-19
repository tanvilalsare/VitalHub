function displayNutritionalChart() {
    const ageGroup = document.getElementById("age").value;
    const chartDiv = document.getElementById("nutritionalChart");
  
    const nutritionalData = {
      "children-2-3": {
        "Protein (g)": "16.7", "Fat (g)": "27", "Calories (kcal)": "1060", "Calcium (mg)": "600", "Iron (mg)": "9",
        "Water (L)": "1.5", "Fruits (servings)": "2", "Vegetables (servings)": "2"
      },
      "children-4-6": {
        "Protein (g)": "20.1", "Fat (g)": "35", "Calories (kcal)": "1250", "Calcium (mg)": "600", "Iron (mg)": "13",
        "Water (L)": "1.8", "Fruits (servings)": "2-3", "Vegetables (servings)": "2-3"
      },
      "children-7-9": {
        "Protein (g)": "29.5", "Fat (g)": "45", "Calories (kcal)": "1590", "Calcium (mg)": "800", "Iron (mg)": "16",
        "Water (L)": "2", "Fruits (servings)": "3", "Vegetables (servings)": "3"
      },
      "boys-10-12": {
        "Protein (g)": "39.5", "Fat (g)": "56", "Calories (kcal)": "2150", "Calcium (mg)": "800", "Iron (mg)": "18",
        "Water (L)": "2.5", "Fruits (servings)": "3", "Vegetables (servings)": "3"
      },
      "boys-13-15": {
        "Protein (g)": "54.3", "Fat (g)": "72", "Calories (kcal)": "2850", "Calcium (mg)": "1000", "Iron (mg)": "21",
        "Water (L)": "3", "Fruits (servings)": "3-4", "Vegetables (servings)": "3-4"
      },
      "boys-16-17": {
        "Protein (g)": "64.5", "Fat (g)": "91", "Calories (kcal)": "3250", "Calcium (mg)": "1200", "Iron (mg)": "22",
        "Water (L)": "3", "Fruits (servings)": "4", "Vegetables (servings)": "4"
      },
      "girls-9-13": {
        "Protein (g)": "46.5", "Fat (g)": "66", "Calories (kcal)": "1800", "Calcium (mg)": "800", "Iron (mg)": "15",
        "Water (L)": "2.5", "Fruits (servings)": "3", "Vegetables (servings)": "3"
      },
      "girls-14-18": {
        "Protein (g)": "56.8", "Fat (g)": "78", "Calories (kcal)": "2200", "Calcium (mg)": "1000", "Iron (mg)": "18",
        "Water (L)": "3", "Fruits (servings)": "3-4", "Vegetables (servings)": "3-4"
      },
      "adults": {
        "Protein (g)": "65", "Fat (g)": "80", "Calories (kcal)": "2300", "Calcium (mg)": "1200", "Iron (mg)": "18",
        "Water (L)": "3", "Fruits (servings)": "4", "Vegetables (servings)": "4"
      }
    };
  
    if (ageGroup) {
      const nutrition = nutritionalData[ageGroup];
  
      let tableContent = `
        <table>
          <thead>
            <tr>
              <th>Category</th>
              <th>Protein (g)</th>
              <th>Fat (g)</th>
              <th>Calories (kcal)</th>
              <th>Calcium (mg)</th>
              <th>Iron (mg)</th>
              <th>Water (L)</th>
              <th>Fruits (servings)</th>
              <th>Vegetables (servings)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>${ageGroup.replace(/-/g, ' ').toUpperCase()}</td>
              <td>${nutrition["Protein (g)"]}</td>
              <td>${nutrition["Fat (g)"]}</td>
              <td>${nutrition["Calories (kcal)"]}</td>
              <td>${nutrition["Calcium (mg)"]}</td>
              <td>${nutrition["Iron (mg)"]}</td>
              <td>${nutrition["Water (L)"]}</td>
              <td>${nutrition["Fruits (servings)"]}</td>
              <td>${nutrition["Vegetables (servings)"]}</td>
            </tr>
          </tbody>
        </table>
      `;
      chartDiv.innerHTML = tableContent;
    } else {
      chartDiv.innerHTML = ''; // Clear the chart if no selection is made
    }
  }
  