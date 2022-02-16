//Multistep Form
var currentTab = 0;
document.addEventListener("DOMContentLoaded", function (event) {
  showTab(currentTab);
});

function showTab(n) {
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == x.length - 1) {
    document.getElementById("nextBtn").innerHTML = "Submit";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
  fixStepIndicator(n);
}

function nextPrev(n) {
  var x = document.getElementsByClassName("tab");
  if (n == 1 && !validateForm()) return false;
  x[currentTab].style.display = "none";
  currentTab = currentTab + n;
  if (currentTab >= x.length) {
    // document.getElementById("regForm").submit();
    // return false;
    //alert("sdf");
    document.getElementById("nextprevious").style.display = "none";
    document.getElementById("all-steps").style.display = "none";
    document.getElementById("register").style.display = "none";
    document.getElementById("text-message").style.display = "block";
  }
  showTab(currentTab);
}

function validateForm() {
  var x,
    y,
    i,
    valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  for (i = 0; i < y.length; i++) {
    if (y[i].value == "") {
      y[i].className += " invalid";
      valid = false;
    }
  }
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid;
}
function fixStepIndicator(n) {
  var i,
    x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  x[n].className += " active";
}

// Firststepform
// jquery
$(document).ready(function () {
  $("#how-kw-other").on("change", function () {
    // var selectedValue = $(this).val();
    var selectedother = $(this).children("option:selected").val();
    // alert("You have selected  - " + selectedother);

    if (selectedother == 2) {
      $("#how-kw-other-dropdown").addClass("show");
    } else {
      $("#how-kw-other-dropdown").removeClass("show");
    }
  });

  $("#setup-one-dropdown .selects-wrapper select").on("change", function () {
    var value = $(this).val();
    if ($(this).attr("id") == "setup-one-select2") {
      $("#setup-please-select2").text(value);
    }
  });
  $("#setup-one-dropdown .selects-wrapper select").on("change", function () {
    var value = $(this).val();
    if ($(this).attr("id") == "setup-one-select1") {
      $("#setup-please-select").text(value);
    }
  });

  // setup-section .
  $("#setup-one-select").on("change", function () {
    // var selectedValue = $(this).val();
    var selectedSetup = $(this).children("option:selected").val();
    var currentValue = $(this).val();

    $(".right-dropdown").removeClass("show");
    $(".right-dropdown").each(function (i, item) {
      console.log("item", item);
      if ($(this).attr("data-for") == currentValue) {
        $(this).addClass("show");
      }
    });
    // if ($(this).children("option:selected").val() == selectedSetup) {
    if (selectedSetup == 1) {
      // $("#one-dropdown").show();
      $("#setup-one-dropdown").addClass("show");
      // $("#setup-summary-one-dropdown").addClass("show");

      // console.log($("#one-dropdown"));
    } else {
      $("#setup-one-dropdown").removeClass("show");
      // $("#setup-summary-one-dropdown").removeClass("show");
    }

    if (selectedSetup == 2) {
      // $("#one-dropdown").show();
      $("#setup-two-dropdown").addClass("show");
    } else {
      $("#setup-two-dropdown").removeClass("show");
    }
    if (selectedSetup == 3) {
      // $("#one-dropdown").show();
      $("#setup-three-dropdown").addClass("show");
    } else {
      $("#setup-three-dropdown").removeClass("show");
    }
    if (selectedSetup == 4) {
      // $("#one-dropdown").show();
      $("#setup-four-dropdown").addClass("show");
    } else {
      $("#setup-four-dropdown").removeClass("show");
    }
    // console.log(selectedValue);

    // $(".selects-wrapper").html($selectValue);
  });
  $("#yes-no-btn .btn").on("click", function (e) {
    $(this).first().addClass("bg");
    $(".btn").not(this).removeClass("bg");
  });

  $("#yes-no-btn .btn").on("click", function () {
    $(".if-yes-dropdown").removeClass("show");
    if ($(this).attr("id") == "bank-without-setup-company") {
      $("#if-yes-dropdown").addClass("show");
    }
  });

  //service
  $("#service-office label").on("click", function (e) {
    $("#service-office-dropdown").toggleClass("show");
  });
  $("#bookkeeping label").on("click", function (e) {
    $("#bookkeeping-dropdown").toggleClass("show");
  });
});

$("#setup-one-select2").on("change", function () {
  var currentValue = $(this).val();

  // $(".setup-sub-dropdown").removeClass("show");
  // $(".setup-sub-dropdown").each(function (i, item) {
  //   console.log("item", item);
  //   if ($(this).attr("data-for") == currentValue) {
  //     $(this).addClass("show");
  //   }

  if ($(this).val() == currentValue) {
    $(".setup-sub-dropdown").addClass("show");
    $("#setup-owners-dropdown").addClass("show");
  } else {
    $(this).removeClass("show");
  }
  // });
});
$("#setup-one-dropdown .setup-sub-dropdown .selects-wrapper select").on(
  "change",
  function () {
    var value = $(this).val();
    if ($(this).attr("id") == "setup-twosub-select1") {
      $("#director-number").text(value);
    }
    if ($(this).attr("id") == "setup-twosub-select2") {
      $("#Shareholder-number").text(value);
    }
  }
);

// step3 jQuery

//AccomodationType

$(".payment").on("click", function (e) {
  $(this).first().addClass("active");
  $(".payment").not(this).removeClass("active");
});

$(".payment-4-dropdown .tab-btn").on("click", function (e) {
  $(this).first().addClass("bg");
  $(".payment-4-dropdown .tab-btn").not(this).removeClass("bg");
});

$(".payment-4-dropdown .tab-btn").on("click", function () {
  // $(".tab-pane").removeClass("show");
  if ($(this).attr("id") == "hsbc-bank") {
    $("#tab-hsbc").addClass("show");
    $("#tab-sepa").removeClass("show");
  }
  if ($(this).attr("id") == "sepa-transfer") {
    $("#tab-sepa").addClass("show");
    $("#tab-hsbc").removeClass("show");
  }
});

$(".payment").on("click", function () {
  // alert("mesgae");
  $(".payment-dropdown").removeClass("show");

  if ($(this).attr("id") == "payment1") {
    $("#payment-1-dropdown").addClass("show");
  }
  if ($(this).attr("id") == "payment2") {
    $("#payment-2-dropdown").addClass("show");
  }
  if ($(this).attr("id") == "payment3") {
    $("#payment-3-dropdown").addClass("show");
  }
  if ($(this).attr("id") == "payment4") {
    $("#payment-4-dropdown").addClass("show");
  }
});
