// app.js
async function calculateFibonacci(n) {
    const url = `/fibonacci?n=${n}`;
    const response = await fetch(url);
    const result = await response.text();
    document.getElementById("result").innerHTML = result;
}

document.getElementById("calculateButton").addEventListener("click", () => {
    const n = document.getElementById("number").value;
    calculateFibonacci(n);
});
