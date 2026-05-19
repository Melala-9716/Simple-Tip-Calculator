  const Bill=document.getElementById("BILL");
        const Tip=document.getElementById("Tip");
        const Total=document.getElementById("total");
        const result=document.getElementById("btn")

        function calculate(){
         let bill=Number(Bill.value);
         let tip=Number (Tip.value);
         let total=bill+(bill*(tip/100));
        
          Total.textContent=`Total:${ total.toFixed(2)}`;
        }
        result.addEventListener("click",calculate
        );