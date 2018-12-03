
jQuery('.button-filtr').click(function(){
  jQuery('.modal-filtr').addClass('active');

});
jQuery('.button-filtr-close').click(function(){
  jQuery('.modal-filtr').removeClass('active');
})
jQuery(document).mouseup(function (e){
        var div = jQuery('.modal-filtr form');
        if (!div.is(e.target)
            && div.has(e.target).length === 0) {
            jQuery('.modal-filtr').removeClass('active');
        }
    });


jQuery('.mobile-menu').click(function(){
  jQuery('.main-header .menu').toggleClass('active');

});

jQuery(document).mouseup(function (e){
        var div = jQuery('.main-header .menu');
        if (!div.is(e.target)
            && div.has(e.target).length === 0) {
            jQuery('.main-header .menu').removeClass('active');
        }
    });



jQuery(document).ready(function(){
var i=0,
 b=0,
 hov = 0;

jQuery('.select--colors .sexy-select__list').on('change', '[type=checkbox]', function() {
  var $this = jQuery(this),
      partnr = $this.parent();




if( $this.prop('checked') ){
  i++;

  partnr.hover(function(){
              jQuery(this).addClass('closes');

          },function(){
              jQuery(this).removeClass('closes');

          });

    if( i>4 ){
      b=b-40;
      jQuery('.select--colors .sexy-select .category-aside__colors label').eq(0).css('margin-left', b + 'px');
    }else if(i >= 1){
      jQuery('.select--colors .close').removeClass('dnone');
      jQuery('.select--colors .text').addClass('dnone');
      jQuery('.select--colors .sexy-select').addClass('none');
      jQuery('.select--colors .icon').addClass('none');
    }


    partnr.clone().appendTo('.sexy-select .category-aside__colors');
}
else{i--;}
});


jQuery('.select--colors .sexy-select').on('click', 'label',  function() {
  var $this = jQuery(this),
      partnr = $this.parent();

  jQuery(this).remove();
    if(i>4){
      b=b+40;
      jQuery('.sexy-select .category-aside__colors label').eq(0).css('margin-left', b + 'px');
    }
  i--;
});

jQuery('.select--colors .close ').on('click',  function(){
  jQuery('.select--colors .sexy-select__list label').removeClass('active')
  i=0;
  b=0;
  jQuery('.select--colors .sexy-select__list input').prop('checked', false);
  jQuery('.select--colors .sexy-select label').remove();
  jQuery('.select--colors .close').addClass('dnone');
  jQuery('.select--colors .text').removeClass('dnone');
  jQuery('.select--colors .sexy-select').removeClass('none');
  jQuery('.select--colors .icon').removeClass('none');
  jQuery('.select--colors label').unbind('mouseenter mouseleave');
  jQuery('.select--colors label').removeClass('closes');
});



  jQuery('.sexy-select ').on('click', '.color1',  function(){
    jQuery('.color1 input').prop('checked', false);
    jQuery('.color1').removeClass('active');
    if(i === 0){
      jQuery('.select--colors .close').addClass('dnone');
      jQuery('.select--colors .text').removeClass('dnone');
      jQuery('.select--colors .sexy-select').removeClass('none');
      jQuery('.select--colors .icon').removeClass('none');

    }
  jQuery('.color2').unbind('mouseenter mouseleave');
  jQuery('.color2').removeClass('closes');
  });
  jQuery('.sexy-select ').on('click', '.color2',  function(){
    jQuery('.color2 input').prop('checked', false);
    jQuery('.color2').removeClass('active');
    if(i === 0){
      jQuery('.select--colors .close').addClass('dnone');
      jQuery('.select--colors .text').removeClass('dnone');
      jQuery('.select--colors .sexy-select').removeClass('none');
      jQuery('.select--colors .icon').removeClass('none');

    }
  jQuery('.color2').unbind('mouseenter mouseleave');
  jQuery('.color2').removeClass('closes');
  });
  jQuery('.sexy-select ').on('click', '.color3',  function(){
    jQuery('.color3 input').prop('checked', false);
    jQuery('.color3').removeClass('active');
    if(i === 0){
      jQuery('.select--colors .close').addClass('dnone');
      jQuery('.select--colors .text').removeClass('dnone');
      jQuery('.select--colors .sexy-select').removeClass('none');
      jQuery('.select--colors .icon').removeClass('none');

    }
  jQuery('.color3').unbind('mouseenter mouseleave');
  jQuery('.color3').removeClass('closes');
  });
  jQuery('.sexy-select ').on('click', '.color4',  function(){
    jQuery('.color4 input').prop('checked', false);
    jQuery('.color4').removeClass('active');
    if(i === 0){
      jQuery('.select--colors .close').addClass('dnone');
      jQuery('.select--colors .text').removeClass('dnone');
      jQuery('.select--colors .sexy-select').removeClass('none');
      jQuery('.select--colors .icon').removeClass('none');

    }
  jQuery('.color4').unbind('mouseenter mouseleave');
  jQuery('.color4').removeClass('closes');
  });
  jQuery('.sexy-select ').on('click', '.color5',  function(){
    jQuery('.color5 input').prop('checked', false);
    jQuery('.color5').removeClass('active');
    if(i === 0){
      jQuery('.select--colors .close').addClass('dnone');
      jQuery('.select--colors .text').removeClass('dnone');
      jQuery('.select--colors .sexy-select').removeClass('none');
      jQuery('.select--colors .icon').removeClass('none');

    }
  jQuery('.color5').unbind('mouseenter mouseleave');
  jQuery('.color5').removeClass('closes');
  });
  jQuery('.sexy-select ').on('click', '.color6',  function(){
    jQuery('.color6 input').prop('checked', false);
    jQuery('.color6').removeClass('active');
    if(i === 0){
      jQuery('.select--colors .close').addClass('dnone');
      jQuery('.select--colors .text').removeClass('dnone');
      jQuery('.select--colors .sexy-select').removeClass('none');
      jQuery('.select--colors .icon').removeClass('none');

    }
  jQuery('.color6').unbind('mouseenter mouseleave');
  jQuery('.color6').removeClass('closes');
  });
  jQuery('.sexy-select ').on('click', '.color7',  function(){
    jQuery('.color7 input').prop('checked', false);
    jQuery('.color7').removeClass('active');
    if(i === 0){
      jQuery('.select--colors .close').addClass('dnone');
      jQuery('.select--colors .text').removeClass('dnone');
      jQuery('.select--colors .sexy-select').removeClass('none');
      jQuery('.select--colors .icon').removeClass('none');

    }
  jQuery('.color7').unbind('mouseenter mouseleave');
  jQuery('.color7').removeClass('closes');
  });
  jQuery('.sexy-select ').on('click', '.color8',  function(){
    jQuery('.color8 input').prop('checked', false);
    jQuery('.color8').removeClass('active');
    if(i === 0){
      jQuery('.select--colors .close').addClass('dnone');
      jQuery('.select--colors .text').removeClass('dnone');
      jQuery('.select--colors .sexy-select').removeClass('none');
      jQuery('.select--colors .icon').removeClass('none');

    }
  jQuery('.color8').unbind('mouseenter mouseleave');
  jQuery('.color8').removeClass('closes');
  });
  jQuery('.sexy-select ').on('click', '.color9',  function(){
    jQuery('.color9 input').prop('checked', false);
    jQuery('.color9').removeClass('active');
    if(i === 0){
      jQuery('.select--colors .close').addClass('dnone');
      jQuery('.select--colors .text').removeClass('dnone');
      jQuery('.select--colors .sexy-select').removeClass('none');
      jQuery('.select--colors .icon').removeClass('none');

    }
  jQuery('.color9').unbind('mouseenter mouseleave');
  jQuery('.color9').removeClass('closes');
  });
  jQuery('.sexy-select ').on('click', '.color10',  function(){
    jQuery('.color10 input').prop('checked', false);
    jQuery('.color10').removeClass('active');
    if(i === 0){
      jQuery('.select--colors .close').addClass('dnone');
      jQuery('.select--colors .text').removeClass('dnone');
      jQuery('.select--colors .sexy-select').removeClass('none');
      jQuery('.select--colors .icon').removeClass('none');

    }
  jQuery('.color10').unbind('mouseenter mouseleave');
  jQuery('.color10').removeClass('closes');
  });
  jQuery('.sexy-select ').on('click', '.color11',  function(){
    jQuery('.color11 input').prop('checked', false);
    jQuery('.color11').removeClass('active');
    if(i === 0){
      jQuery('.select--colors .close').addClass('dnone');
      jQuery('.select--colors .text').removeClass('dnone');
      jQuery('.select--colors .sexy-select').removeClass('none');
      jQuery('.select--colors .icon').removeClass('none');

    }
  jQuery('.color11').unbind('mouseenter mouseleave');
  jQuery('.color11').removeClass('closes');
  });
  jQuery('.sexy-select ').on('click', '.color12',  function(){
    jQuery('.color12 input').prop('checked', false);
    jQuery('.color12').removeClass('active');
    if(i === 0){
      jQuery('.select--colors .close').addClass('dnone');
      jQuery('.select--colors .text').removeClass('dnone');
      jQuery('.select--colors .sexy-select').removeClass('none');
      jQuery('.select--colors .icon').removeClass('none');

    }
  jQuery('.color12').unbind('mouseenter mouseleave');
  jQuery('.color12').removeClass('closes');
  });
  jQuery('.sexy-select ').on('click', '.color13',  function(){
    jQuery('.color13 input').prop('checked', false);
    jQuery('.color13').removeClass('active');
    if(i === 0){
      jQuery('.select--colors .close').addClass('dnone');
      jQuery('.select--colors .text').removeClass('dnone');
      jQuery('.select--colors .sexy-select').removeClass('none');
      jQuery('.select--colors .icon').removeClass('none');

    }
  jQuery('.color13').unbind('mouseenter mouseleave');
  jQuery('.color13').removeClass('closes');
  });
  jQuery('.sexy-select ').on('click', '.color14',  function(){
    jQuery('.color14 input').prop('checked', false);
    jQuery('.color14').removeClass('active');
    if(i === 0){
      jQuery('.select--colors .close').addClass('dnone');
      jQuery('.select--colors .text').removeClass('dnone');
      jQuery('.select--colors .sexy-select').removeClass('none');
      jQuery('.select--colors .icon').removeClass('none');

    }
  jQuery('.color14').unbind('mouseenter mouseleave');
  jQuery('.color14').removeClass('closes');
  });
  jQuery('.sexy-select ').on('click', '.color15',  function(){
    jQuery('.color15 input').prop('checked', false);
    jQuery('.color15').removeClass('active');
    if(i === 0){
      jQuery('.select--colors .close').addClass('dnone');
      jQuery('.select--colors .text').removeClass('dnone');
      jQuery('.select--colors .sexy-select').removeClass('none');
      jQuery('.select--colors .icon').removeClass('none');

    }
  jQuery('.color15').unbind('mouseenter mouseleave');
  jQuery('.color15').removeClass('closes');
  });
  jQuery('.sexy-select ').on('click', '.color16',  function(){
    jQuery('.color16 input').prop('checked', false);
    jQuery('.color16').removeClass('active');
    if(i === 0){
      jQuery('.select--colors .close').addClass('dnone');
      jQuery('.select--colors .text').removeClass('dnone');
      jQuery('.select--colors .sexy-select').removeClass('none');
      jQuery('.select--colors .icon').removeClass('none');

    }
  jQuery('.color16').unbind('mouseenter mouseleave');
  jQuery('.color16').removeClass('closes');
  });
  jQuery('.sexy-select ').on('click', '.color17',  function(){
    jQuery('.color17 input').prop('checked', false);
    jQuery('.color17').removeClass('active');
    if(i === 0){
      jQuery('.select--colors .close').addClass('dnone');
      jQuery('.select--colors .text').removeClass('dnone');
      jQuery('.select--colors .sexy-select').removeClass('none');
      jQuery('.select--colors .icon').removeClass('none');

    }
  jQuery('.color17').unbind('mouseenter mouseleave');
  jQuery('.color17').removeClass('closes');
  });
  jQuery('.sexy-select ').on('click', '.color18',  function(){
    jQuery('.color18 input').prop('checked', false);
    jQuery('.color18').removeClass('active');
    if(i === 0){
      jQuery('.select--colors .close').addClass('dnone');
      jQuery('.select--colors .text').removeClass('dnone');
      jQuery('.select--colors .sexy-select').removeClass('none');
      jQuery('.select--colors .icon').removeClass('none');

    }
  jQuery('.color18').unbind('mouseenter mouseleave');
  jQuery('.color18').removeClass('closes');
  });
  jQuery('.sexy-select ').on('click', '.color19',  function(){
    jQuery('.color19 input').prop('checked', false);
    jQuery('.color19').removeClass('active');
    if(i === 0){
      jQuery('.select--colors .close').addClass('dnone');
      jQuery('.select--colors .text').removeClass('dnone');
      jQuery('.select--colors .sexy-select').removeClass('none');
      jQuery('.select--colors .icon').removeClass('none');

    }
  jQuery('.color19').unbind('mouseenter mouseleave');
  jQuery('.color19').removeClass('closes');
  });
  jQuery('.sexy-select ').on('click', '.color20',  function(){
    jQuery('.color20 input').prop('checked', false);
    jQuery('.color20').removeClass('active');
    if(i === 0){
      jQuery('.select--colors .close').addClass('dnone');
      jQuery('.select--colors .text').removeClass('dnone');
      jQuery('.select--colors .sexy-select').removeClass('none');
      jQuery('.select--colors .icon').removeClass('none');

    }
  jQuery('.color20').unbind('mouseenter mouseleave');
  jQuery('.color20').removeClass('closes');
  });
});


