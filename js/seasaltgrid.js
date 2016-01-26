$(document).ready( function($){ 
	
    $('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
});


// Init ScrollMagic Controller once!
 
  var scrollMagicController = new ScrollMagic.Controller();
  
  
  //tween the thing to be animated, then build the scene to trigger the animation
  
 //you can do any css inside the tween or use className to add a class   
 //instead += adds a class -+ gets rid of a class
 //seems adding transitions in css will override the tween...
 //for class tot ween right the class here will get the animate class directly. not .menu .animte. must be .menu.animate
  
  //classes to add .animate to
  var tweenmenu = TweenMax.to('.no-touch .menu, .no-touch .site-description h2', 0.5, {
    className: '+=animate'
    
  });
  
  
  
  var menuAppear = new ScrollMagic.Scene({
    triggerElement: '#page',
    offset: 20,
    triggerHook: 'onLeave',
    duration: 350
    
    
  })
   .setTween(tweenmenu)
 // .setClassToggle('header','header-bg')
  .addTo(scrollMagicController);
 //.addIndicators();





//hero blurred
 var tweenHeroBlur = TweenMax.to('.blurred', 0.5, {
    className: '+=animate'
    
  });
  
  
  
  var menuAppear = new ScrollMagic.Scene({
    triggerElement: '#page',
    offset: 20,
    triggerHook: 'onLeave',
    duration: 300
    
    
  })
   .setTween(tweenHeroBlur)
  .addTo(scrollMagicController);


//making menu fixed at top. because there is no tweening and there is no duraiton set the tween to 0 or the diration to 0
var tweenMenuFixed = TweenMax.to('.site-description', 0.5, { className: '+=animate' });

var MenuFixed = new ScrollMagic.Scene({
	triggerElement: '.menu-holder',
	triggerHook: 'onLeave',
	duration: 10   //if there is a scroll duration, the .5 is not used. because it scrolls to fixed its not really a tweenible thing so its automatic. other things would tween like color and bg
	})
.setTween(tweenMenuFixed)
.addTo(scrollMagicController);

	
	
	
	
	
 });