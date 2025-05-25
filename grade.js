
function result(){
    var se1=document.getElementById("se1")
var se2=document.getElementById("se2")
var inp=document.getElementById("in")
var ends=document.getElementById("es")
var rel=document.getElementById("result")

var s1=Number(se1.value)
var s2=Number(se2.value)
var s3=Number(inp.value)
var s4=Number(ends.value)

var se=((s1+s2)*35)/200
var s3r=(s3*15)/100
var s4r=(s4*50)/100
var res=se+s3r+s4r

    if(res>=90)
        rel.textContent="S";
    else if(res>=80)
        rel.textContent="A";
    else if(res>=70)
        rel.textContent="B";
    else if(res>=60 )
        rel.textContent="C";
    else if(res>=50)
        rel.textContent="D";
    else if(res>=40)
        rel.textContent="E";
    else
        rel.textContent="FAIL";
}


function result2(){
    var se1=document.getElementById("se1")
var se2=document.getElementById("se2")
var inp=document.getElementById("ms")
var lab=document.getElementById("lb")
var ends=document.getElementById("pm")
var ens=document.getElementById("es")
var rel=document.getElementById("result")

var s1=Number(se1.value)
var s2=Number(se2.value)
var s3=Number(inp.value)
var s4=Number(ends.value)
var s5=Number(ens.value)
var s6=Number(lab.value)
var se=((s1+s2)*35)/200
var s3r=(s3*10)/100
var s6r=(s6*5)/100
var s4r=(s4*15)/100
var s5r=(s5*35)/100
var res=se+s3r+s4r+s5r+s6r

    if(res>=90)
        rel.textContent="S";
    else if(res>=80)
        rel.textContent="A";
    else if(res>=70)
        rel.textContent="B";
    else if(res>=60 )
        rel.textContent="C";
    else if(res>=50)
        rel.textContent="D";
    else if(res>=40)
        rel.textContent="E";
    else
        rel.textContent="FAIL";
}


function result3(){
     var se1=document.getElementById("m1")
var se2=document.getElementById("lb")
var inp=document.getElementById("pm")
var pe=document.getElementById("ep")
var rel=document.getElementById("result")

var s1=Number(se1.value)
var s2=Number(se2.value)
var s3=Number(inp.value)
var s4=Number(pe.value)

var se=(s1*20)/100
var s3r=(s2*25)/100
var s4r=(s3*30)/100
var s5r=(s4*30)/100
var res=se+s3r+s4r+s5r

    if(res>=90)
        rel.textContent="S";
    else if(res>=80)
        rel.textContent="A";
    else if(res>=70)
        rel.textContent="B";
    else if(res>=60 )
        rel.textContent="C";
    else if(res>=50)
        rel.textContent="D";
    else if(res>=40)
        rel.textContent="E";
    else
        rel.textContent="FAIL";
}


function result4(){
     var se1=document.getElementById("se1")
var se2=document.getElementById("se2")
var inp=document.getElementById("in")
var pe=document.getElementById("lb")
var es=document.getElementById("es")
var rel=document.getElementById("result")

var s1=Number(se1.value)
var s2=Number(se2.value)
var s3=Number(inp.value)
var s4=Number(pe.value)
var s5=Number(es.value)

var se=(s1*20)/100
var s3r=(s2*10)/100
var s4r=(s3*20)/100
var s5r=(s4*20)/100
var s6r=(s5*30)/100
var res=se+s3r+s4r+s5r+s6r

    if(res>=90)
        rel.textContent="S";
    else if(res>=80)
        rel.textContent="A";
    else if(res>=70)
        rel.textContent="B";
    else if(res>=60 )
        rel.textContent="C";
    else if(res>=50)
        rel.textContent="D";
    else if(res>=40)
        rel.textContent="E";
    else
        rel.textContent="FAIL";
}

function save() {
    const noc = document.getElementById("noc").value;
    const nocc = Number(noc);  // or use parseInt(noc)
    
    if (isNaN(nocc) || nocc <= 0) {
        alert("Please enter a valid number of courses.");
        return;
    }

    localStorage.setItem("nocc", nocc);
    window.location.href = "sgpa2.html";
}

