function calculate()
{
    let inp=document.querySelector('.i1').value;
    let x;
    let y;
    let a='';
    console.log(typeof inp);
    console.log(typeof x);
    console.log(typeof y);
    if(inp>=5000)
    {
        x=inp-((25/100)*inp);
        y=inp-x;
        a="Since you've purchased items worth more than 5000/-, you'll get a discount of 25%";
    }
    else
    {
        x=inp;
        y=0;
        a="Since you've purchased items worth less than 5000/-, you'll not get any discount";
    }
    document.querySelector('.h1').innerHTML="Total amount: "+inp;
    document.querySelector('.h2').innerHTML="Discount amount: "+y;
    document.querySelector('.h3').innerHTML="Final amount: "+x;
    document.querySelector('.h4').innerHTML=a;

}
