document
  .getElementById("add-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    //
    const addMoney = shearedFunction("add-money-input");
    const pinNumber = shearedFunction("pin-number-input");

    // set the condition

    if (pinNumber === 123) {
      console.log("enter amount");
      const totalBalance = inputMainBalance("main-balance");
      // add total amount in the display
      const totalAmoutDisplay = totalBalance + addMoney;
      document.getElementById("main-balance").innerText = totalAmoutDisplay;
      console.log(totalAmoutDisplay);

      //   transiction
      const p = document.createElement("p");
      p.innerText = `Add Money :${addMoney} Tk.Balance ${totalAmoutDisplay}`;
      console.log(p);
      document.getElementById("transiction-form").appendChild(p);
      //   add the amount
      //   console.log(totalBalance, addMoney);
    } else {
      alert("please provide right pin");
    }
  });