jQuery('#open-modal').click(function(){
  jQuery('#order-modal').addClass('active');
});
jQuery(document).mouseup(function (e){
        var div = jQuery('.modal-wrap');
        if (!div.is(e.target)
            && div.has(e.target).length === 0) {
            jQuery('#order-modal').removeClass('active');
        }
    });


jQuery(document).ready(function(){



jQuery('.select--materials #osn').children(this).click(function(){
    var chek_osn = jQuery('#osn').children('input[type=checkbox]:checked').length
    if(chek_osn == 1){
      jQuery(".select--materials .osn").text(chek_osn + ' основа')
    }else if(chek_osn > 1){
      jQuery(".select--materials .osn").text(chek_osn + ' основы')
    }else{
      jQuery(".select--materials .osn").text(chek_osn + ' основ')
    }
   jQuery('.select--materials .text').hide();
    jQuery('.select--materials .clean').removeClass('dnone');
});
jQuery('.select--materials #pok').children(this).click(function(){
    var chek_pok = jQuery('#pok').find('input[type=checkbox]:checked').length
    if(chek_pok == 1){
      jQuery(".select--materials .pok").text(', ' + chek_pok + ' покрытие')
    }else if(chek_pok > 1){
      jQuery(".select--materials .pok").text(', ' + chek_pok + ' покрытия')
    }else{
      jQuery(".select--materials .pok").text(', ' + chek_pok + ' покрытий')
    }
    jQuery('.select--materials .text').hide();
  jQuery('.select--materials .clean').removeClass('dnone');
});
jQuery('.select--materials .clean').click(function(){
  jQuery('.select--materials .sexy-select__list input:checkbox').prop('checked', false);
  jQuery('.select--materials .text').show();
  jQuery('.select--materials .osn').text('');
  jQuery('.select--materials .pok').text('');
  jQuery('.select--materials .clean').addClass('dnone');
});



});

