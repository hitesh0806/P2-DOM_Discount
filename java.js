function calculate()
{
    let inp=document.querySelector('.i1').value;
    let x;
    let y;
    let z;
    let b;
    let c;
    let e;
    let f;
    let d;
    let a='';
    console.log(typeof inp);
    console.log(typeof x);
    console.log(typeof y);
    z=((10/100)*inp);
    b=((6/100)*inp);
    c=((4/100)*inp);
    e=((2/100)*inp);
    f=((25/100)*inp);
    d=z+b+e+c;
    if(inp>=5000)
    {
        x=inp-f+d;
        y=((25/100)*inp);
        a="Since you've purchased items worth more than 5000/-, you'll get a discount of 25%";
    }
    else
    {
        x=inp+d;
        y=0;
        a="Since you've purchased items worth less than 5000/-, you'll not get any discount";
    }
    document.querySelector('.h1').innerHTML="Total amount: "+inp;
    document.querySelector('.h2').innerHTML="Discount(25%): "+y;
    document.querySelector('.h3').innerHTML="Tax(10%): "+z;
    document.querySelector('.h4').innerHTML="GST(6%): "+b;
    document.querySelector('.h5').innerHTML="SGST(4%): "+c;
    document.querySelector('.h6').innerHTML="CGST(2%): "+e;
    document.querySelector('.h7').innerHTML="Final amount: "+x;
    document.querySelector('.h8').innerHTML=a;

}
