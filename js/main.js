$(document).ready(function () {
  //Navigation menu scrollTo
  $('header nav ul li a').click(function (event) {
    event.preventDefault()
    var section = $(this).attr('href')
    var section_pos = $(section).position()

    if (section_pos) {
      $(window).scrollTo({ top: section_pos.top, left: '0px' }, 1000)
    }
  })

  $('.app_link').click(function (e) {
    event.preventDefault()
    $(window).scrollTo({ top: $('#hero').position().top, left: '0px' }, 1000)
  })

  //Show & Hide menu on mobile
  $('.burger_icon').click(function () {
    $('header nav').toggleClass('show')
    $('header .burger_icon').toggleClass('active')
  })

  //wow.js on scroll animations initialization
  wow = new WOW({
    animateClass: 'animated',
    mobile: false,
    offset: 50,
  })
  wow.init()

  //parallax effect initialization
  $('.hero').parallax('50%', 0.3)

  //Nice scroll initialization
  $('html').niceScroll({
    scrollspeed: 50,
    autohidemode: false,
    cursorwidth: 8,
    cursorborderradius: 8,
    cursorborder: '0',
    background: 'rgba(48, 48, 48, .4)',
    cursorcolor: '#1f1f1f',
    zindex: 999,
  })

  //Testimonials slider initialization
  $('#tslider').owlCarousel({
    items: 1,
    navigation: true,
    pagination: false,
    slideSpeed: 300,
    paginationSpeed: 400,
    singleItem: true,
    responsive: true,
    autoPlay: true,
    transitionStyle: 'fade',
  })

  //Mailchimp subscription form initialization
  $('#submit_form').submit(function () {
    $('#mc_submit').attr('disabled', 'disabled')
    processing('icon', 'loading')
  })

  if ($('#submit_form').length) {
    //Mailchim Subscription form
    $('#submit_form').ajaxChimp({
      callback: chimpResponce,
    })
  }

  //Mail chimp callback function
  function chimpResponce(resp) {
    if (resp.result === 'success') {
      processing('loading', 'icon')
      $('#mc_submit').removeAttr('disabled', 'disabled')
      $('#submit_form #mc-email').val('')
      $('#error_msg').hide()
      $('#success_msg').show()
    } else {
      processing('loading', 'icon')
      $('#success_msg').hide()
      $('#error_msg').show()
      $('#mc_submit').removeAttr('disabled', 'disabled')
    }
  }

  function processing(hide, show) {
    $('#mc_submit i').removeClass(hide).addClass(show)
  }

  //Popup video
  $('#play_video').click(function (e) {
    e.preventDefault()

    var video_link = $(this).data('video')
    video_link =
      '<iframe src="' +
      video_link +
      '" width="500" height="208" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'

    $('.about_video').append(video_link).fadeIn(200)
  })

  $('.close_video').click(function (e) {
    e.preventDefault()

    $('.about_video').fadeOut(200, function () {
      $('iframe', this).remove()
    })
  })
})
$(document).ready((function(){function e(e,i){$("#mc_submit i").removeClass(e).addClass(i)}$("header nav ul li a").click((function(e){e.preventDefault();var i=$(this).attr("href"),o=$(i).position();o&&$(window).scrollTo({top:o.top,left:"0px"},1e3)})),$(".app_link").click((function(e){event.preventDefault(),$(window).scrollTo({top:$("#hero").position().top,left:"0px"},1e3)})),$(".burger_icon").click((function(){$("header nav").toggleClass("show"),$("header .burger_icon").toggleClass("active")})),wow=new WOW({animateClass:"animated",mobile:!1,offset:50}),wow.init(),$(".hero").parallax("50%",.3),$("html").niceScroll({scrollspeed:50,autohidemode:!1,cursorwidth:8,cursorborderradius:8,cursorborder:"0",background:"rgba(48, 48, 48, .4)",cursorcolor:"#1f1f1f",zindex:999}),$("#tslider").owlCarousel({items:1,navigation:!0,pagination:!1,slideSpeed:300,paginationSpeed:400,singleItem:!0,responsive:!0,autoPlay:!0,transitionStyle:"fade"}),$("#submit_form").submit((function(){$("#mc_submit").attr("disabled","disabled"),e("icon","loading")})),$("#submit_form").length&&$("#submit_form").ajaxChimp({callback:function(i){"success"===i.result?(e("loading","icon"),$("#mc_submit").removeAttr("disabled","disabled"),$("#submit_form #mc-email").val(""),$("#error_msg").hide(),$("#success_msg").show()):(e("loading","icon"),$("#success_msg").hide(),$("#error_msg").show(),$("#mc_submit").removeAttr("disabled","disabled"))}}),$("#play_video").click((function(e){e.preventDefault();var i=$(this).data("video");i='<iframe src="'+i+'" width="500" height="208" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',$(".about_video").append(i).fadeIn(200)})),$(".close_video").click((function(e){e.preventDefault(),$(".about_video").fadeOut(200,(function(){$("iframe",this).remove()}))}))}));