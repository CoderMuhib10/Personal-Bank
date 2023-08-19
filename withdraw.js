// step-1: add event listener to the deposit button
document.getElementById("btn-withdraw").addEventListener("click", function () {
  // step-2: get the deposit amount from the deposit input field
  // For input field use .value to the the value inside the input field
  const withdrawField = document.getElementById("withdraw-field");
  const newWithdrawAmountString = withdrawField.value;
  const newWithdrawAmount = parseFloat(newWithdrawAmountString);
  //   const type = typeof newWithdrawAmount;
  //   console.log(type);
  //   if (typeof newWithdrawAmount === "number") {
  // step-3: get the current deposit total
  // for non-input(element other than input, textarea) use innerText to get the text
  const withdrawTotalElement = document.getElementById("withdraw-total");
  const previousWithdrawTotalString = withdrawTotalElement.innerText;
  const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

  // step-4: add numbers to set the total deposit
  const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
  // set the deposit total
  withdrawTotalElement.innerText = currentWithdrawTotal;

  // step-5: get ballance current total
  const balanceTotalElement = document.getElementById("balance-total");
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);

  // step-6: calculate current total balance
  const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount;
  // set the balance total
  balanceTotalElement.innerText = currentBalanceTotal;

  var audio = document.getElementById("audio");
  audio.play();

  // step-7: clear the deposit field
  document.getElementById("withdraw-field").value = "";
  //   } else {
  //     alert("please deposit a valid amount");
  //   }
});

// ----------------------------

// step-1: add event listener to the deposit button
document
  .getElementById("withdraw-field")
  .addEventListener("keypress", function (event) {
    // step-2: get the deposit amount from the deposit input field
    // For input field use .value to the the value inside the input field
    if (event.key === "Enter") {
      const withdrawField = document.getElementById("withdraw-field");
      const newWithdrawAmountString = withdrawField.value;
      const newWithdrawAmount = parseFloat(newWithdrawAmountString);
      //   const type = typeof newWithdrawAmount;
      //   console.log(type);
      //   if (typeof newWithdrawAmount === "number") {
      // step-3: get the current deposit total
      // for non-input(element other than input, textarea) use innerText to get the text
      const withdrawTotalElement = document.getElementById("withdraw-total");
      const previousWithdrawTotalString = withdrawTotalElement.innerText;
      const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

      // step-4: add numbers to set the total deposit
      const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
      // set the deposit total
      withdrawTotalElement.innerText = currentWithdrawTotal;

      // step-5: get ballance current total
      const balanceTotalElement = document.getElementById("balance-total");
      const previousBalanceTotalString = balanceTotalElement.innerText;
      const previousBalanceTotal = parseFloat(previousBalanceTotalString);

      // step-6: calculate current total balance
      const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount;
      // set the balance total
      balanceTotalElement.innerText = currentBalanceTotal;

      var audio = document.getElementById("audio");
      audio.play();

      // step-7: clear the deposit field
      document.getElementById("withdraw-field").value = "";
    }
    //   } else {
    //     alert("please deposit a valid amount");
    //   }
  });
