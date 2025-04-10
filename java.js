function calculate()
{
    let inp=document.querySelector('.i1').value;
    let x;
    let y;
    let z;
    let a='';
    console.log(typeof inp);
    console.log(typeof x);
    console.log(typeof y);
    z=((10/1000)*inp);
    if(inp>=5000)
    {
        x=inp-((25/100)*inp)+z;
        y=inp-(inp-((25/100)*inp));
        a="Since you've purchased items worth more than 5000/-, you'll get a discount of 25%";
    }
    else
    {
        x=inp+z;
        y=0;
        a="Since you've purchased items worth less than 5000/-, you'll not get any discount";
    }
    document.querySelector('.h1').innerHTML="Total amount: "+inp;
    document.querySelector('.h2').innerHTML="Discount amount: "+y;
    document.querySelector('.h3').innerHTML="Tax(10%): "+z;
    document.querySelector('.h4').innerHTML="Final amount: "+x;
    document.querySelector('.h5').innerHTML=a;

}
