const details = {
  basics: {
    firstname: null,
    lastname: null,
    email: null,
    phone: null,
    summary: null,
    postalCode: null,
    city: null,
    state: null,
  },
  previousExp: {
    jobtitle: null,
    employer: null,
    city: null,
    country: null,
    startDate: null,
    endDate: null,
  },
};

$(function () {
  $("#name").change(function (e) {
    details.basics.firstname = e.target.value;

    console.log(details);
  });
  $("#s-date").change(function (e) {
    details.previousExp.startDate = e.target.value;

    console.log(details);
  });

  // for next and previous section

  $("#nextButton").click(function () {
    shownext();
  });
  $("#previousButton").click(function () {
    showprev();
  });




  var visiblediv = 0;
  function showdiv() {
    $(".more").hide();
    $(".more:eq(" + visiblediv + ")").show();
 
	// for hiding next button
	if (visiblediv == 5) {
      $("#nextButton").hide();
      $("#resumebutton").show()
    } else {
      $("#nextButton").show();
      $("#resumebutton").hide();
    }




	// for hiding previous button 
    if (visiblediv == 0) {
      $("#previousButton").hide();
    } else {
      $("#previousButton").show();
    }
  }
  showdiv();
  function shownext() {
    if (visiblediv == $(".more").length - 1) {
      visiblediv = 0;
    } else {
      visiblediv++;
    }
    showdiv();

  }
  function showprev() {
    if (visiblediv == 0) {
      visiblediv = $(".more").length - 1;
    } else {
      visiblediv--;
    }
    showdiv();

  }


  $("#resumebutton").click(function () { 
    generatePDF();
    
  });

  // adding content and manupulation

  
});


function generatePDF() {
  var doc = new jsPDF();  //create jsPDF object
   doc.fromHTML(document.getElementById("ResumeSection"), // page element which you want to print as PDF
   15,
   15, 
   {
     'width': 170  //set width
   },
   function(a) 
    {
     doc.save("HTML2PDF.pdf"); // save file name as HTML2PDF.pdf
   });
 }
 // add more button//
 //function addNewSkill()
 
  
 
 
 