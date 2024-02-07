
// <!-- Works about start--> 
/* Works about */

let slideIndex = 0;

  // Define an array of objects with data for each slide
  const slidesData = [
    {
      text: `Experience derived from delivering 1000+
      projects`,
    },
    {
      text: 'Multi-technology and Cross-culturalteams',
    },
    {
      text: 'On Time Every Time delivery',
    },
    // Add more objects as needed
  ];

  showSlides();

  function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }

    slideIndex++;
    if (slideIndex > slidesData.length) {slideIndex = 1}    

    updateSlideContent(slideIndex);
    setTimeout(showSlides, 5000); // Change text every 2 seconds
  }

  function updateSlideContent(index) {
    const slideText = document.getElementById("slideText");
    // Update slide content dynamically based on the current data set
    slideText.innerHTML = slidesData[index - 1].text;
  }




  /* Our Vision Section 2 */

  $(document).ready(function(){
    var autoSwitchInterval = 4000; // Change this value to adjust the interval in milliseconds
    var currentIndex = 0;
    var tabsCount = $('#tabs .nav-item').length;
    var autoSwitchTimer;

    // Auto switch function
    function autoSwitchTabs() {
        autoSwitchTimer = setInterval(function() {
            var nextIndex = (currentIndex + 1) % tabsCount;
            $('#tabs .nav-item:eq(' + nextIndex + ') a').tab('show');
            currentIndex = nextIndex;
        }, autoSwitchInterval);
    }

    // Start auto switching
    autoSwitchTabs();

    // Pause auto switch on hover
    $('#tabs').hover(
        function() {
            clearInterval(autoSwitchTimer);
        },
        function() {
            autoSwitchTabs();
        }
    );

    // Switch tabs on click
    $('#tabs .nav-item').click(function() {
        clearInterval(autoSwitchTimer); // Pause auto switch on manual click
        currentIndex = $(this).index();
        var target = $(this).find('a').attr('data-target');
        $(target).addClass('active show').siblings().removeClass('active show');
    });
});



//Contact us latest

document.addEventListener("DOMContentLoaded", function () {
  const branchButtons = document.querySelectorAll(".btn-branch");

  branchButtons.forEach(function (button) {
      button.addEventListener("click", function () {
          const target = button.getAttribute("data-target");
          const addressPanels = document.querySelectorAll(".address-panel");
          
          addressPanels.forEach(function (panel) {
              if (panel.id === target) {
                  panel.style.display = "block";
              } else {
                  panel.style.display = "none";
              }
          });

          branchButtons.forEach(function (btn) {
              btn.classList.remove("active");
          });
          button.classList.add("active");
      });
  });
});



function showAddress(branch) {
  // Hide all addresses
  document.getElementById('address1').style.display = 'none';
  document.getElementById('address2').style.display = 'none';
  document.getElementById('address3').style.display = 'none';
  
  // Show the selected address
  document.getElementById('address' + branch).style.display = 'block';
}

// Call the showAddress function with 1 to display Address 1 by default
showAddress(1);