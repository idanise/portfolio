var textWrapper = document.querySelector('.ml3')
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
)

anime
  .timeline({ loop: true })
  .add({
    targets: '.ml3 .letter',
    opacity: [0, 1],
    easing: 'easeInOutQuad',
    duration: 2250,
    delay: (el, i) => 150 * (i + 1)
  })
  .add({
    targets: '.ml3',
    opacity: 0,
    duration: 1000,
    easing: 'easeOutExpo',
    delay: 1000
  })

//removing loader
$(window).on('load', function () {
  $('.loader .inner').fadeOut(500, function () {
    $('.loader').fadeOut(750)
  })

  $('.items').isotope({
    filter: '*',
    animationOptions: {
      duration: 1500,
      easing: 'linear',
      queue: false
    }
  })
})

//animating the backgrond
$(document).ready(function () {
  $('#slides').superslides({
    animation: 'fade',
    play: 5000,
    pagination: false
  })

  //looping through skillset
  const typed = new Typed('.typed', {
    strings: [
      'Software Engineer.',
      'Web Developer.',
      'Motion Graphics Designer.'
    ],
    typeSpeed: 70,
    loop: true,
    startDelay: 1000,
    showCursor: false
  })

  //skill set carousel
  $('.owl-carousel').owlCarousel({
    loop: true,
    itmes: 7,
    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 2
      },
      768: {
        items: 3
      },
      938: {
        items: 4
      }
    }
  })

  const skillsTopOffset = $('.skillsSection').offset().top
  const statsTopOffset = $('.statsSection').offset().top
  let countUpFinished = false

  $(window).scroll(function () {
    if (window.pageYOffset > skillsTopOffset - $(window).height() + 200) {
      $('.chart').easyPieChart({
        easing: 'easeInOut',
        barColor: '#fff',
        trackColor: false,
        scaleColor: false,
        lineWidth: 4,
        size: 152,
        onStep: function (from, to, percent) {
          $(this.el)
            .find('.percent')
            .text(Math.round(percent))
        }
      })
    }

    if (
      !countUpFinished &&
      window.pageYOffset > statsTopOffset - $(window).height() + 200
    ) {
      $('.counter').each(function () {
        var element = $(this)
        var endVal = parseInt(element.text())

        element.countup(endVal)
      })
      countUpFinished = true
    }
  })

  $('[data-fancybox]').fancybox()

  //filtering the selection for portfolio
  $('#filters a').click(function () {
    $('#filters .current').removeClass('current')
    $(this).addClass('current')

    const selector = $(this).attr('data-filter')
    $('.items').isotope({
      filter: selector,
      animationOptions: {
        duration: 1500,
        easing: 'linear',
        queue: false
      }
    })

    return false
  })

  //Enabling a smooth scrolling
  $('#navigation li a').click(function (e) {
    e.preventDefault()

    const targetElement = $(this).attr('href')
    const targetPosition = $(targetElement).offset().top
    $('html, body').animate(
      {
        scrollTop: targetPosition - 50
      },
      'slow'
    )
  })

  /*
  //making the navbar sticky
  const nav = $('#navigation')
  const navTop = nav.offset().top

  $(window).on('scroll', stickyNavigation)

  function stickyNavigation () {
    const body = $('body')

    if ($(window).scrollTop() >= navTop) {
      body.css('padding-top', nav.outerHeight() + 'px')
      body.addClass('fixedNav')
    } else {
      body.css('padding-top', 0)
      body.removeClass('fixedNav')
    }
  }
  */
})
