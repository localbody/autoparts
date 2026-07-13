const onLoad = () => {
  // FAQ

  const listFaqItem = document.querySelectorAll('.faq__item')

  const onClickFaqItem = (event) => {
    if (event.currentTarget.classList.contains('faq__item--active')) {
      event.currentTarget.classList.remove('faq__item--active')
    } else {
      document
        .querySelector('.faq__item--active')
        ?.classList.remove('faq__item--active')
      event.currentTarget.classList.add('faq__item--active')
    }
  }

  listFaqItem.forEach((item) => {
    item.addEventListener('click', onClickFaqItem)
  })

  // video
  const playVideoButtons = document.querySelectorAll('.video__button-play')

  const onClickPlayVideoButton = (event) => {
    // console.log(event.target.closest('.video__content').querySelector('video'))

    const videoContent = event.target.closest('.video__content')
    const video = videoContent.querySelector('video')

    videoContent.classList.add('no-after')
    event.target.setAttribute('hidden', true)

    video.setAttribute('controls', true)
    video.play()
  }

  playVideoButtons.forEach((button) => {
    button.addEventListener('click', onClickPlayVideoButton)
  })

  // horizontal slider
  const slider = document.querySelector('.horizontal-scroll')

  let isDown = false
  let startX = 0
  let scrollLeft = 0

  slider.addEventListener('mousedown', (e) => {
    isDown = true
    slider.style.cursor = 'grabbing'
    startX = e.pageX - slider.offsetLeft
    scrollLeft = slider.scrollLeft
  })

  slider.addEventListener('mouseleave', () => {
    isDown = false
    slider.style.cursor = 'grab'
  })

  slider.addEventListener('mouseup', () => {
    isDown = false
    slider.style.cursor = 'grab'
  })

  slider.addEventListener('mousemove', (e) => {
    if (!isDown) return
    e.preventDefault()
    const x = e.pageX - slider.offsetLeft
    const walk = (x - startX) * 1.5
    slider.scrollLeft = scrollLeft - walk
  })

  // swiper
  var swiper = new Swiper('.heroSwiper', {
    loop: true,
    navigation: {
      nextEl: '.swiper-nav .next',
      prevEl: '.swiper-nav .prev',
    },
    pagination: {
      el: '.swiper-nav .pagination',
    },
  })
}

window.addEventListener('load', onLoad)
