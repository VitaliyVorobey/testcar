    var width = 400; 
    var count = 1; 
    var carousel = document.getElementById('car');
    var list = carousel.querySelector('.img_cont');
    var listElems = carousel.querySelectorAll('.item');

    var position = 0; 
    carousel.querySelector('#prev').onclick = function() {      
      position = Math.min(position + width * count, 0)
      list.style.marginLeft = position + 'px';
    };

    carousel.querySelector('#next').onclick = function() {     
      position = Math.max(position - width * count, -width * (listElems.length - count));
      list.style.marginLeft = position + 'px';
    };