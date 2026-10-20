import * as React from 'react'
import ExplodedProjectCover from './ExplodedProjectCover'

const biography = 'Design Engineering student at Imperial College London, working across product design, mechanical engineering and robotics.'
const email = 'jw4424@ic.ac.uk'
const avatar = 'https://framerusercontent.com/images/S9hhA7RVIq3CuUn5Xm74zwBns.png'
const portrait = avatar

type Project = {
    slug: string; title: string; company: string; year?: string; description: string;
    role: string; timeline: string; team: string; platform: string;
    coverImage: string; heroImage: string; hoverImage?: string; cardSummary?: string; heroCaption?: string; coverAlt?: string; coverFit?: 'contain';
    destination?: string; kind?: string; backHref?: string; backLabel?: string;
    sections: {name: string; heading: string; blocks: {type: string; text?: string; src?: string; alt?: string; href?: string}[]}[]
}

export function projectRoute(project: Project) {
    return (project.destination || '/case-studies/' + project.slug + '/').replace(/^\/+|\/+$/g, '')
}

export function Page({page, projects, revivals = [], assets}: {page: string; projects: Project[]; revivals?: Project[]; assets: Record<string,string>}) {
    const depth = page === 'home' || page === '404' ? 0 : page.split('/').length
    const path = (value = '') => (page === '404' ? '/' : '../'.repeat(depth)) + value
    const image = (url: string) => path(assets[url] || url)
    const project = [...projects, ...revivals].find(p => page === projectRoute(p))
    const isSeries = project?.kind === 'series'
    const isRevival = revivals.some(p => p.slug === project?.slug)
    const nav = page === 'about' ? 'about' : page === 'resume' ? 'resume' : 'home'

    const media = (project: Project) => {
        const animated = project.slug === 'street-pulse'
        return <div className="project-media" data-fit={project.coverFit}>
            {animated ? <div className="cover-mount" data-project={project.slug}><ExplodedProjectCover projectSlug={project.slug}/></div>
            : <><img src={image(project.coverImage)} alt={project.coverAlt || project.title + ' project cover'} width="800" height="600" loading="lazy"/>
                {project.slug === 'aircraft-seating' && project.hoverImage && <img className="hover-image" src={image(project.hoverImage)} alt="" width="800" height="600" loading="lazy"/>}</>}
        </div>
    }
    const card = (project: Project) => <a className="project-card" key={project.slug} href={path(projectRoute(project) + '/')}>
        {media(project)}
        <div className="card-meta"><span className="card-title">{project.title}</span><span className="card-credit">{project.company}{project.year ? ' · ' + project.year : ''}</span></div>
        {project.cardSummary && <p className="card-summary">{project.cardSummary}</p>}
    </a>
    const zoomImage = (src: string, alt: string, eager = false) => <button className="image-zoom" type="button" aria-label={'Enlarge image: ' + alt}>
        <img src={image(src)} alt={alt} loading={eager ? 'eager' : 'lazy'}/>
    </button>

    return <>
        <a className="skip-link" href="#main">Skip to content</a>
        <div className="shell">
            <header className="site-header">
                <div className="hero-glow" aria-hidden="true"/>
                <div className="hero-top">
                    <a className="avatar" href={path()} aria-label="Boxuan Wang home"><img src={image(avatar)} alt="" width="60" height="60"/></a>
                    <nav className="site-nav" aria-label="Main navigation">
                        {[['home','Projects',''],['about','About','about/'],['resume','Resume','resume/']].map(([key,label,target]) =>
                            <a key={key} href={path(target)} aria-current={nav === key && !project ? 'page' : undefined} data-active={nav === key}>{label}</a>)}
                    </nav>
                </div>
                {page === 'home' ? <h1 className="hero-name">Boxuan Wang</h1> : <p className="hero-name">Boxuan Wang</p>}
                <p className="hero-bio">{biography}</p>
                <div className="hero-actions"><a className="button" href={path() + '#projects'}>View projects</a><a className="button button-secondary" href={'mailto:' + email}>Email me</a></div>
            </header>

            <main id="main">
                {page === 'home' && <div className="projects-grid" id="projects">{projects.map(card)}</div>}

                {page === 'about' && <>
                    <section className="about-layout" aria-labelledby="about-title">
                        <img className="about-photo" src={image(portrait)} alt="Portrait of Boxuan Wang" width="600" height="600"/>
                        <div className="about-copy">
                            <h1 className="about-title" id="about-title">Hi, I’m Boxuan.<br/><span>Design Engineering student at Imperial College London</span></h1>
                            <div className="about-body">
                                <p>I’m studying Design Engineering at Imperial College London, with a particular interest in humanoid robotics, mechanical engineering and product design. My work connects early concepts and CAD with simulation, prototyping and testing.</p>
                                <p>My internships at Li Auto and elibot span structural design, Ansys analysis, joint testing, Python tools, robot interfaces and technical documentation.</p>
                                <p>Alongside this work, my academic projects explore autonomous robotics, vehicle aerodynamics, battery cooling and sustainable product design.</p>
                                <p>I speak Chinese natively, English fluently and basic French.</p>
                            </div>
                            <a className="button button-secondary" href={'mailto:' + email}>Email me</a>
                        </div>
                    </section>
                    <section className="expertise" aria-labelledby="expertise-title">
                        <h2 className="section-label" id="expertise-title">What I<br/>work on</h2>
                        <div className="expertise-grid">
                            {[
                                ['Mechanical design','CAD modelling, structural design, additive manufacturing and prototype assembly, using SolidWorks and Fusion.'],
                                ['Simulation & testing','Finite element analysis, CFD, fatigue analysis and joint testing, using Ansys Mechanical, Fluent and Discovery.'],
                                ['Robotics & programming','Robot control, embedded vision and data logging, with Python, C++, MATLAB, OpenMV and Edge Impulse.'],
                                ['Product & interaction design','Product development, UX, interaction design and clear technical communication, using Figma, Miro, InDesign and Overleaf.'],
                            ].map(([title,text]) => <article className="expertise-card" key={title}><h3>{title}</h3><p>{text}</p></article>)}
                        </div>
                    </section>
                </>}

                {page === 'resume' && <div className="resume">
                    <h1 className="visually-hidden">Resume</h1>
                    <div className="resume-download"><a className="button button-secondary" href={path('Boxuan_Wang_CV.pdf')} target="_blank" rel="noopener">View CV (PDF)</a></div>
                    <section className="resume-section" aria-label="Experience">
                        <article className="job-entry"><h2 className="entry-title">Humanoid Development Intern @ Li Auto</h2><p className="entry-date">July – September 2026</p><p className="entry-copy">Designed connector parts and structural supports in SolidWorks, supported by Ansys analysis. Redesigned upper-torso load paths as part of the team, reducing torso weight by 18% and meeting fatigue requirements in Ansys simulations with a safety factor of 3. Developed AI-assisted workflows for 3D-printable validation structures and collected motion-demonstration data using wearable tracking and VR.</p></article>
                        <article className="job-entry"><h2 className="entry-title">Cooperative Robot Intern @ elibot</h2><p className="entry-date">July – August 2023</p><p className="entry-copy">Built a Python data-logging system to track incoming, produced and shipped robots. Created joint-specific fatigue-test sequences and logged faults during testing. Contributed to remote-control app and web interfaces, webpage UX, and the English translation and visual layout of robot user manuals.</p></article>
                    </section>
                    <section className="resume-section" aria-labelledby="projects-title"><h2 className="section-label" id="projects-title">Selected engineering projects</h2>
                        <article className="job-entry"><h3 className="entry-title">Autonomous Football Robot</h3><p className="entry-date">2025 · Team robotics project</p><p className="entry-copy">Contributed to team model training and ball-tracking code using OpenMV and Edge Impulse, and to autonomous navigation and task-execution code on an existing robot platform.</p></article>
                        <article className="job-entry"><h3 className="entry-title"><a href={path('case-studies/thermofluids/')}>SUV Aerodynamics and Battery Cooling ↗</a></h3><p className="entry-date">2026 · Thermofluids project</p><p className="entry-copy">Built SUV geometry in Fusion and a 400,000-cell Ansys Fluent model to analyse pressure distribution and rear-wake behaviour. Contributed to the team's cold-plate design study, considering flow distribution, heat transfer and system complexity.</p></article>
                        <article className="job-entry"><h3 className="entry-title"><a href={path('case-studies/street-pulse/')}>Street Pulse ↗</a></h3><p className="entry-date">2025 · Team interactive-floor project</p><p className="entry-copy">Prototyped electronics, assembled and tested one functional vibration module, and developed the research, tessellation and exterior design. Other team members handled software.</p></article>
                    </section>
                    <section className="resume-section" aria-labelledby="tools-title"><h2 className="section-label" id="tools-title">Tools powering my work</h2><div className="tools-grid">
                        {[
                            ['SolidWorks & Fusion','CAD & mechanical design'],['Ansys','Mechanical, Fluent & Discovery'],['Python, C++ & MATLAB','Programming & data logging'],['Figma & Miro','UX & interaction design'],['OpenMV & Edge Impulse','Embedded vision & robotics'],['InDesign & Overleaf','Presentations & documentation'],
                        ].map(([title,text]) => <div className="tool" key={title}><h3 className="tool-title">{title}</h3><p className="tool-category">{text}</p></div>)}
                    </div></section>
                    <section className="resume-section" aria-labelledby="skills-title"><h2 className="section-label" id="skills-title">Skills</h2><div className="tags">{['Mechanical design','CAD modelling','FEA & CFD','Fatigue & joint testing','Prototyping','Python & robot control','UX & interaction design','Technical documentation','Eco Audit & sustainability'].map(text => <span className="tag" key={text}>{text}</span>)}</div></section>
                    <section className="resume-section" aria-labelledby="recognition-title"><h2 className="section-label" id="recognition-title">Recognition & leadership</h2>
                        {['King’s Scholar','Vice Captain of Fencing'].map(title => <div className="job-entry" key={title}><h3 className="entry-title">{title}</h3><p className="entry-date">The King’s School, Canterbury</p></div>)}
                    </section>
                    <section className="resume-section" aria-labelledby="education-title"><h2 className="section-label" id="education-title">Education</h2>
                        <div className="job-entry"><h3 className="entry-title">Design Engineering · Imperial College London</h3><p className="entry-date">2024–2028 · Expected completion 2028</p><p className="entry-copy">Selected study areas: Mechanical Engineering, Finite Element Analysis, Materials and Manufacturing, Physical Computing and Intelligent Systems.</p></div>
                        <div className="job-entry"><h3 className="entry-title">The King’s School, Canterbury</h3><p className="entry-date">2019–2024</p></div>
                        <h3 className="entry-title">Languages</h3><p className="entry-copy">Chinese — Native · English — Fluent · French — Basic</p>
                    </section>
                </div>}

                {project && <>
                    <header className="case-header"><a className="back-link" href={project.backHref ? path(project.backHref.replace(/^\//, '')) : path() + '#projects'}>{project.backLabel || '← All projects'}</a><h1 className="case-title">{project.title}</h1><p className="case-description">{project.description}</p>
                        <dl className="project-facts">{[['Role',project.role],['Timeline',project.timeline],['Team',project.team],['Focus',project.platform]].filter(([,value]) => value).map(([label,value]) => <div className="fact" key={label}><dt className="fact-label">{label}</dt><dd className="fact-value">{value}</dd></div>)}</dl>
                    </header>
                    {isSeries ? <>
                        <div className="revival-intro">{project.sections.flatMap(section => section.blocks).filter(block => block.type === 'paragraph').map((block,i) => <p key={i}>{block.text}</p>)}</div>
                        <section className="revival-menu" aria-labelledby="revival-menu-title"><h2 className="section-label" id="revival-menu-title">Choose a revival</h2><div className="projects-grid">{revivals.map(card)}</div></section>
                    </> : <>
                    <div className="case-hero">{zoomImage(project.heroImage, project.heroCaption || project.title + ' project overview', true)}{project.heroCaption && <p className="case-caption">{project.heroCaption}</p>}</div>
                    <div className="case-layout">
                        <nav className="case-nav" aria-label="Case study sections">{project.sections.map((section,i) => <a key={i} href={'#section-' + i}>{section.name}</a>)}</nav>
                        <div className="case-body">{project.sections.map((section,i) => <section className="case-section" key={i} id={'section-' + i} aria-labelledby={'heading-' + i}>
                            <h2 className="case-heading" id={'heading-' + i}>{section.heading}</h2>
                            {section.blocks.map((block,j) => block.type === 'image' && block.src ? <figure className="case-figure" key={j}>{zoomImage(block.src, block.alt || section.name)}{block.alt && <figcaption className="case-caption">{block.alt}</figcaption>}</figure> : block.type === 'heading' ? <h3 className="case-block" key={j}>{block.text}</h3> : block.type === 'link' ? <p className="case-block" key={j}><a href={block.href} target="_blank" rel="noopener noreferrer">{block.text}</a></p> : <p className="case-block" key={j}>{block.text}</p>)}
                        </section>)}</div>
                    </div>
                    <section className="next-projects" aria-labelledby="more-projects">{isRevival && <a className="back-link" href={path('project-revival/')}>← All revivals</a>}<h2 className="section-label" id="more-projects">{isRevival ? 'More revivals' : 'More projects'}</h2><div className="projects-grid">{(isRevival ? revivals : projects).filter(p => p.slug !== project.slug).slice(0,2).map(card)}</div></section>
                    </>}
                </>}
                {page === '404' && <section className="case-header"><h1 className="case-title">Page not found</h1><p className="case-description">This link may have moved. Browse the portfolio to find the project.</p><a className="button" href={path()}>View projects</a></section>}
            </main>

            <footer className="site-footer"><div className="footer-grid">
                <div className="footer-profile"><div className="footer-name"><img src={image(avatar)} alt="" width="32" height="32"/><span>Boxuan Wang</span></div><p>Design Engineering student at Imperial College London.<br/>Product design, mechanical engineering and robotics.</p><p className="template-credit">Design based on Tabfolio by <a href="https://www.sebastianst.design/" target="_blank" rel="noopener noreferrer">Sebastian</a></p></div>
                <nav className="footer-links" aria-label="Footer navigation"><p>Links</p><a href={path()}>Projects</a><a href={path('about/')}>About</a><a href={path('resume/')}>Resume</a></nav>
                <div className="footer-contact"><p>Contact</p><a href={'mailto:' + email}>{email}</a><a href={'mailto:' + email}>Email me</a></div>
            </div></footer>
        </div>
        <dialog className="lightbox" aria-label="Enlarged project image"><button className="lightbox-close" type="button" aria-label="Close enlarged image">Close ×</button><img alt=""/></dialog>
    </>
}

export const sharedAssets = [avatar, portrait]
export const siteBiography = biography
