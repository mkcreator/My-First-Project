function BMI() {
    let height = parseFloat(document.getElementById("height").value);
    let weight = parseFloat(document.getElementById("weight").value);
    let result = parseFloat(document.getElementById("result"));
    let bmi = (weight / ((height * height)/ 10000)).toFixed(2);

    result.innerHTML = `Your BMI is : ${bmi}`; 
    


}
BMI()