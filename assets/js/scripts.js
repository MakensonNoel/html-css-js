/*!
* Licensed under MIT (https://github.com/makensonn/Portfolioo/blob/master/LICENSE)
*/
//
// Scripts
// 

//Custom Scroll to top JavaScript function
$(function(){
    //Function To Add Class
    function showBackToTop(){
    $('#back-to-top').addClass('show-btt');
    }

    //Function To Add Class
    function hideBackToTop(){
    $('#back-to-top').removeClass('show-btt');
    }

    //Check Scroll and Add Class
    function checkScrollPos(){
    if ($(this).scrollTop() >= 700) { //if scroll position is lower than 700px from the top of the screen
        showBackToTop();
    } else {
        hideBackToTop()
    }
    }
    
    // Scroll to the top when the button is clicked
    $('#back-to-top').click(function(){$(window).scrollTop(0)});

    // tell the browser to run the "checkScrollPos()" function just above when the user scrolls
    $(window).on('scroll', function(){ 
    checkScrollPos();
    });
    //Check the scroll position once when the page loads
    checkScrollPos();
})

//Firebase Configiration
const firebaseConfig = {
    apiKey: "AIzaSyCT76hoEQLxZ03zc5j5AZbNm7RhfIO-Ffw",
    authDomain: "makenson-portfolio.firebaseapp.com",
    databaseURL: "https://makenson-portfolio-default-rtdb.firebaseio.com",
    projectId: "makenson-portfolio",
    storageBucket: "makenson-portfolio.appspot.com",
    messagingSenderId: "229564861118",
    appId: "1:229564861118:web:285b4afe705b0faebdacef",
    measurementId: "G-M5Z491038B"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
