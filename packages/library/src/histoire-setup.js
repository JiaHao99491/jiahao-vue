import './assets/tailwind.css'

const targetNode = document.querySelector('html')
setTheme()

function setTheme() {
  const isDark = targetNode.classList.contains('htw-dark')
  if (isDark) {
    targetNode.setAttribute('data-theme', 'dark')
  } else {
    targetNode.setAttribute('data-theme', 'light')
  }
}

const callback = (mutationList) => {
  for (const mutation of mutationList) {
    if (mutation.attributeName === 'class') {
      setTheme()
    }
  }
}

const observer = new MutationObserver(callback)

observer.observe(targetNode, {
  attributes: true,
})
