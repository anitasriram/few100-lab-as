export function calculateTip(billAmt: number, tipPct: number): number {

    const tipAmt = billAmt * (tipPct / 100);

    return tipAmt;
}

export function calculateTotal(billAmt: number, tip: number): number {

    const totalAmt = billAmt + tip;

    return totalAmt;
}
