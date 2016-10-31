var mySwiper = new Swiper ('.swiper-container', {

                // Optional parameters
                direction: 'vertical',
                loop: true,
                
                // If we need pagination
                pagination: '.swiper-pagination',
                setWrapperSize: true,
                autoHeight: true,
                
                // Navigation arrows
                // nextButton: '.swiper-button-next',
                // prevButton: '.swiper-button-prev',
                
                effect: 'fade',
                speed: 3000,
                autoplay: 1,
              });


var grid = document.querySelector('.grid');
var msnry = new Masonry( grid, {
		  columnWidth: 160,
		  fitWidth: true,
		  resize: true
		});

		grid.addEventListener( 'click', function( event ) {
		  // don't proceed if item was not clicked on
		  if ( !matchesSelector( event.target, '.grid-item' ) ) {
		    return;
		  }
		  // change size of item via class
		  event.target.classList.toggle('grid-item--gigante');
		  // trigger layout
		  msnry.layout();
		});

		msnry.on( 'layoutComplete', function( laidOutItems ) {
		  console.log( 'Masonry layout complete with ' + laidOutItems.length + ' items' );
		});



(function($){ 
	$(window).load(function(){
 
	$(".grid").mCustomScrollbar({
	theme:"light-thick"
	});
	 
	});
});


