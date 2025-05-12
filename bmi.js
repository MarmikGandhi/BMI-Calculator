window.onload = () => {
    let button = document.querySelector("#btn");
    button.addEventListener("click", calculateBMI);
};

function calculateBMI() {
    let height = parseInt(document.querySelector("#height").value);
    let weight = parseInt(document.querySelector("#weight").value);
    let result = document.querySelector("#result");

    result.className = "fw-bold fs-5 fade"; // Reset classes

    if (height === "" || isNaN(height)) {
        result.textContent = "Provide a valid Height!";
        result.classList.add("text-danger", "show");
    } else if (weight === "" || isNaN(weight)) {
        result.textContent = "Provide a valid Weight!";
        result.classList.add("text-danger", "show");
    } else {
        let bmi = (weight / ((height * height) / 10000)).toFixed(2);

        if (bmi < 18.6) {
            result.innerHTML = `Under Weight : <span class="text-warning">${bmi}</span>`;
        } else if (bmi >= 18.6 && bmi < 24.9) {
            result.innerHTML = `Normal : <span class="text-success">${bmi}</span>`;
        } else {
            result.innerHTML = `Over Weight : <span class="text-danger">${bmi}</span>`;
        }

        // Add animation class after a tiny delay to trigger fade
        setTimeout(() => result.classList.add("show"), 10);
    }
}