jQuery('.category-aside__chekbox-pros .country').click(function(){
  jQuery('.country__list').toggle('slow');
});

jQuery(document).ready(function(){
  jQuery(".owl-carousel").owlCarousel({
      items:1,
      nav:true,
      loop:true,
      navText: [
        '<svg class="icon icon-right-arrow"><use xlink:href="#icon-right-arrow"></use></svg>',
        '<svg class="icon icon-right-arrow"><use xlink:href="#icon-right-arrow"></use></svg>'
      ],



  });
});

jQuery(window).scroll(function () {
    if (jQuery(this).scrollTop() > 2500) {
        jQuery('#button-up').fadeIn();
    } else {
        jQuery('#button-up').fadeOut();
    }
});
jQuery('#button-up').click(function () {
    jQuery('body,html').animate({
        scrollTop: 0
    }, 500);
    return false;
});

var
priceNum = 1;

jQuery('.product-content__buy span').eq(0).click(function(){
  priceNum++
  jQuery('.product-content__buy #buy-num').attr('value',priceNum);

});
jQuery('.product-content__buy span').eq(1).click(function(){

  if(priceNum>1){
    priceNum--
    jQuery('.product-content__buy #buy-num').attr('value',priceNum);
  }else{
    jQuery('.product-content__buy #buy-num').attr('value','1');
  }


});


