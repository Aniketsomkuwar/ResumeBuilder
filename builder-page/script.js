const details = {
  basics: {
    firstname: null,
    lastname: null,

    email: null,
    phone: null,

    summary: null,
    location: {
      postalCode: null,
      city: null,
      state: null,
    },
  },
};
console.log(details.basics.lastname);

var visiblediv=0;
function showdiv()
{
  $(".more").hide();
  $(".more:eq("+ visiblediv +")").show();
}
showdiv()
function shownext()
{
  if(visiblediv==$(".more").length-1)
  {
    visiblediv=0;
  }
  else{
    visiblediv ++;
  }
  showdiv();
}
function showprev()
{
  if (visiblediv==0)
  {
    visiblediv=$(".more").length-1;
  }
  else{
    visiblediv--;
  }
  showdiv();
}