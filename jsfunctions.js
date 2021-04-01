


function toggleMenu(){
    var nav = document.getElementById('mobilenav');
    nav.classList.toggle('open');
  }
  




var a=1;

function show_hide1()
{
  if (a==1)
  {
    document.getElementById("image1").style.display="block";
    document.getElementById("button4").style.marginTop= "200px";
    return a=0;
  }
  else{
    document.getElementById("image1").style.display="none";
    document.getElementById("button4").style.marginTop= "0px";
    return a=1;
  }
}
function show_hide2()
{
  if (a==1)
  {
    document.getElementById("image2").style.display="block";
    document.getElementById("button5").style.marginTop= "200px";
    return a=0;
  }
  else{
    document.getElementById("image2").style.display="none";
    document.getElementById("button5").style.marginTop= "0px";
    return a=1;
  }
}
function show_hide3()
{
  if (a==1)
  {
    document.getElementById("image3").style.display="block";
    document.getElementById("button6").style.marginTop= "200px";
    return a=0;
  }
  else{
    document.getElementById("image3").style.display="none";
    document.getElementById("button6").style.marginTop= "0px";
    return a=1;
  }
}
function show_hide4()
{
  if (a==1)
  {
    document.getElementById("image4").style.display="block";
    return a=0;
  }
  else{
    document.getElementById("image4").style.display="none";
    return a=1;
  }
}
function show_hide5()
{
  if (a==1)
  {
    document.getElementById("image5").style.display="block";
    return a=0;
  }
  else{
    document.getElementById("image5").style.display="none";
    return a=1;
  }
}
function show_hide6()
{
  if (a==1)
  {
    document.getElementById("image6").style.display="block";
    return a=0;
  }
  else{
    document.getElementById("image6").style.display="none";
    return a=1;
  }
}





function filter(){
  var FilterValue, input, ul, li, i;
  
  input = document.getElementById('search');
  FilterValue = input.value.toUpperCase();
  ul = document.getElementById('menu');
  li = ul.getElementsByTagName('li');

  for(i=0; i<li.length; i++){
    var a = li[i].getElementsByTagName('a')[0];
    if(a.innerHTML.toUpperCase().indexOf(FilterValue) > -1){
      li[i].style.display = "block";
    }else{
      li[i].style.display = "none";
    }
  }
}