var
priceNum = 1;

jQuery('.cart-product__number span').eq(0).click(function(){
  priceNum++
  jQuery('.cart-product__number #buy-num').attr('value',priceNum);

});
jQuery('.cart-product__number span').eq(1).click(function(){

  if(priceNum>1){
    priceNum--
    jQuery('.cart-product__number #buy-num').attr('value',priceNum);
  }else{
  jQuery('.cart-product__number #buy-num').attr('value','1');
  }


});

jQuery(window).scroll(function () {
    jQuery('.main-header').removeClass('active');
    if (jQuery(this).scrollTop() > 500) {
        jQuery('.main-header').addClass('fixed');
        jQuery('.logotype img').attr({'src':'images/svg/logo.svg'});
    }else {
        jQuery('.main-header').removeClass('fixed');
        jQuery('.logotype img').attr({'src':'images/svg/logo-white.svg'});
    }
});

$.fn.scrollStopped = function(callback) {
  var that = this, $this = jQuery(that);
  $this.scroll(function(ev) {
    clearTimeout($this.data('scrollTimeout'));
    $this.data('scrollTimeout', setTimeout(callback.bind(that), 250, ev));
  });
};

jQuery(window).scrollStopped(function(ev){
  jQuery('.main-header').addClass('active');
});



function getWindowWidth() {
  return window.innerWidth || document.body.clientWidth;
}
var
 imga = document.getElementsByClassName('product-content__big-img')

