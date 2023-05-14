const sections = document.querySelectorAll('.js-scroll')

const initAnimationScroll = () => {
  if (sections.length) {
    const halfWindow = window.innerHeight * 0.8
    const sectionScroll = () => {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top
        const isSectionVisible = (sectionTop - halfWindow) < 0
        if (isSectionVisible) {
          section.classList.add('ativo')
        } else {
          section.classList.remove('ativo')
        }
      })
    }

    sectionScroll()

    window.addEventListener('scroll', sectionScroll)
  }
}

initAnimationScroll()