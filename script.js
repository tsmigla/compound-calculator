const principalBox = document.querySelector("#principal");
const periodBox = document.querySelector("#period");
const yearBox = document.querySelector("#years");
const aprSlider = document.querySelector("#apr");
const aprText = document.querySelector("#aprText");
const accumulatedOutput = document.querySelector("#accumulated");
const amountOutput = document.querySelector("#amount");

aprSlider.addEventListener("input", () => {
  aprText.textContent = aprSlider.value;
});

principalBox.addEventListener("input", calculate);
periodBox.addEventListener("input", calculate);
yearBox.addEventListener("input", calculate);
aprSlider.addEventListener("input", calculate);
aprText.addEventListener("input", calculate);

function calculate() {
  const principal = Number(principalBox.value);
  const period = Number(periodBox.value);
  const arp = Number(aprSlider.value) / 100;
  const years = Number(yearBox.value);

  const amount = principal * (1 + arp / period) ** (period * years);
  amountOutput.textContent = amount.toFixed(2);

  const accumulated = amount.toFixed(2) - principal;
  accumulatedOutput.textContent = accumulated.toFixed(2);
}