if (getWindowWidth() <= 950) {
  for(var i=0;i < imga.length; i++){
    imga[i].removeAttribute('data-fancybox')
    imga[i].removeAttribute('href')

  }

}



  jQuery( function() {
jQuery( "#slider-range" ).slider({
  range: true,
  min: min_and_max_price.min,
  max: min_and_max_price.max,
  values: [ min_and_max_price.min , min_and_max_price.max ],
  slide: function( event, ui ) {
    jQuery( ".price1" ).html( "От " + "<span>" + ui.values[ 0 ]   + "</span>" + " до " + "<span>" + ui.values[ 1 ] + " <span class='rouble'> ₽</span>" + "</span>" );
    jQuery( ".price" ).html( "От " + "<span class='cont-box'>" + ui.values[ 0 ]  + " <span class='rouble'> ₽</span>" + "</span>" + " до " + "<span class='cont-box'>" + ui.values[ 1 ] + " <span class='rouble'> ₽</span>" + "</span>" );
  }
});

jQuery( ".price" ).html( "От " + "<span class='cont-box'>" +  jQuery( "#slider-range" ).slider( "values", 0 ) + " <span class='rouble'> ₽</span>" + "</span>" +
  " до " + "<span class='cont-box'>" +  jQuery( "#slider-range" ).slider( "values", 1 ) + " <span class='rouble'> ₽</span>" + "</span>" );
jQuery( ".price1" ).html( "Любая стоимость" );
} );

