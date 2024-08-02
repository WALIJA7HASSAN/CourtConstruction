document.getElementById('menu-icon').addEventListener('click', function () {
  const menu = document.getElementById('menu')
  const icon = document.getElementById('menu-icon')

  // Check if the menu is currently hidden
  if (menu.classList.contains('-translate-y-[120%]')) {
    // Show the menu
    menu.classList.remove('-translate-y-[120%]')
    menu.classList.add('translate-y-0')
    icon.classList.remove('bx-menu')
    icon.classList.add('bx-x')
  } else {
    // Hide the menu
    menu.classList.add('-translate-y-[120%]')
    menu.classList.remove('translate-y-0')
    icon.classList.remove('bx-x')
    icon.classList.add('bx-menu')
  }
})

// project gallery

const galleryContent = [
  {
    imgUrl: './assets/galleryImg1.jpg',
    btnContent: 'Join The Family',
    mainUrl: './prices.html',
    title: 'Netball Club Court.',
    paragraph:
      '"The team were very helpful and professional throughout the entire project and went above and beyond to complete the project within the allocated time-frame and assist in dealing with council and government departments. They liaised with us continuously throughout the project to ensure that we were happy with every step. We had utmost confidence in their ability to complete the project and strongly recommend their services to anyone wanting sports court construction. We are extremely happy with the finished product."',
    paraName: 'Pittsworth & District Wildcats Netball Club, Toowoomba',
  },
  {
    imgUrl: './assets/galleryImg2.jpg',
    btnContent: 'Contact Us Today',
    mainUrl: './contact.html',
    title: 'Private Tennis Court',
    paragraph:
      '"We just wanted to say thank you so much for our beautiful court.  We really appreciate everything you did for us - going above and beyond to get the quality finish we’ve achieved.  The team were an absolute pleasure to have on site, and their eye for detail was outstanding! Again we are delighted with our gorgeous new court!!"',
    paraName: 'Andrew & Helen, Toowoomba',
  },
  {
    imgUrl: './assets/galleryImg3.jpg',
    btnContent: 'Contact Us Today',
    mainUrl: './contact.html',
    title: 'Fassifern Netball Association',
    paragraph:
      '"We would like to say a huge thank you to Darling Downs Court Constructions for their assistance in resurfacing our netball courts.  We found them extremely helpful and professional and the quality of work they have done is fantastic... We feel like we are in good hands and look forward to getting the rest of our courts done in the near future. Thanks again."',
    paraName: 'Amanda, Scenic Rim',
  },
  {
    imgUrl: './assets/galleryImg4.jpg',
    btnContent: 'Learn More',
    mainUrl: './services.html',
    title: 'Toowoomba Anglican College',
    paragraph:
      '"We engaged Darling Downs Court Constructions to resurface our school multi-purpose tennis, netball and basketball courts. From the design phase to the installation process, the team were professional throughout and a pleasure to work with.  I was particularly impressed with the attention to detail and quality of finish."',
    paraName: 'Simon, Toowoomba',
  },
  {
    imgUrl: './assets/galleryImg5.jpg',
    btnContent: 'Upgrade Your Court',
    mainUrl: '#',
    title: 'The Summit State School',
    paragraph:
      '"We recently had our synthetic grass tennis court resurfaced and surrounding fence replaced by Darling Downs Court Constructions. The work was completed within the specified time frame to a high standard and at a competitive price. The team were professional and courteous and we would not hesitate to recommend their services."',
    paraName: 'Danni, Southern Downs',
  },
  {
    imgUrl: './assets/galleryImg6.jpg',
    btnContent: 'Join The Family',
    mainUrl: './prices.html',
    title: 'Home Tennis Court',
    paragraph: `"Thank you on building our tennis court in 2013.  At the time it was just our son playing tennis, but the following year our middle daughter started playing, and this year my youngest daughter started playing fixtures, too.<br/> I just wanted to let you know that we are using it nearly every day and it has been one of the best investments in our childrens' sport and health."`,
    paraName: 'Christine & Dean, Toowoomba',
  },
]

