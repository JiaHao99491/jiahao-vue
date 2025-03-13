export function initThemeSwitcher() {
  if (document) {
    const targetNode = document.querySelector('html') as HTMLElement
    setTheme()

    const config = { attributes: true }

    const callback = (mutationList, observer) => {
      for (const mutation of mutationList) {
        if (mutation.attributeName === 'class') {
          setTheme()
        }
      }
    }

    function setTheme() {
      const isDark = targetNode.classList.contains('dark')
      if (isDark) {
        targetNode.setAttribute('data-theme', 'dark')
      } else {
        targetNode.setAttribute('data-theme', 'light')
      }
    }

    const observer = new MutationObserver(callback)

    observer.observe(targetNode, config)
  }
}
