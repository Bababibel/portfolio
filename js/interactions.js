/* Panel management*/
const crossPanel = document.getElementById("cross")
const panel = document.getElementById("panel")
const panelTitle = document.getElementById("panel-title")

let allSections = ['education', 'work-experience', 'projects', 'skills']
allSections.forEach(s => {
    document.getElementById(s).style.display = 'none'
});

let loadedSection = ""

function togglePanel(section) {
    if (section === undefined || section === loadedSection) {
        // Close panel
        panel.dataset.panelOpened = 'false'
        if (loadedSection !== "") {
            let previousElement = document.getElementById(loadedSection)
            previousElement.style.display = 'none'
        }
        loadedSection = ""
        return
    }
    panel.dataset.panelOpened = 'true'
    let element = document.getElementById(section)
    if (element == null) {
        console.log("Error, section '" + section + "' is not a valid section ID.")
        return
    }
    element.style.display = 'flex'
    panelTitle.innerHTML = section
    if (loadedSection === "") {
        loadedSection = section
        return
    }
    let previousElement = document.getElementById(loadedSection)
    previousElement.style.display = 'none'
    loadedSection = section
}

// DEBUG //
// panel.dataset.panelOpened = 'true'
// document.getElementById("skills").style.display = 'flex'
// panelTitle.innerHTML = "skills"
// END-DEBUG //

/* Desktop mode swap */
const body = document.getElementsByTagName('body')[0]
const loadingScreen = document.getElementById('loading-screen')
const indicator = document.getElementById('indicator')
const loadingProgress = document.getElementById('loading-progress')
const loadingP = document.getElementById('loading-p')

function desktopMode() {
    if (window.screen.width <= 700) {
        // Phone mode
        togglePanel()
        return
    }
    // Swap a value to another, but right before, reset loading-screen background to hide the quick changes before the page reload
    replayAnimation(loadingScreen)
    replayAnimation(indicator)
    replayAnimation(loadingProgress)
    replayAnimation(loadingP)
    if (body.dataset.desktopMode === "ubuntu") {
        body.dataset.desktopMode = "windows"
    } else {
        body.dataset.desktopMode = "ubuntu"
    }
}

function replayAnimation(element) {
    element.style.animation = 'none';
    element.offsetHeight; /* trigger reflow */
    element.style.animation = null; 
}


/* Window size changed (detect small screen to put then on windows desktop mode) */
function windowSizeChanged() {
    if (window.screen.width <= 700) {
        body.dataset.desktopMode = "windows"
    }
}
windowSizeChanged()
window.addEventListener('resize', windowSizeChanged)


