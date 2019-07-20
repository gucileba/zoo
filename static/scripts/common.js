Modernizr.load([
  {
    test: Modernizr.placeholder,
    nope: 'scripts/placeholders.min.js'
  },{
    test: Modernizr.touch,
    yep: 'scripts/fastclick.min.js',
    complete: function(){
      if(Modernizr.touch)
        FastClick.attach(document.body);
    }
  }
]);

$(function() {

});

$(window).load(function () {  
    		
  var viewportWidth = $(window).width();
  var viewportWidthDiff = (1920 - viewportWidth) / 2;
  
  var viewportHeight = $(window).height();
  
  function checkWindowSize(){
    if (viewportWidth < 960 || viewportHeight < 740){
      $('.viewport').addClass('msg-min');
      $('body').addClass('blocked');
    }
    else if (viewportWidth > 1920 || viewportHeight > 1010){
      $('.viewport').addClass('msg-max');
      $('body').addClass('blocked');
    }
    else {
      $('.viewport').removeClass('msg-min').removeClass('msg-max');
      $('body').removeClass('blocked');
    }
  }
  
  function updateData(){
    
    for (var i = 1, k = -1000; i < 11; i++, k = k+3000) {
      
      var left = 'left: ' + (0-viewportWidthDiff) + 'px;',
          key = ['data-' + k, 'data-' + (k + 1000)];
      
      if(i == 1){
        $('#slide1').attr('data-0', left);
      }
      else if(i == 10){
        $('#slide10').attr('data-26000', left);
      }
      else {
       $('#slide' + i).attr(key[0], left);
       $('#slide' + i).attr(key[1], left);
      }
    }
  }
  
  function updateContent(){
    if(viewportHeight > 914){
      var mt = (305 - (viewportHeight/2 - 457)) * -1;
      $('.slide .content').css('margin-top', mt + 'px');
    }
    else
      $('.slide .content').css('margin-top', '-305px');
  }
  
  function updateElements(){
    
    var s = (1920 - viewportWidth) / 2;
    
    var data = {
          's-aircraft': { 0: -200, 2500: -200, 26000: 2000 },
          's-cloud-01': { 0: 1020, 2000: 500, 3000: 300, 6000: -300 },
          's-cloud-02': { 0: 1920, 2000: 1400, 3000: 1200, 10500: -300 },
          's-cloud-03': { 3000: 2000, 4000: 1800, 5000: 1600, 14500: -300 },
          's-cloud-04': { 7000: 2000, 8000: 1800, 9000: 1600, 18500: -300 },
          's-cloud-05': { 11000: 2000, 12000: 1800, 13000: 1600, 22500: -300 },
          's-cloud-06': { 15000: 2000, 16000: 1800, 18000: 1400, 26000: 0 },
          's-cloud-07': { 22700: 1920, 26000: 1260 },  
          's-tree-01': { 0: 1920, 2000: 300, 3000: 0, 3500: -300 },
          's-tree-02': { 0: 2900, 2000: 1900, 3000: 1400, 6400: -300 },
          's-tree-03': { 3150: 1920, 5500: 0, 6050: -400 },
          's-tree-04': { 4560: 1920, 5000: 1700, 6000: 1200, 9600: -600 },
          's-tree-05': { 7450: 1920, 8000: 1700, 9000: 1300, 13250: -400 },
          's-tree-06': { 8375: 2300, 9000: 1800, 11350: -400 },
          's-tree-07': { 10360: 1920, 11000: 1600, 12000: 1100, 14800: -500 },
          's-tree-08': { 13400: 1920, 14000: 1620, 15000: 1120, 17040: -600 },
          's-tree-09': { 16760: 1920, 20000: 300, 21000: -200, 21800: -600 },
          's-tree-10': { 19760: 1920, 20000: 1800, 21000: 1300, 24800: -600 },
          's-tree-12': { 22760: 1920, 23000: 1800, 24000: 1300, 26000: -600 },
          's-tree-13': { 24060: 1920, 26000: 90 },
          's-tree-14': { 25500: 1920, 26000: 1420 },
          's-tree-15': { 24700: 1920, 26000: 1630 },
          's-tree-16': { 11400: 1920, 14000: 400, 15000: 0, 15750: -300 },
          's-verb': { 8380: 1920, 11000: 100, 12000: -400 },
          's-car': { 13200: 1920, 14000: 1600, 15000: 1200, 17300: -400 },
          's-nlo': { 14650: 1920, 17000: 300, 17500: 109, 19750: -400 },
          's-building': { 15500: 1920, 20000: 460, 21000: 160, 22870: -400 },
          's-straus': { 19250: 1920, 20000: 1620, 21000: 1220, 25000: -400 },
          's-bush-01': { 0: 3200, 2000: 1800, 3000: 1100, 5000: -300 },
          's-bush-03': { 4450: 1920, 5000: 1700, 6000: 1300, 10000: -300 },
          's-bush-04': { 15110: 1920, 17000: 600, 18000: -100, 18430: -400 },
    };
    
    $.each( data, function( cl, value ){
      $.each( value, function( i, val ){
        var key = 'data-' + i,
            left = 'left: ' + (val - s) + 'px;',
            elementClass = '.' + cl;
        
        $(elementClass).attr(key, left);
      });
    });
  }
  
  function updateMarginTitle(){
    var heightDiff = 0,
        mt = 0,
        topPoint = (viewportHeight/2 + 373);
    
    if (viewportHeight < 820){ heightDiff = (820 - viewportHeight) / 2; }
    
    for (var i = 2, k = 1000; i < 11; i++, k = k+3000) {

      var key = [
            'data-' + k,
            'data-' + (k + 500),
            'data-' + (k + 2500),
            'data-' + (k + 3000)
      ];
      
      if(viewportHeight > 914)
        var mt = viewportHeight/2 - 457;
      
      if(i == 10){
        $('#slide' + i + ' .title').attr(key[0], ('margin-top: -' + (topPoint+mt-heightDiff) + 'px;'));
        $('#slide' + i + ' .title').attr(key[1], ('margin-top: -' + (620-mt-heightDiff) + 'px;'));
      }
      else {
         $('#slide' + i + ' .title').attr(key[0], ('margin-top: -' + (topPoint+mt-heightDiff) + 'px;'));
         $('#slide' + i + ' .title').attr(key[1], ('margin-top: -' + (620-mt-heightDiff) + 'px;'));
         $('#slide' + i + ' .title').attr(key[2], ('margin-top: -' + (620-mt-heightDiff) + 'px;'));
         $('#slide' + i + ' .title').attr(key[3], ('margin-top: -' + (topPoint+mt-heightDiff) + 'px;'));
      }
    }
  }
  
  checkWindowSize();
  updateData();
  updateContent();
  updateMarginTitle();
  updateElements();

  $(window).resize(function() {
    viewportWidth = $(window).width();
    viewportWidthDiff = (1920 - viewportWidth) / 2;
    
    viewportHeight = $(window).height();
    
    checkWindowSize();
    updateData();
    updateContent();
    updateMarginTitle();
    updateElements();
    s.refresh();
  });
  
  var s = skrollr.init({
		smoothScrolling: true,
		mobileDeceleration: 0.004,
	});
	
   $(".nav li").on("click", function(event){
       event.preventDefault();
       var target = $(this).data("offset");
       $("html, body").stop().animate({
           scrollTop: target
       }, 2600);
   });
   
   $("#slide8 .content .controls div").on("click", function(e){
       
       e.preventDefault();
    
      var button = $(this),
          inner = $('.slide8-text')
          active = inner.find('.active'),
          next = '',
          disable = false;
          
      if ( button.data('dir') == 'prev' ) {
          next = active.prev().length ? active.prev() : false;
          
          if( next !== false )
            disable = next.prev().length ? false : true;
      }
      else {
          next = active.next().length ? active.next() : false;
          
          if( next !== false )
            disable = next.next().length ? false : true;
      }
      
      if( next !== false ){
        active.removeClass('active');
        next.addClass('active');
        $("#slide8 .content .controls div").removeClass('disabled');
      }
      
      if( disable === true)
        button.addClass('disabled');
  });
  
  $("#slide4 .content .controls div").on("click", function(e){
       
       e.preventDefault();
    
      var button = $(this),
          inner = $('.slide4-text')
          active = inner.find('.active'),
          next = '',
          disable = false;
          
      if ( button.data('dir') == 'prev' ) {
          next = active.prev().length ? active.prev() : false;
          
          if( next !== false )
            disable = next.prev().length ? false : true;
      }
      else {
          next = active.next().length ? active.next() : false;
          
          if( next !== false )
            disable = next.next().length ? false : true;
      }
      
      if( next !== false ){
        active.removeClass('active');
        next.addClass('active');
        $("#slide4 .content .controls div").removeClass('disabled');
      }
      
      if( disable === true)
        button.addClass('disabled');
  });
  
  var btnDisable = false;
  
  $(".slide7-text .controls div").on("click", function(e){
       
      e.preventDefault();
    
      if(btnDisable == false){
      
        var button = $(this),
            inner = $('.slide7-text .slide7-text-items')
            active = inner.find('.active'),
            next = '',
            disable = false,
            dir_val = 0;
            
        if ( button.data('dir') == 'down' ) {
            next = active.prev().length ? active.prev() : false;
            dir_val = "-=298";
            
            if( next !== false )
              disable = next.prev().length ? false : true;
        }
        else {
            next = active.next().length ? active.next() : false;
            dir_val = "+=298";
            
            if( next !== false )
              disable = next.next().length ? false : true;
        }
        
        if( next !== false ){
          btnDisable = true;
          active.removeClass('active');
          next.addClass('active');
          $(".slide7-text .controls div").removeClass('disabled');
          
          active.find('.stage').removeClass('visible');
          $('.king-kong').addClass('animate');
          $( ".slide7-building-img" ).animate({
                          "margin-top": dir_val,
                        }, 1000, function() {
                          $('.king-kong').removeClass('animate');
                          next.find('.stage').addClass('visible');
                          btnDisable = false;
                        });
        }
        
        if( disable === true)
          button.addClass('disabled');
      }
  });
  
  $(".btn-bubble div").on("click", function(e){
       
       e.preventDefault();
    
      var inner = $(this),
          parent = inner.parent().parent()
          bubble = parent.find('.s-bubble'),
          close = parent.find('.s-close');
      
      bubble.css('display', 'block');
      close.css('display', 'block');
      
      if( inner.data('type') == 's' )
        bubble.find('.b-1').addClass('active');
      else if( inner.data('type') == 'a' )
        bubble.find('.b-2').addClass('active');
      else if( inner.data('type') == 'q' )
        bubble.find('.b-3').addClass('active');
      
      
  });
  
  $(".s-close").on("click", function(e){
       
       e.preventDefault();
    
      var inner = $(this).parent(),
          bubble = inner.find('.s-bubble'),
          active = inner.find('.active');
      
      bubble.css('display', 'none');
      active.removeClass('active');
      $(this).css('display', 'none');
      
      
  });
  
  $(document).scroll(function() {
    if($(document).scrollTop() >= 14000)
      $('.building').addClass('animate');
      
    if($(document).scrollTop() <= 12000)
      $('.building').removeClass('animate');
    
  });
  
  document.getElementById('loader-wrapper').setAttribute('style', 'display:none;');
  document.getElementById('layout').setAttribute('style', '');
});
