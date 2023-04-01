function add(){
    
    let x;
    x= document.getElementById("val1").value;
    let y;
    y=document.getElementById("val2").value;

    let z;
    z=parseFloat(x)+parseFloat(y);
    z=z.toFixed(2);
    alert(z);
}

function sub(){
    
    let x;
    x= document.getElementById("val1").value;
    let y;
    y=document.getElementById("val2").value;

    let z;
    z=parseFloat(x)-parseFloat(y);
    z=z.toFixed(2);
    alert(z);
}

function mul(){
    
    let x;
    x= document.getElementById("val1").value;
    let y;
    y=document.getElementById("val2").value;

    let z;
    z=parseFloat(x)*parseFloat(y);
    z=z.toFixed(2);
    alert(z);
}

function div()
{
    let x;
    x= document.getElementById("val1").value;
    let y;
    y=document.getElementById("val2").value;

    let z;
    z=parseFloat(x)/parseFloat(y);
    z=z.toFixed(2);
    alert(z);
}