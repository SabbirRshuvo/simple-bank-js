function shearedFunction(id) {
  const inputValue = document.getElementById(id).value;
  const addAmount = Number(inputValue);
  return addAmount;
}

function inputMainBalance(id) {
  const inputBalance = document.getElementById(id).innerText;
  const inputAmount = Number(inputBalance);
  return inputAmount;
}

// show section

function showSection(id) {
  document.getElementById("add-money-form").classList.add("hidden");
  document.getElementById("cash-out-form").classList.add("hidden");
  document.getElementById("transiction-form").classList.add("hidden");

  //
  document.getElementById(id).classList.remove("hidden");
}