document.addEventListener('DOMContentLoaded', () => {
  let currentGalleryIndex = 0
  const gallerySection = document.getElementById('gallery-section')
  const galleryBg = document.getElementById('gallery-bg')
  const galleryTitle = document.getElementById('gallery-title')
  const galleryParagraph1 = document.getElementById('gallery-paragraph1')
  const galleryParaName = document.getElementById('gallery-para-name')
  const galleryBtn = document.getElementById('gallery-btn')
  const galleryLink = document.getElementById('gallery-link')
  const galleryLeftArrow = document.getElementById('gallery-left-arrow')
  const galleryRightArrow = document.getElementById('gallery-right-arrow')
  let autoGallerySwitchInterval

 

  function updateGalleryContent(index) {
    console.log('Updating gallery content for index:', index)
    galleryBg.style.backgroundImage = `url('${galleryContent[index].imgUrl}')`
    galleryTitle.textContent = galleryContent[index].title
    galleryParagraph1.textContent = galleryContent[index].paragraph
    galleryParaName.textContent = galleryContent[index].paraName
    galleryBtn.textContent = galleryContent[index].btnContent
    galleryLink.href = galleryContent[index].mainUrl
  }

  function fadeGalleryTransition() {
    galleryLink.classList.add('hide')
    setTimeout(() => {
      updateGalleryContent(currentGalleryIndex)
      galleryLink.classList.remove('hide')
    }, 500)
  }

  function startAutoGallerySwitchContent() {
    autoGallerySwitchInterval = setInterval(() => {
      currentGalleryIndex = (currentGalleryIndex + 1) % galleryContent.length
      fadeGalleryTransition()
    }, 3000)
  }

  function resetAutoGallerySwitchContent() {
    clearInterval(autoGallerySwitchInterval)
    startAutoGallerySwitchContent()
  }

  galleryLeftArrow.addEventListener('click', () => {
    currentGalleryIndex =
      (currentGalleryIndex - 1 + galleryContent.length) % galleryContent.length
    fadeGalleryTransition()
    resetAutoGallerySwitchContent()
  })

  galleryRightArrow.addEventListener('click', () => {
    currentGalleryIndex = (currentGalleryIndex + 1) % galleryContent.length
    fadeGalleryTransition()
    resetAutoGallerySwitchContent()
  })

  updateGalleryContent(currentGalleryIndex)
  galleryLink.classList.remove('hide') // Ensure the content is visible on initial load
  startAutoGallerySwitchContent()
})



// slider
document.addEventListener('DOMContentLoaded', () => {
  const tennisContainer = document.getElementById('tennis-court-image-wrapper')
  const tennisSlider = document.getElementById('tennis-slider')
  tennisContainer.style.setProperty('--position', '50%') // Set initial position
  tennisSlider.addEventListener('input', (e) => {
    tennisContainer.style.setProperty('--position', `${e.target.value}%`)
  })

  const netballContainer = document.getElementById(
    'netball-court-image-wrapper'
  )
  const netballSlider = document.getElementById('netball-slider')
  netballContainer.style.setProperty('--position', '50%') // Set initial position
  netballSlider.addEventListener('input', (e) => {
    netballContainer.style.setProperty('--position', `${e.target.value}%`)
  })
})

// back to top
document.addEventListener('DOMContentLoaded', () => {
  const backToTopBtn = document.getElementById('backToTopBtn')

  const toggleBackToTopBtn = () => {
    const scrollPosition = window.scrollY + window.innerHeight
    const documentHeight = document.documentElement.scrollHeight
    const threshold = documentHeight - 100 // Adjust this value as needed

    if (window.innerWidth < 768) {
      // Show on smaller screens if near bottom
      if (scrollPosition >= threshold) {
        backToTopBtn.classList.remove('hidden')
      } else {
        backToTopBtn.classList.add('hidden')
      }
    } else {
      // Hide on larger screens by default
      backToTopBtn.classList.add('hidden')
    }
  }

  const scrollToTop = (event) => {
    event.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  window.addEventListener('scroll', toggleBackToTopBtn)
  window.addEventListener('resize', toggleBackToTopBtn)
  backToTopBtn.addEventListener('click', scrollToTop)

  // Initial check in case the page is loaded near the bottom
  toggleBackToTopBtn()
})
