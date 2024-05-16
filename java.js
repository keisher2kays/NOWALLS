const menu = document.querySelector('.menu-btn');
const topLeftSlider = document.querySelector('.top-left-slide');
const bottomLeftSlider = document.querySelector('.bottom-left-slide');

const topRightSlider = document.querySelector('.top-right-slide');
const middleRightSlider = document.querySelector('.middle-right-slide');
const bottomRightSlider = document.querySelector('.bottom-right-slide');

const eksOne = document.querySelector('.eks-one');
const eksTwo = document.querySelector('.eks-two');
const eksThree = document.querySelector('.eks-three');

var isOpen = false;

menu.addEventListener('click', () => {
  topLeftSlider.classList.toggle('top-left-slide-show');
  bottomLeftSlider.classList.toggle('bottom-left-slide-show');
  topRightSlider.classList.toggle('top-right-slide-show');
  middleRightSlider.classList.toggle('middle-right-slide-show');
  bottomRightSlider.classList.toggle('bottom-right-slide-show');
  eksTwo.classList.toggle('eks-two-fade');
  
  const tl = gsap.timeline();
  const tlEksThree = gsap.timeline();
  
  if(!isOpen) {
    tl.to('.eks-one', {
      y: isOpen? 0 : 9,
    })
      .to('.eks-one', {
      rotate: isOpen? 0 : 45
    })
    
    tlEksThree.to('.eks-three', {
      y: isOpen? 0 : -9,
    })
      .to('.eks-three', {
      rotate: isOpen? 0 : -45
    })
  }
  else {
    tl.to('.eks-one', {
      rotate: isOpen? 0 : 45,
    })
      .to('.eks-one', {
      y: isOpen? 0 : 9,
    })
    
    tlEksThree.to('.eks-three', {
      rotate: isOpen? 0 : -45
    })
      .to('.eks-three', {
      y: isOpen? 0 : -9
    })
  }
  
  isOpen = !isOpen
})

// Add event listeners to navigation links
const navLinks = document.querySelectorAll('.nav-links');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    // Hide the wrapper when a link is clicked
    topLeftSlider.classList.remove('top-left-slide-show');
    bottomLeftSlider.classList.remove('bottom-left-slide-show');
    topRightSlider.classList.remove('top-right-slide-show');
    middleRightSlider.classList.remove('middle-right-slide-show');
    bottomRightSlider.classList.remove('bottom-right-slide-show');
    eksTwo.classList.remove('eks-two-fade');
    isOpen = false; // Set isOpen to false to indicate that the menu is closed
  });
});

gsap.from('.simple', {
  x: -100,
  duration: 1
})
gsap.from('.menu', {
  x: -100,
  duration: 1.2,
  delay: 0.3,
  opacity: 0
})
gsap.from('.navi', {
  y: -500,
  duration: 2.,
  delay: 0.4,
  opacity: 0
})


