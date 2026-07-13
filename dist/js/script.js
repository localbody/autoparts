const onLoad = () => {
  //
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
  //
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
