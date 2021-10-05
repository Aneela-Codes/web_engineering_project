const header = document.querySelector("nav")

const sections = document.querySelectorAll('section');
const links = document.querySelectorAll('.nav-item')
console.log(links);
 const header_height = header.offsetHeight

const add_class_on_scroll = () => header.classList.add("fade-in")
const remove_class_on_scroll = () => header.classList.remove("fade-in")



window.addEventListener('scroll', function() { 

  scrollpos = window.scrollY;

  if (scrollpos >= header_height) { add_class_on_scroll() }
  else { remove_class_on_scroll() }

  let currentSection = ''

  sections.forEach( section => {
    const sectionTop = section.offsetTop ;
    const sectionHeight = section.clientHeight;
    if(scrollpos >= (sectionTop - sectionHeight / 3)){
      currentSection = section.getAttribute('id')
    }
  })
  console.log(currentSection);
    links.forEach( link  =>{
      link.classList.remove('active')
      if(link.classList.contains(currentSection)){
        link.classList.add('active')
      }
    })
})

// --------------------------------PANELS------------------
let panelButtons = document.querySelectorAll(".button_container button")
let panelTabs = document.querySelectorAll(".tabContainer .panel")

const showPanels = (index) => {
  let colorCode = "teal"
  panelButtons.forEach( (node) => {
    node.style.backgroundColor = ""
    node.style.color=""
  })
  panelTabs.forEach((node) => {
    node.style.display="none"
  })
  panelButtons[index].style.backgroundColor = colorCode;
  panelButtons[index].style.color = "white"
  panelTabs[index].style.display= "block"
  // panelTabs[index].style.backgroundColor = colorCode;
  // panelTabs[index].style.color = white;
}

showPanels(0)

// -----------------------------------------Active class-------------------------

// const sections = document.querySelectorAll('section');
// const links = document.querySelectorAll('.nav-item a')

// console.log(links);