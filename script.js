function addMeal() {
    var mealType = document.getElementById("mealType").value;
    var foodItem = document.getElementById("foodItem").value;
    var calories = document.getElementById("calories").value;

    var mealList = document.getElementById("mealList");
    var listItem = document.createElement("li");
    listItem.textContent = `${mealType} - ${foodItem} (${calories} calories)`;

    // Add buttons for deleting and updating meals
    listItem.innerHTML += `<button onclick="editMeal(this)">Edit</button>
                           <button onclick="deleteMeal(this)">Delete</button>`;
    
    mealList.appendChild(listItem);

    // You can add further logic here, such as storing the data in a database or localStorage.
}

// New function to delete a meal
function deleteMeal(element) {
    var listItem = element.parentElement;
    var mealList = document.getElementById("mealList");
    mealList.removeChild(listItem);
}

// New function to update a meal
function editMeal(element) {
    var listItem = element.parentElement;
    var mealType = listItem.firstChild.textContent.split('-')[0].trim();
    var foodItem = listItem.firstChild.textContent.split('-')[1].split('(')[0].trim();
    var calories = listItem.firstChild.textContent.split('(')[1].split(' ')[0].trim();

    document.getElementById("mealType").value = mealType;
    document.getElementById("foodItem").value = foodItem;
    document.getElementById("calories").value = calories;

    // Delete the current meal after updating
    deleteMeal(element);
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
