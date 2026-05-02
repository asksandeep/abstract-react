
/*=============================================
  =             Mobile menu                  =
=============================================*/

$(function(){
  $('.menu-toggle, nav.mobilemenu a').on('click', function(){
    $('nav.mobilemenu').toggleClass('open');
    $('main').toggleClass('back').toggleClass('blur');
    $('.mobile-blur-bg').fadeToggle();
  });

  $('.mobile-blur-bg').on('click', function(){
    $('nav.mobilemenu').removeClass('open');
    $('main').removeClass('back blur');
    $(this).fadeOut();
  });
});


/*=============================================
  =          Data Background               =
=============================================*/

$("[data-background]").each(function() {
  $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
})

/*=============================================
  =                    Form                   =
=============================================*/


document.addEventListener("DOMContentLoaded", function () {
  const overlay = document.querySelector(".overlay-popup");
  const popup = document.querySelector(".thankyou-popup");
  const form = document.querySelector("form");
  const closeBtn = document.querySelector(".close-popup");

  function closePopup() {
    if (overlay) overlay.style.display = "none";
    if (popup) popup.style.display = "none";
    if (form) form.reset();
  }

  if (overlay) {
    overlay.addEventListener("click", closePopup);
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", closePopup);
  }
});

function handleFormSubmit() {
  setTimeout(() => {
    const overlay = document.querySelector(".overlay-popup");
    const popup = document.querySelector(".thankyou-popup");
    if (overlay && popup) {
      overlay.style.display = "block";
      popup.style.display = "flex";
    }
  }, 100);
  return true;
}

/*=============================================
  =                Owl slider               =
=============================================*/



$('.testimonialsslide').owlCarousel({
      loop: true,
      margin: 20,
      autoplay:true,
      dot:false,
      nav: false,
      //navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
      responsive: {
          0: {
              items: 2
          },
          600: {
              items: 3
          },
          1000: {
              items: 5
          },
          1200: {
              items: 6
          }
      }
})


$('.clients').owlCarousel({
      loop: true,
      margin: 20,
      autoplay:true,
      dot:false,
      nav: false,
      //navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
      responsive: {
          0: {
              items: 2
          },
          600: {
              items: 3
          },
          1000: {
              items: 5
          },
          1200: {
              items: 5
          }
      }
})




$('.portfolio').owlCarousel({
      loop: true,
      margin: 20,
      autoplay:true,
      dot:true,
      nav: false,
      //navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
      responsive: {
          0: {
              items: 1
          },
          600: {
              items: 1
          },
          1000: {
              items: 1
          },
          1200: {
              items: 1
          }
      }
})




$('.service-slider').owlCarousel({
      loop: true,
      margin: 20,
      autoplay:true,
      dot:false,
      nav: false,
      //navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
      responsive: {
          0: {
              items: 3
          },
          600: {
              items: 5
          },
          1000: {
              items: 6
          },
          1200: {
              items: 8
          }
      }
})





// WhatsApp

document.addEventListener('DOMContentLoaded', () => {
  const allAccordionItems = document.querySelectorAll('.accordion-item');

  allAccordionItems.forEach(item => {
    const button = item.querySelector('.accordion-button');

    button.addEventListener('click', () => {
      const clickedItem = button.closest('.accordion-item');
      const isCurrentlyExpanded = button.getAttribute('aria-expanded') === 'true';

      // --- This is the new logic ---
      // First, close all accordion items.
      allAccordionItems.forEach(otherItem => {
        const otherButton = otherItem.querySelector('.accordion-button');
        otherButton.setAttribute('aria-expanded', 'false');
        const otherContent = otherButton.nextElementSibling;
        otherContent.style.maxHeight = '0px';
      });
      // --- End of new logic ---

      // If the clicked item was not already open, then open it.
      if (!isCurrentlyExpanded) {
        button.setAttribute('aria-expanded', 'true');
        const content = button.nextElementSibling;
        content.style.maxHeight = content.scrollHeight + 'px';
      }
      // If it was already open, the loop above has already closed it.
    });
  });
});



// Smooth Scrolling
function initSmoothScrolling() {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href");

      if (href === "#") {
        e.preventDefault();
        return;
      }

      const target = document.querySelector(href);

      if (target) {
        e.preventDefault();

        const headerHeight = document.querySelector(".header").offsetHeight;
        const targetPosition = target.offsetTop - headerHeight - 20;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  });
}




// Modal Popup

const modal = document.getElementById("getqouteModal");
const openBtn = document.getElementById("openModalBtn");
const closeBtn = document.querySelector(".close");

openBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});





// Dropdown menu

document.querySelector(".dropbtn").addEventListener("click", function () {
  document.querySelector(".dropdown-content").classList.toggle("show");
});

// Close dropdown when clicking outside
document.addEventListener("click", function(e) {
  const dropdown = document.querySelector(".dropdown");
  if (!dropdown.contains(e.target)) {
    document.querySelector(".dropdown-content").classList.remove("show");
  }
});


