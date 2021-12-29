

$(function () {
    var generate = () => {
      const element = document.getElementById("resume-page");
      html2pdf().from(element).save();
    };
  
    $("button").click(function () {
      generate();
    });
  });
  