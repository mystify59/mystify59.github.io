import * as React from 'react'
import { hydrateRoot } from 'react-dom/client'
import ExplodedProjectCover from './ExplodedProjectCover'

const chinese = document.documentElement.lang === 'zh-CN'
for (const container of document.querySelectorAll<HTMLElement>('.cover-mount')) {
    hydrateRoot(container, <ExplodedProjectCover projectSlug={container.dataset.project} chinese={chinese}/>)
}

const switchLanguage = document.querySelector<HTMLAnchorElement>('.language-switch')
if (switchLanguage) {
    const target = new URL(switchLanguage.href)
    const keepSection = () => {
        target.hash = window.location.hash
        switchLanguage.href = target.href
    }
    keepSection()
    window.addEventListener('hashchange', keepSection)
}

const dialog = document.querySelector<HTMLDialogElement>('.lightbox')
if (dialog) {
    const expanded = dialog.querySelector<HTMLImageElement>('img')!
    document.querySelectorAll<HTMLButtonElement>('.image-zoom').forEach(button => {
        button.addEventListener('click', () => {
            const image = button.querySelector<HTMLImageElement>('img')!
            expanded.src = button.dataset.fullSrc || image.currentSrc || image.src
            expanded.alt = image.alt
            dialog.showModal()
        })
    })
    dialog.querySelector('.lightbox-close')!.addEventListener('click', () => dialog.close())
    dialog.addEventListener('click', event => {
        if (event.target === dialog) dialog.close()
    })
}
