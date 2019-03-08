import './styles.css';
import * as utilCpy from './utils';



const buttonPicked = document.querySelectorAll('button');

buttonPicked.forEach(s => s.addEventListener('click', calculateFinalBill)

)



function calculateFinalBill() {
    const buttPicked = this as HTMLButtonElement;
    const tipPicked = parseFloat(buttPicked.innerText);
    const inputBill = parseFloat((document.getElementById("billAmt") as HTMLInputElement).value);
    const calcTip = utilCpy.calculateTip(inputBill, tipPicked);
    const calFinAmt = utilCpy.calculateTotal(inputBill, calcTip);

    document.getElementById('l1').innerText = 'Bill Amount: ' + inputBill;
    document.getElementById('l2').innerText = 'Tip Percentage: ' + tipPicked;
    document.getElementById('l3').innerText = 'Amount of Tip: ' + calcTip;
    document.getElementById('l4').innerText = 'Total to be Paid: ' + calFinAmt;



}