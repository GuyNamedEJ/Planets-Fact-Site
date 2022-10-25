const overviewBtn = document.getElementById('overview')
const structureBtn = document.getElementById('structure')
const surfaceBtn = document.getElementById('surface')
const overviewContent = document.getElementById('overview-content')
const structureContent = document.getElementById('structure-content')
const surfaceContent = document.getElementById('geology-content')
const planetImg = document.getElementById('planet-display')
const internalImg = document.getElementById('internal-display')
const surfaceImg = document.getElementById('geology-display')
const planetName = document.getElementById('name')
const activeClass = document.querySelector('.active')
  

overviewBtn.addEventListener("click", toggleOverview)
structureBtn.addEventListener("click", toggleStructure)
surfaceBtn.addEventListener("click", toggleSurface)



function toggleOverview()
{
    overviewBtn.classList.add('active')
    structureBtn.classList.remove('active')
    surfaceBtn.classList.remove('active')
    
    overviewContent.classList.add('show')
    structureContent.classList.add('hide')
    structureContent.classList.remove('show')
    surfaceContent.classList.add('hide')
    surfaceContent.classList.remove('show')

    planetImg.style.display = 'block'
    internalImg.style.display = 'none'
    surfaceImg.style.display = 'none'

}

function toggleStructure()
{
    // Remove active from other buttons
    overviewBtn.classList.remove('active')
    surfaceBtn.classList.remove('active')
    structureBtn.classList.add('active')

    overviewContent.classList.remove('show')
    overviewContent.classList.add('hide')
    structureContent.classList.remove('hide')
    structureContent.classList.add('show')
    surfaceContent.classList.add('hide')
    surfaceContent.classList.remove('show')

    planetImg.style.display = 'none'
    internalImg.style.display = 'block'
    surfaceImg.style.display = 'none'

}

function toggleSurface()
{
    // Remove active from other buttons
    overviewBtn.classList.remove('active')
    surfaceBtn.classList.add('active')
    structureBtn.classList.remove('active')

    overviewContent.classList.remove('show')
    overviewContent.classList.add('hide')
    structureContent.classList.add('hide')
    structureContent.classList.remove('show')
    surfaceContent.classList.remove('hide')
    surfaceContent.classList.add('show')

    planetImg.style.display = 'block'
    internalImg.style.display = 'none'
    surfaceImg.style.display = 'block'

}

switch(planetName.innerHTML){
    case 'Mercury':
       
        break;

}
