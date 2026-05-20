  const Bill=document.getElementById("BILL");
        const Tip=document.getElementById("Tip");
        const Total=document.getElementById("total");
        const result=document.getElementById("btn")
        const Numberofpeople=document.getElementById("Number-of-people");
        const reset=document.getElementById("btn-1");
        const color=document.getElementById("color-button");
        const currency=document.getElementById("currency");
        function calculate(){
          let currency1=currency.value;
         let bill=Bill.value;
         let tip=Tip.value;
        let number=Numberofpeople.value;
                if (bill=== "" || tip === "" || number=== "") {
        Total.textContent = "Please fill all fields";
        return;
    }
         let billvalue=Number(bill);
         let tipvalue=Number(tip);
         let numbervalue=Number(number);
         if(billvalue<0 || tipvalue<0){
            Total.textContent="Values cannot be negative"
            return;
         }
             if(numbervalue<=0){
             Total.textContent = "Enter valid number of people";
        return
         }
         let total=billvalue+(billvalue*(tipvalue/100));
         let split=total/numbervalue;
          Total.textContent=`Total:${ total.toFixed(2)}`;
          const Billcard=document.getElementById("bill-card");
          const Tipcard=document.getElementById("tip-card");
          const Totalcard=document.getElementById("total-card");
          const peoplecard=document.getElementById("people-card");
          if(currency1==="$" ||currency1==="€" ||currency1==="£" || currency1==="¥"|| currency1==="₹" ){
          Billcard.textContent=`Bill:${currency1}${billvalue.toFixed(2)}`;
          Tipcard.textContent=`Tip:${currency1}${tipvalue.toFixed(2)}`;
          Totalcard.textContent=`Total:${currency1}${total.toFixed(2)}`;
          peoplecard.textContent=`People:${number}`;
          }
          else{
Billcard.textContent=`Bill:${billvalue.toFixed(2) } ${currency1}`;
          Tipcard.textContent=`Tip:${tipvalue.toFixed(2)}${currency1}`;
          Totalcard.textContent=`Total:${total.toFixed(2)} ${currency1}`;
          peoplecard.textContent=`People:${number}`;
          }
           if(numbervalue===1 & currency1==="ETB"){
            Total.textContent=`You Pay:${ total.toFixed(2)} ${currency1}`;
          }
          else if (numbervalue=!1 && currency1==="ETB"){
            Total.textContent=`Each of you pays :${ split.toFixed(2)} ${currency1}`;
          }
          else{
            Total.textContent=`Each of you pays :${currency1} ${ split.toFixed(2)}`
          }
        }
        result.addEventListener("click",calculate
        );
        reset.addEventListener("click",()=>{
          Bill.value="";
          Tip.value="";
          Numberofpeople.value="";
          Total.textContent=`00.00`;
        });
    let mode=document.getElementById("mode");
   mode.addEventListener("click", () => {
  const text=document.getElementById("text");
  const section=document.getElementById("section");
  const description=document.getElementById("discription");
    if (document.body.style.backgroundColor === "black") {
        document.body.style.backgroundColor = "rgba(254, 238, 218, 0.649)";
        mode.textContent = "🌙";
       text.textContent="Light Mode"
       text.style.color="Black";
       section.style.boxShadow="0 0 25px white"
       description.style.backgroundColor="antiquewhite"
       section.style.backgroundColor="white";
       section.style.color="black";
    } else {

        document.body.style.backgroundColor = "black";
        mode.textContent = "☀️";
        text.style.color="white";
        text.textContent="Dark Mode"
        section.style.backgroundColor="rgba(0, 0, 0, 0.274)";
        section.style.color="white";
        section.style.boxShadow="0 0 25px white"
        description.style.backgroundColor="silver"
    }
});