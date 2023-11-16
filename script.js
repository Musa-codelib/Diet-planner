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
