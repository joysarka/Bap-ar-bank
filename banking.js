// another part 

document.getElementById('deposit-button').addEventListener('click', function(){
     
   const depositText = document.getElementById('deposit-text');

     const newDepositAmount = depositText.value;
     const newDepositAmountTotal = parseFloat(newDepositAmount);
     
     const depositMoneyArey = document.getElementById('deposit-money-arey');

      const previusDepositAmount = depositMoneyArey.innerText;
      const newDepositTotal = parseFloat(previusDepositAmount)+ newDepositAmountTotal;  

      depositMoneyArey.innerText = newDepositTotal;
     
    // update account total balance 

    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previusBlanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previusBlanceTotal + newDepositAmountTotal ;
    
    balanceTotal.innerText = newBalanceTotal;



    //  clear input feild 
     depositText.value = '';
});


// handle withdraw even handalar 

document.getElementById('withdraw-button').addEventListener('click', function(){
   
  const whitdrawInput = document.getElementById('withdraw-input');
  
  const withdrawAmountText = whitdrawInput.value;
  const newWithdrawAmount = parseFloat(withdrawAmountText);
  console.log(newWithdrawAmount);

  // set withdraw total 
  const withdrawTotal = document.getElementById('withdraw-total');
  const previusWithdrawText = withdrawTotal.innerText; 
  const previusWithdrawTotal = parseFloat(previusWithdrawText);

  const newWithdrawTotal = previusWithdrawTotal + newWithdrawAmount;

  withdrawTotal.innerText = newWithdrawTotal;



//  update balance 
 const balanceTotal = document.getElementById('balance-total');
 const previusBlanceText = balanceTotal.innerText;
 const previusBlanceTotal = parseFloat(previusBlanceText);
 const newBalanceTotal = previusBlanceTotal - newWithdrawTotal ;

 balanceTotal.innerText = newBalanceTotal;



  // clear input space 
  whitdrawInput.value = '';

});


















  //  const depositText = document.getElementById('deposit-text');
    //  const depositAmount = depositText.value;
     
    //  const depositMoneyArey = document.getElementById('deposit-money-arey');
    //  console.log(depositMoneyArey.innerText);

    //  depositMoneyArey.innerText = depositAmount;
    //  depositText.value = '';