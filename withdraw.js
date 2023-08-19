document.getElementById("btn-withdraw").addEventListener("click", function () {
  const withdrawField = document.getElementById("withdraw-field");
  const newWithdrawAmountString = withdrawField.value;
  const newWithdrawAmount = parseFloat(newWithdrawAmountString);
  if (isNaN(newWithdrawAmount)) {
    var audio = document.getElementById("wrong");
    audio.play();
    alert("Please provide a valid number");
    withdrawField.value = "";
    return;
  }

  const withdrawTotalElement = document.getElementById("withdraw-total");
  const previousWithdrawTotalString = withdrawTotalElement.innerText;
  const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

  const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;

  withdrawTotalElement.innerText = currentWithdrawTotal;

  const balanceTotalElement = document.getElementById("balance-total");
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);

  if (newWithdrawAmount > previousBalanceTotal) {
    var audio = document.getElementById("wrong");
    audio.play();
    document.getElementById("withdraw-field").value = "";
    alert("You don't have enough balance");
    return;
  }
  const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount;

  balanceTotalElement.innerText = currentBalanceTotal;

  var audio = document.getElementById("audio");
  audio.play();

  document.getElementById("withdraw-field").value = "";
});

// ----------------------------

document
  .getElementById("withdraw-field")
  .addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      const withdrawField = document.getElementById("withdraw-field");
      const newWithdrawAmountString = withdrawField.value;
      const newWithdrawAmount = parseFloat(newWithdrawAmountString);
      if (isNaN(newWithdrawAmount)) {
        var audio = document.getElementById("wrong");
        audio.play();
        alert("Please provide a valid number");
        withdrawField.value = "";
        return;
      }

      const withdrawTotalElement = document.getElementById("withdraw-total");
      const previousWithdrawTotalString = withdrawTotalElement.innerText;
      const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

      const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;

      withdrawTotalElement.innerText = currentWithdrawTotal;

      const balanceTotalElement = document.getElementById("balance-total");
      const previousBalanceTotalString = balanceTotalElement.innerText;
      const previousBalanceTotal = parseFloat(previousBalanceTotalString);

      if (newWithdrawAmount > previousBalanceTotal) {
        var audio = document.getElementById("wrong");
        audio.play();
        document.getElementById("withdraw-field").value = "";
        alert("You don't have enough balance");
        return;
      }

      const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount;

      balanceTotalElement.innerText = currentBalanceTotal;

      var audio = document.getElementById("audio");
      audio.play();

      document.getElementById("withdraw-field").value = "";
    }
  });
