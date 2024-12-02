document
  .getElementById("cash-out-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const cashOut = shearedFunction("add-cash-input");
    const cashPin = shearedFunction("cash-out-input");

    console.log(cashOut, cashPin);

    //

    //
    if (cashPin === 123) {
      console.log("cash out succesfully");
      const previousBalance = inputMainBalance("main-balance");
      console.log(previousBalance);

      const currentBalane = previousBalance - cashOut;
      console.log(currentBalane);

      document.getElementById("main-balance").innerText = currentBalane;

      //   cash out transction

      const div = document.createElement("div");
      div.classList.add("bg-yellow-300");
      div.innerHTML = `
    <h4 class="text-2xl font-semibold">Cash Out</h4>
    <p>Cash Out ${previousBalance} New Balance : ${currentBalane}</p>
    `;
      document.getElementById("transiction-form").appendChild(div);
    } else {
      alert("please provide right pin");
    }
  });
