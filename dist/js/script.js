const onLoad = () => {
  // expand-collapse
  checkboxesExpandCollapse = document.querySelectorAll(
    '.expand-collapse__checkbox',
  )

  const onChangeCheckboxExpandCollapse = (event) => {
    console.log(event.target, event.target.checked, event.target.id)

    const id = event.target.id

    elementExpandCollapse = document.querySelector(
      `[data-expand-collapse="${id}"]`,
    )

    if (event.target.checked) {
      elementExpandCollapse?.classList.add('collapse')
    } else {
      elementExpandCollapse?.classList.remove('collapse')
    }
  }

  checkboxesExpandCollapse.forEach((item) => {
    item.addEventListener('change', onChangeCheckboxExpandCollapse)
  })

  // input phone
  const inputTelItems = document.querySelectorAll('.tel')
  const maskOptions = {
    mask: '+{7}(000)000-00-00',
  }

  inputTelItems.forEach((item) => {
    const mask = IMask(item, maskOptions)
  })

  // popup
  const openPopupRecordOnlineItems = document.querySelectorAll(
    '[data-action="popup-get-catalog"]',
  )

  const closePopup = (popup) => {
    popup?.classList.remove('popup--open')
    document.querySelector('body').classList.remove('body--overflow')
  }

  const onKeyDown = (event, popup) => {
    if (event.key === 'Escape') {
      const popup = document.querySelector('[data-popup="get-catalog"]')

      closePopup(popup)
    }
  }

  document.addEventListener('keydown', onKeyDown)

  const onClickOpenPopupRecordOnline = () => {
    const popup = document.querySelector('[data-popup="get-catalog"]')

    if (popup) {
      popup.classList.add('popup--open')
    }
    document.querySelector('body').classList.add('body--overflow')
  }

  openPopupRecordOnlineItems.forEach((item) => {
    item.addEventListener('click', onClickOpenPopupRecordOnline)
  })

  const popupCloseItems = document.querySelectorAll(
    '[data-action="popup-close"]',
  )

  const onClickPopupClose = (event) => {
    console.log(event.target, event.currentTarget)
    const popup = event.target.closest('.popup')

    closePopup(popup)
  }

  popupCloseItems.forEach((item) => {
    item.addEventListener('click', onClickPopupClose)
  })

  //cookies
  if (!localStorage.getItem('accept--cookies')) {
    document.querySelector('.cookies')?.classList.add('cookies--show')
  }

  const btnAcceptCookies = document.querySelector(
    '[data-action="accept-cookies"]',
  )

  const onClickBtnAcceptCookies = () => {
    localStorage.setItem('accept--cookies', true)
    document.querySelector('.cookies').classList.remove('cookies--show')
  }

  btnAcceptCookies?.addEventListener('click', onClickBtnAcceptCookies)

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

  if (slider) {
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
  }

  // swiper

  if (typeof Swiper !== 'undefined') {
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
}

window.addEventListener('load', onLoad)
