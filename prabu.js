
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



/* Our vision latest */

  $(document).ready(function(){
    var autoSwitchIntervalVision = 4000; // Change this value to adjust the interval in milliseconds
    var currentIndexVision = 0;
    var tabsCountVision = $('#tabs .nav-item').length;
    var autoSwitchTimerVision;

    // Auto switch function for Our Vision Section 2
    function autoSwitchTabsVision() {
        autoSwitchTimerVision = setInterval(function() {
            var nextIndex = (currentIndexVision + 1) % tabsCountVision;
            $('#tabs .nav-item:eq(' + nextIndex + ') a').tab('show');
            currentIndexVision = nextIndex;
        }, autoSwitchIntervalVision);
    }

    // Start auto switching for Our Vision Section 2
    autoSwitchTabsVision();

    // Pause auto switch on hover for Our Vision Section 2
    $('#tabs').hover(
        function() {
            clearInterval(autoSwitchTimerVision);
        },
        function() {
            autoSwitchTabsVision();
        }
    );

    // Switch tabs on click for Our Vision Section 2
    $('#tabs .nav-item').click(function() {
        clearInterval(autoSwitchTimerVision); // Pause auto switch on manual click
        currentIndexVision = $(this).index();
        var target = $(this).find('a').attr('data-target');
        $(target).addClass('active show').siblings().removeClass('active show');
    });
});

// Contact us latest
document.addEventListener("DOMContentLoaded", function () {
  const branchButtonsContact = document.querySelectorAll(".btn-branch");

  branchButtonsContact.forEach(function (button) {
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

          branchButtonsContact.forEach(function (btn) {
              btn.classList.remove("active");
          });
          button.classList.add("active");
      });
  });
});

function showAddressContact(branch) {
  // Hide all addresses for Contact us latest
  document.getElementById('address1').style.display = 'none';
  document.getElementById('address2').style.display = 'none';
  document.getElementById('address3').style.display = 'none';
  
  // Show the selected address for Contact us latest
  document.getElementById('address' + branch).style.display = 'block';
}

// Call the showAddress function with 1 to display Address 1 by default for Contact us latest
showAddressContact(1);


/* Contact us latest */

$(document).ready(function() {
    var intervalId; // Variable to hold the interval ID for auto-switching
    var currentIndex = 1; // Variable to keep track of the current branch index

    // Function to show the address for the given branch index
    function showAddress(index) {
        // Hide all addresses
        $('.it-up-contact-text-info-list').hide();
        // Show the address for the current index
        $('#address' + index).show();
        // Remove active class from all nav items
        $('.nav-item').removeClass('active');
        // Add active class to the current nav item
        $('.nav-item:eq(' + (index - 1) + ')').addClass('active');
        // Update underline bar position
        updateUnderlineBarPosition(index);
    }

    // Function to update the position of the underline bar
    function updateUnderlineBarPosition(index) {
        var activeTab = $('.nav-item.active');
        var underlineBar = $('.it-up-contact-tab-btn .nav-tabs:before');
        var activeTabPosition = activeTab.position();
        underlineBar.css({
            left: activeTabPosition.left + 'px',
            width: activeTab.outerWidth() + 'px'
        });
    }

    // Function to handle hovering over the branch tabs
    $('.nav-item').hover(function() {
        // Stop the auto-switching loop
        clearInterval(intervalId);
        // Get the index of the hovered branch tab
        var index = $(this).index() + 1;
        // Show the address for the hovered branch
        showAddress(index);
        // Update currentIndex to the hovered branch
        currentIndex = index;
    }, function() {
        // Restart the auto-switching loop after mouse leaves the branch tab
        startAutoSwitch();
    });

    // Function to start the auto-switching loop
    function startAutoSwitch() {
        intervalId = setInterval(function() {
            // Increment the index for the next branch
            currentIndex = (currentIndex % 3) + 1;
            // Show the address for the current index
            showAddress(currentIndex);
        }, 3000); // Adjust the interval time as needed (in milliseconds)
    }

    // Start the auto-switching loop initially
    startAutoSwitch();
});

