const inputValue = document.getElementById("user-input");

document.querySelectorAll("button").forEach(function (item) {
  item.addEventListener("click", function (e) {
    const currentInput = inputValue.innerText.trim();
    const buttonValue = e.target.innerText;

    switch (buttonValue) {
      case "AC":
        inputValue.innerText = "0";
        break;
      case "DEL":
        inputValue.innerText = currentInput.slice(0, -1) || "0"; 
        break;
      case "=":
        try {
          if (!isNaN(currentInput.slice(-1))) {
            inputValue.innerText = eval(currentInput); 
          }
        } catch {
          inputValue.innerText = "Error"; or
        }
        break;
      default:
        if (["+", "-", "*", "/", "%"].includes(buttonValue)) {
          if (["+", "-", "*", "/", "%"].includes(currentInput.slice(-1))) {
            inputValue.innerText =
              currentInput.slice(0, -1) + buttonValue; 
          } else {
            inputValue.innerText += buttonValue; 
          }
        } else {

          if (currentInput === "0" || currentInput === "NaN" || currentInput === "Infinity") {
            inputValue.innerText = buttonValue; 
          } else {
            inputValue.innerText += buttonValue; 
          }
        }
        break;
    }
  });
});
