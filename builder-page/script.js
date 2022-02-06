const details = {
  basics: {
    firstname: null,
    lastname: null,
    email: null,
    phone: null,
    city: null,
    Country: null,
  },
  summary: null,
  education: {
    from: null,
    to: null,
    institute_name: null,
    percentage: null ,
    additional_info_education: null,
  },
  previousExp: {
    jobtitle: null,
    employer: null,
    city: null,
    experience_country: null,
    startDate: null,
    endDate: null,
  },
  skills: [],
  socials: {
    linkedin: null,
    github: null,
  },
  Projects: {
    name_of_project: null,
    project_description: null,
  },
};

$(function () {
  $("#contain").change(function (e) {


    // basic info set
    let basics = details.basics;
    $("#R-name").html(basics.firstname + " " + basics.lastname);
    $("#R-location").html(basics.city + " " + basics.Country);
    $("#R-phone").html(basics.phone);
    $("#R-email").html(basics.email);
    $("#R-github").attr("href", details.socials.github);
    $("#R-linkedin").attr("href", details.socials.linkedin);


    // Summary set 
    $("#R-summary").html(details.summary);
    

    // Education set 
    let education = details.education;
    $("#R-edu-years").html(education.from.slice(0, 4)+"-"+ education.to.slice(0, 4));
    $("#R-edu-info").html(education.institute_name);
    $("#R-percentage").html(education.percentage);


    // previous experience set

    let experience = details.previousExp;
    $("#R-experience").html(experience.startDate.slice(0, 4) +"-"+experience.endDate.slice(0, 4));
    $("#R-exp-name").html(experience.jobtitle);
    // $("#R-exp-info").html(experience.);      -----work on this later



    // skill set
    let skill = details.skills;



    // project set
    let project = details.Projects;
    $("R-project").html(project.name_of_project);
    $("R-project-info").html(project.project_description);




  });


  console.log(details);
 
  $("#lastname").change(function (e) {
    details.basics.lastname = e.target.value;
  });
  $("#name").change(function (e) {
    details.basics.firstname = e.target.value;
      
  });
 
  $("#city").change(function (e) {
    details.basics.city = e.target.value;

     
  });
  $("#country").change(function (e) {
    details.basics.Country = e.target.value;

     
  });

  $("#phone").change(function (e) {
    details.basics.phone = e.target.value;

     
  });
  $("#email").change(function (e) {
    details.basics.email = e.target.value;

     
  });
  $("#LinkedIn").change(function (e) {
    details.socials.linkedin = e.target.value;

     
  });
  $("#github").change(function (e) {
    details.socials.github = e.target.value;

     
  });


  $("#Summary").change(function (e) {
    details.summary = e.target.value;

     
  });
  $("#From").change(function (e) {
    details.education.from = e.target.value;

     
  });
  $("#To").change(function (e) {
    details.education.to = e.target.value;

     
  });
  $("#Institute-name").change(function (e) {
    details.education.institute_name = e.target.value;

     
  });
  $("#Percentage").change(function (e) {
    details.education.percentage = e.target.value+"%";

     
  });
  $("#Additional-info").change(function (e) {
    details.education.additional_info_education = e.target.value;

     
  });





  $("#job").change(function (e) {
    details.previousExp.jobtitle = e.target.value;

     
  });
  $("#employer").change(function (e) {
    details.previousExp.employer = e.target.value;

     
  });
  $("#city-2").change(function (e) {
    details.previousExp.city = e.target.value;

     
  });
  $("#country").change(function (e) {
    details.previousExp.experience_country = e.target.value;

     
  });
  $("#s-date").change(function (e) {
    details.previousExp.startDate = e.target.value;

     
  });
  $("#e-date").change(function (e) {
    details.previousExp.endDate = e.target.value;

     
  });

  $("#yog").change(function (e) {
    details.skills = e.target.value;

     
  });
  $("#ProjectName").change(function (e) {
    details.Projects.name_of_project = e.target.value;

     
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
      $("#resumebutton").show();
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

  // adding content and manupulation
 
});
