// step-1: add event listener to the deposit button
document.getElementById("btn-deposit").addEventListener("click", function () {
  // step-2: get the deposit amount from the deposit input field
  // For input field use .value to the the value inside the input field
  const depositField = document.getElementById("deposit-field");
  const newDepositAmountString = depositField.value;
  const newDepositAmount = parseFloat(newDepositAmountString);
  //   const type = typeof newDepositAmount;
  //   console.log(type);
  //   if (typeof newDepositAmount === "number") {
  // step-3: get the current deposit total
  // for non-input(element other than input, textarea) use innerText to get the text
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
  //   } else {
  //     alert("please deposit a valid amount");
  //   }
});

// ----------------------------

// step-1: add event listener to the deposit button
document
  .getElementById("deposit-field")
  .addEventListener("keypress", function (event) {
    // step-2: get the deposit amount from the deposit input field
    // For input field use .value to the the value inside the input field
    if (event.key === "Enter") {
      const depositField = document.getElementById("deposit-field");
      const newDepositAmountString = depositField.value;
      const newDepositAmount = parseFloat(newDepositAmountString);
      //   const type = typeof newDepositAmount;
      //   console.log(type);
      //   if (typeof newDepositAmount === "number") {
      // step-3: get the current deposit total
      // for non-input(element other than input, textarea) use innerText to get the text
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
    }
    //   } else {
    //     alert("please deposit a valid amount");
    //   }
  });
