const filters = document.querySelector('.preview-filters')
const cards = [...document.querySelectorAll('.preview-card')]
const grid = document.querySelector('.preview-projects')
const progress = document.querySelector('.preview-progress')
const status = document.getElementById('filter-status')
const chinese = document.documentElement.lang === 'zh-CN'
if (filters && grid) {
    filters.hidden = false
    filters.addEventListener('click', event => {
        const button = event.target.closest('button[data-filter]')
        if (!button) return
        const selected = button.dataset.filter
        filters.querySelectorAll('button').forEach(item => item.setAttribute('aria-pressed', String(item === button)))
        for (const card of cards) card.hidden = selected !== 'all' && card.dataset.category !== selected
        grid.dataset.filtered = String(selected !== 'all')
        const selectedCount = [...grid.querySelectorAll('.preview-card')].filter(card => !card.hidden).length
        document.querySelector('.preview-work-heading h2 span').textContent = String(selectedCount).padStart(2,'0')
        if (progress) progress.hidden = ![...progress.querySelectorAll('.preview-card')].some(card => !card.hidden)
        const count = cards.filter(card => !card.hidden).length
        status.textContent = chinese ? `显示 ${count} 个项目。` : `${count} projects shown.`
    })
}
