function addMeal() {
    var mealType = document.getElementById("mealType").value;
    var foodItem = document.getElementById("foodItem").value;
    var calories = document.getElementById("calories").value;

    var mealList = document.getElementById("mealList");
    var listItem = document.createElement("li");
    listItem.textContent = `${mealType} - ${foodItem} (${calories} calories)`;
    mealList.appendChild(listItem);

    // You can add further logic here, such as storing the data in a database or localStorage.
}

function calculateBMI() {
    var feet = document.getElementById("feet").value;
    var inches = document.getElementById("inches").value;
    var weight = document.getElementById("weight").value;

    if (feet && inches && weight) {
        var heightInMeters = ((feet * 12) + parseInt(inches)) * 0.0254; // Convert height to meters
        var bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);
        var bmiResult = document.getElementById("bmiResult");
        bmiResult.textContent = `Your BMI is: ${bmi} - ${getBMICategory(bmi)}`;

        // You can add further logic here, such as providing BMI categories (underweight, normal weight, overweight, etc.).
    } else {
        alert("Please enter both height (feet and inches) and weight to calculate BMI.");
    }
}

function getBMICategory(bmi) {
    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
        return "Normal Weight";
    } else if (bmi >= 25 && bmi < 30) {
        return "Overweight";
    } else {
        return "Obese";
    }
}