jQuery('#rulon').click(function(){

  jQuery( function() {
jQuery( "#slider-range" ).slider({
  range: true,
  min: min_and_max_price.min,
  max: min_and_max_price.max,
  values: [ min_and_max_price.min , min_and_max_price.max ],
  slide: function( event, ui ) {
    jQuery( ".price1" ).html( "От " + "<span>" + ui.values[ 0 ]   + "</span>" + " до " + "<span>" + ui.values[ 1 ] + " <span class='rouble'> ₽</span>" + "</span>" );
    jQuery( ".price" ).html( "От " + "<span class='cont-box'>" + ui.values[ 0 ]  + " <span class='rouble'> ₽</span>" + "</span>" + " до " + "<span class='cont-box'>" + ui.values[ 1 ] + " <span class='rouble'> ₽</span>" + "</span>" );
  }
});

jQuery( ".price" ).html( "От " + "<span class='cont-box'>" +  jQuery( "#slider-range" ).slider( "values", 0 ) + " <span class='rouble'> ₽</span>" + "</span>" +
  " до " + "<span class='cont-box'>" +  jQuery( "#slider-range" ).slider( "values", 1 ) + " <span class='rouble'> ₽</span>" + "</span>" );
jQuery( ".price1" ).html( "Любая стоимость" );
} );

});


jQuery('#m2').click(function(){
  jQuery( function() {
    jQuery( "#slider-range" ).slider({
      range: true,
      min: min_and_max_price_by_meter.min,
      max: min_and_max_price_by_meter.max,
      values: [ min_and_max_price.min , min_and_max_price.max ],
      slide: function( event, ui ) {
        jQuery( ".price1" ).html( "От " + "<span>" + ui.values[ 0 ]   + "</span>" + " до " + "<span>" + ui.values[ 1 ] + " <span class='rouble'> ₽</span>" + "</span>" );
        jQuery( ".price" ).html( "От " + "<span class='cont-box'>" + ui.values[ 0 ]  + " <span class='rouble'> ₽</span>" + "</span>" + " до " + "<span class='cont-box'>" + ui.values[ 1 ] + " <span class='rouble'> ₽</span>" + "</span>" );
      }
    });

    jQuery( ".price" ).html( "От " + "<span class='cont-box'>" +  jQuery( "#slider-range" ).slider( "values", 0 ) + " <span class='rouble'> ₽</span>" + "</span>" +
      " до " + "<span class='cont-box'>" +  jQuery( "#slider-range" ).slider( "values", 1 ) + " <span class='rouble'> ₽</span>" + "</span>" );
    jQuery( ".price1" ).html( "Любая стоимость" );
  } );





})





  jQuery('[data-fancybox="images"]').fancybox({
    buttons : [
      'fullScreen',
      'close'
    ],
    thumbs : {
    autoStart : true
  }
  });



  jQuery(document).ready(function(){



    jQuery('.slider-for').slick({
 slidesToShow: 1,
 slidesToScroll: 1,
 arrows: false,
 fade: true,
 asNavFor: '.slider-nav'
});
jQuery('.slider-nav').slick({
 slidesToShow: 5,
 slidesToScroll: 1,
 arrows: false,
 asNavFor: '.slider-for',
 dots: false,
 focusOnSelect: true
});
  });


jQuery('#buy-product').click(function(){
  jQuery('.cart-message').toggleClass('active');
});

jQuery('.main-header--right__cart').click(function(){

  jQuery('.main-header--right__cart-open').toggleClass('active');
  jQuery('.main-header--right__cart').toggleClass('active');


});

jQuery(document).mouseup(function (e){
        var div = jQuery('.main-header--right__cart-open');
        if (!div.is(e.target)
            && div.has(e.target).length === 0) {
            jQuery('.main-header--right__cart-open').removeClass('active');
            jQuery('.main-header--right__cart').removeClass('active');
        }
    });








