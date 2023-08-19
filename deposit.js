// step-1: add event listener to the deposit button
document.getElementById("btn-deposit").addEventListener("click", function () {
  // step-2: get the deposit amount from the deposit input field
  // For input field use .value to the the value inside the input field
  const depositField = document.getElementById("deposit-field");
  const newDepositAmountString = depositField.value;
  const newDepositAmount = parseFloat(newDepositAmountString);
  if (isNaN(newDepositAmount)) {
    var audio = document.getElementById("wrong");
    audio.play();
    alert("Please provide a valid number");
    depositField.value = "";
    return;
  }
  // step-3: get the current deposit total

  const depositTotalElement = document.getElementById("deposit-total");
  const previousDepositTotalString = depositTotalElement.innerText;
  const previousDepositTotal = parseFloat(previousDepositTotalString);

  // step-4: add numbers to set the total deposit
  const currentDepositTotal = previousDepositTotal + newDepositAmount;
  // set the deposit total
  depositTotalElement.innerText = currentDepositTotal;

  // step-5: get ballance current total
  const balanceTotalElement = document.getElementById("balance-total");
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);

  // step-6: calculate current total balance
  const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
  // set the balance total
  balanceTotalElement.innerText = currentBalanceTotal;

  var audio = document.getElementById("audio");
  audio.play();

  // step-7: clear the deposit field
  document.getElementById("deposit-field").value = "";
});

// ----------------------------

// step-1: add event listener to the deposit button
document
  .getElementById("deposit-field")
  .addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      const depositField = document.getElementById("deposit-field");
      const newDepositAmountString = depositField.value;
      const newDepositAmount = parseFloat(newDepositAmountString);
      if (isNaN(newDepositAmount)) {
        var audio = document.getElementById("wrong");
        audio.play();
        alert("Please provide a valid number");
        depositField.value = "";
        return;
      }
      const depositTotalElement = document.getElementById("deposit-total");
      const previousDepositTotalString = depositTotalElement.innerText;
      const previousDepositTotal = parseFloat(previousDepositTotalString);

      const currentDepositTotal = previousDepositTotal + newDepositAmount;

      depositTotalElement.innerText = currentDepositTotal;

      const balanceTotalElement = document.getElementById("balance-total");
      const previousBalanceTotalString = balanceTotalElement.innerText;
      const previousBalanceTotal = parseFloat(previousBalanceTotalString);

      const currentBalanceTotal = previousBalanceTotal + newDepositAmount;

      balanceTotalElement.innerText = currentBalanceTotal;

      var audio = document.getElementById("audio");
      audio.play();

      // step-7: clear the deposit field
      document.getElementById("deposit-field").value = "";
    }
  });
