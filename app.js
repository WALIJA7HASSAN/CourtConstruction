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


// hero
const HeroContent = [
  {
    imgUrl: './assets/heroImg1.jpg',
    btnContent: 'Get Your Free Quote Today',
    mainUrl: '#',
    title: 'Turnkey tennis & multi-sports courts.',
    paragraph:
      'We are the premier sports court construction company in Queensland, providing a fully inclusive package for your new court needs. NO hidden costs! Contact us today for a quote.',
  },
  {
    imgUrl: './assets/heroImg2.jpg',
    btnContent: 'Choose Your Surface',
    mainUrl: '#',
    title: 'Resurface tired old courts.',
    paragraph:
      'Weather, wear and time can take a toll on your once-beautiful court surface. Call us to add new life to your court, poles, goals, nets and fencing... we are your one-stop-shop!',
  },
  {
    imgUrl: './assets/heroImg3.jpg',
    btnContent: 'Enquire Today',
    mainUrl: './contact.html',
    title: 'Maintenance-free indoor/outdoor zones.',
    paragraph:
      "For those areas that simply don't grow grass well, make use of the area again by installing synthetic turf. Call us today for to learn more about the wide variety available.",
  },
]

let currentIndex = 0
const heroSection = document.getElementById('hero-section')
const heroBg = document.getElementById('hero-bg')
const heroTitle = document.getElementById('hero-title')
const heroParagraph = document.getElementById('hero-paragraph')
const heroBtn = document.getElementById('hero-btn')
const heroLink = document.getElementById('hero-link')
const leftArrow = document.getElementById('left-arrow')
const rightArrow = document.getElementById('right-arrow')
let autoSwitchInterval

function updateHeroContent(index) {
  heroBg.style.backgroundImage = `url('${HeroContent[index].imgUrl}')`
  heroTitle.textContent = HeroContent[index].title
  heroParagraph.textContent = HeroContent[index].paragraph
  heroBtn.textContent = HeroContent[index].btnContent
  heroLink.href = HeroContent[index].mainUrl
}

function fadeTransition() {
  const heroContent = document.getElementById('hero-content')
  heroContent.style.opacity = 0
  setTimeout(() => {
    updateHeroContent(currentIndex)
    heroContent.style.opacity = 1
  }, 500)
}

function startAutoSwitchContent() {
  autoSwitchInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % HeroContent.length
    fadeTransition()
  }, 3000)
}

function resetAutoSwitchContent() {
  clearInterval(autoSwitchInterval)
  startAutoSwitchContent()
}

leftArrow.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + HeroContent.length) % HeroContent.length
  fadeTransition()
  resetAutoSwitchContent()
})

rightArrow.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % HeroContent.length
  fadeTransition()
  resetAutoSwitchContent()
})

updateHeroContent(currentIndex)
startAutoSwitchContent()

// contact form
function validateForm() {
  let isValid = true
  const requiredFields = document.querySelectorAll(
    'input[required], select[required], textarea[required]'
  )
  requiredFields.forEach((field) => {
    if (!field.value) {
      field.classList.remove('border-gray-400')
      field.classList.add('border-[#bf2628]')
      field.setCustomValidity('This field is required')
      isValid = false
    } else {
      field.classList.remove('border-[#bf2628]')
      field.classList.add('border-gray-400')
      field.setCustomValidity('')
    }
  })
  return isValid
}

