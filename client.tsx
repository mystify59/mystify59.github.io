import * as React from 'react'
import { hydrateRoot } from 'react-dom/client'
import ExplodedProjectCover from './ExplodedProjectCover'

for (const container of document.querySelectorAll<HTMLElement>('.cover-mount')) {
    hydrateRoot(container, <ExplodedProjectCover projectSlug={container.dataset.project}/>)
}

const dialog = document.querySelector<HTMLDialogElement>('.lightbox')
if (dialog) {
    const expanded = dialog.querySelector<HTMLImageElement>('img')!
    document.querySelectorAll<HTMLButtonElement>('.image-zoom').forEach(button => {
        button.addEventListener('click', () => {
            const image = button.querySelector<HTMLImageElement>('img')!
            expanded.src = image.src
            expanded.alt = image.alt
            dialog.showModal()
        })
    })
    dialog.querySelector('.lightbox-close')!.addEventListener('click', () => dialog.close())
    dialog.addEventListener('click', event => {
        if (event.target === dialog) dialog.close()
    })
}
