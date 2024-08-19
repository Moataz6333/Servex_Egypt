document.addEventListener('DOMContentLoaded', function () {
    var carousel = document.querySelector('#carouselExampleIndicators');
    var carouselInstance = new bootstrap.Carousel(carousel);

    // Custom indicators
    var spans = document.querySelectorAll('.spans span');
    spans.forEach(function(span) {
      span.addEventListener('click', function() {
        var slideTo = this.getAttribute('data-slide-to');
        carouselInstance.to(parseInt(slideTo));

        // Update active state of spans
        spans.forEach(function(s) {
          s.classList.remove('active');
        });
        span.classList.add('active');
      });
    });

    // Custom arrows
    var prevArrow = document.getElementById('prevArrow');
    var nextArrow = document.getElementById('nextArrow');

    prevArrow.addEventListener('click', function() {
      carouselInstance.prev();
    });

    nextArrow.addEventListener('click', function() {
      carouselInstance.next();
    });

    // Sync active span with carousel changes
    $(carousel).on('slide.bs.carousel', function(event) {
      var index = $(event.relatedTarget).index();
      spans.forEach(function(span, i) {
        span.classList.toggle('active', i === index);
      });
    });
  });


  // the second 
document.addEventListener('DOMContentLoaded', function () {
    var carousel = document.querySelector('#carouselExampleIndicators2');
    var carouselInstance = new bootstrap.Carousel(carousel);

    // Custom indicators
    var spans = document.querySelectorAll('.spans2 span');
    spans.forEach(function(span) {
      span.addEventListener('click', function() {
        var slideTo = this.getAttribute('data-slide-to');
        carouselInstance.to(parseInt(slideTo));

        // Update active state of spans
        spans.forEach(function(s) {
          s.classList.remove('active');
        });
        span.classList.add('active');
      });
    });

    // Custom arrows
    var prevArrow = document.getElementById('prevArrow2');
    var nextArrow = document.getElementById('nextArrow2');

    prevArrow.addEventListener('click', function() {
      carouselInstance.prev();
    });

    nextArrow.addEventListener('click', function() {
      carouselInstance.next();
    });

    // Sync active span with carousel changes
    $(carousel).on('slide.bs.carousel', function(event) {
      var index = $(event.relatedTarget).index();
      spans.forEach(function(span, i) {
        span.classList.toggle('active', i === index);
      });
    });
  });



  
  let showMore =document.getElementById('showMore');
  let showFlage =false;
  let moreProducts =document.querySelector('.moreProducts');
  showMore.addEventListener('click',()=>{
    let text=showMore.textContent;
   
    if(text=="Show more" || text== "Show less"){
      if(showFlage){
        moreProducts.style.display= 'none';
         showMore.textContent="Show more";
         showFlage=false;
         }else{
           moreProducts.style.display= 'flex';
         showMore.textContent="Show less";
         showFlage=true;
         }
    }
    else{
      if(showFlage){
        moreProducts.style.display= 'none';
         showMore.textContent="اعرض المزيد";
         showFlage=false;
         }else{
           moreProducts.style.display= 'flex';
         showMore.textContent="اعرض اقل";
         showFlage=true;
         }
    }
    
   
  });

 