jQuery('.cart-message .icon').click(function(){
  jQuery('.cart-message').removeClass('active');
});




	jQuery("#phone").inputmask("+7(999)999-99-99");

  jQuery("#emailus").inputmask({
    mask: "*{1,20}[.*{1,20}][.*{1,20}][.*{1,20}]@*{1,20}[.*{2,6}][.*{1,2}]",
    greedy: false,
    onBeforePaste: function (pastedValue, opts) {
      pastedValue = pastedValue.toLowerCase();
      return pastedValue.replace("mailto:", "");
    },
    definitions: {
      '*': {
        validator: "[0-9A-Za-z!#$%&'*+/=?^_`{|}~\-]",
        casing: "lower"
      }
    }
  });

jQuery('.next-page').click(function(){
  jQuery(".box-goods").append('<article class="goods-wallpaper"><a href="/page-product.html"><div class="goods-wallpaper__image"><img src="images/goods-wallpaper-2.jpg" alt="Grandeco Textured Plains TP "></div><div class="goods-wallpaper__type">Флазелиновые обои</div><h3>Grandeco Textured Plains TP</h3><footer class="goods-wallpaper__footer flex"><i class="arrrow"></i><div class="footer-bottom flex"><div class="goods-wallpaper__price">99 999 ₽<span> за рулон</span></div><svg class="icon icon-ittle-thin-left-arrow"><use xlink:href="#icon-ittle-thin-left-arrow"></use></svg></div></footer></a></article><article class="goods-wallpaper"><a href="/page-product.html"><div class="goods-wallpaper__image"><img src="images/goods-wallpaper-12.jpg" alt="Marburg Colani Evolution 56309"></div><div class="goods-wallpaper__type">Флазелиновые обои</div><h3>Marburg Colani Evolution 56309</h3><footer class="goods-wallpaper__footer flex"><i class="arrrow"></i><div class="footer-bottom flex"><div class="goods-wallpaper__price">99 999 ₽<span> за рулон</span></div><svg class="icon icon-ittle-thin-left-arrow"><use xlink:href="#icon-ittle-thin-left-arrow"></use></svg></div></footer></a></article><article class="goods-wallpaper"><a href="/page-product.html"><div class="goods-wallpaper__image"><img src="images/goods-wallpaper-2.jpg" alt="Grandeco Textured Plains TP "></div><div class="goods-wallpaper__type">Флазелиновые обои</div><h3>Grandeco Textured Plains TP</h3><footer class="goods-wallpaper__footer flex"><i class="arrrow"></i><div class="footer-bottom flex"><div class="goods-wallpaper__price">99 999 ₽<span> за рулон</span></div><svg class="icon icon-ittle-thin-left-arrow"><use xlink:href="#icon-ittle-thin-left-arrow"></use></svg></div></footer></a></article>');

});





  ;( function( window, document )
  {
  	'use strict';

  	var file     = 'images/svg/sprite.svg',
  		revision = 1;

  	if( !document.createElementNS || !document.createElementNS( 'http://www.w3.org/2000/svg', 'svg' ).createSVGRect )
  		return true;

  	var isLocalStorage = 'localStorage' in window && window[ 'localStorage' ] !== null,
  		request,
  		data,
  		insertIT = function()
  		{
  			document.body.insertAdjacentHTML( 'afterbegin', data );
  		},
  		insert = function()
  		{
  			if( document.body ) insertIT();
  			else document.addEventListener( 'DOMContentLoaded', insertIT );
  		};

  	if( isLocalStorage && localStorage.getItem( 'inlineSVGrev' ) == revision )
  	{
  		data = localStorage.getItem( 'inlineSVGdata' );
  		if( data )
  		{
  			insert();
  			return true;
  		}
  	}

  	try
  	{
  		request = new XMLHttpRequest();
  		request.open( 'GET', file, true );
  		request.onload = function()
  		{
  			if( request.status >= 200 && request.status < 400 )
  			{
  				data = request.responseText;
  				insert();
  				if( isLocalStorage )
  				{
  					localStorage.setItem( 'inlineSVGdata',  data );
  					localStorage.setItem( 'inlineSVGrev',   revision );
  				}
  			}
  		}
  		request.send();
  	}
  	catch( e ){}

  }( window, document ) );
