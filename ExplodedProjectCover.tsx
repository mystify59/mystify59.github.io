import * as React from "react"


interface ExplodedProjectCoverProps {
    projectSlug?: string
    previewExploded?: boolean
    style?: React.CSSProperties
}

function useCoverProgress(active: boolean, staticRenderer: boolean) {
    const [progress, setProgress] = React.useState(0)
    const current = React.useRef(0)
    const [reduced, setReduced] = React.useState(false)
    React.useEffect(() => {
        const query = window.matchMedia("(prefers-reduced-motion: reduce)")
        const update = () => setReduced(query.matches)
        update()
        query.addEventListener("change", update)
        return () => query.removeEventListener("change", update)
    }, [])
    React.useEffect(() => {
        const target = active ? 1 : 0
        if (staticRenderer || reduced) {
            const value = reduced ? 0.6 : target
            current.current = value
            setProgress(value)
            return
        }
        const start = current.current
        if (Math.abs(target - start) < 0.001) return
        let frame = 0
        const startTime = performance.now()
        const duration = (active ? 1150 : 850) * Math.max(0.4, Math.abs(target - start))
        const animate = (now: number) => {
            const elapsed = Math.min(1, (now - startTime) / duration)
            const ease = 1 - Math.pow(1 - elapsed, 3)
            const value = start + (target - start) * ease
            current.current = value
            setProgress(value)
            if (elapsed < 1) frame = requestAnimationFrame(animate)
        }
        frame = requestAnimationFrame(animate)
        return () => cancelAnimationFrame(frame)
    }, [active, reduced, staticRenderer])
    return progress
}

/**
 * @framerSupportedLayoutWidth any-prefer-fixed
 * @framerSupportedLayoutHeight any-prefer-fixed
 * @framerIntrinsicWidth 800
 * @framerIntrinsicHeight 600
 */
export default function ExplodedProjectCover(props: ExplodedProjectCoverProps) {
    const { projectSlug = "street-pulse", previewExploded = false, style } = props
    const isStatic = false
    const [hovered, setHovered] = React.useState(false)
    const progress = useCoverProgress(previewExploded || hovered, isStatic)
    const supported = projectSlug === "street-pulse" || projectSlug === "s00"
    if (!supported) return null
    const label = projectSlug === "street-pulse"
        ? "Street Pulse construction illustration. Hover to separate the product layers."
        : "S00 internal layout illustration. Hover to separate the mounting and control modules from the intact framework."
    return (
        <div
            role="img"
            aria-label={label}
            data-exploded-cover={projectSlug}
            data-progress={progress.toFixed(3)}
            onPointerEnter={event => {
                if (!isStatic && event.pointerType !== "touch") setHovered(true)
            }}
            onPointerLeave={() => setHovered(false)}
            onPointerCancel={() => setHovered(false)}
            style={{
                position: "relative",
                width: "100%",
                height: "100%",
                ...style,
                overflow: "hidden",
                background: "radial-gradient(ellipse at 50% 36%, #26313d 0%, #18212b 52%, #111820 100%)",
                userSelect: "none",
                cursor: "pointer",
            }}
        >
            <svg width="100%" height="100%" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid meet" aria-hidden="true" style={{ display: "block" }}>
                {projectSlug === "street-pulse"
                    ? <StreetPulseScene progress={progress} />
                    : <S00Scene progress={progress} />}
            </svg>
        </div>
    )
}




/**
 * Stylised illustration of the Street Pulse report's trapezium module.
 * Geometry is illustrative, not CAD or an engineering assembly drawing.
 * The parent animates progress from 0 (assembled) to 1 (exploded).
 */
function StreetPulseScene({ progress }: { progress: number }) {
    const p = Math.max(0, Math.min(1, Number.isFinite(progress) ? progress : 0))
    type XY = [number, number]
    const outer: XY[] = [[-145, -98], [145, -98], [205, 108], [-205, 108]]
    const inner: XY[] = [[-122, -81], [122, -81], [176, 88], [-176, 88]]
    const plate: XY[] = [[-126, -85], [126, -85], [182, 94], [-182, 94]]
    const project = ([x, y]: XY, z = 0): XY => [385 + x * 0.96 + y * 0.36, 324 - x * 0.22 + y * 0.47 - z]
    const points = (shape: XY[], z = 0) => shape.map(v => project(v, z).join(",")).join(" ")
    const path = (shape: XY[], z = 0) => `M${shape.map(v => project(v, z).join(",")).join("L")}Z`
    const ring = (z: number) => `${path(outer, z)} ${path(inner, z)}`
    const face = (a: XY, b: XY, z: number, depth: number) => {
        const aa = project(a, z), bb = project(b, z)
        return `${aa.join(",")} ${bb.join(",")} ${bb[0]},${bb[1] + depth} ${aa[0]},${aa[1] + depth}`
    }
    const shift = (x: number, y: number) => `translate(${x * p} ${y * p})`
    const line = (a: XY, b: XY, z: number) => {
        const aa = project(a, z), bb = project(b, z)
        return { x1: aa[0], y1: aa[1], x2: bb[0], y2: bb[1] }
    }
    const motorPositions: XY[] = [[-78, -56], [78, -56], [-130, 57], [-44, 57], [44, 57], [130, 57]]
    const feet: XY[] = [[-119, -68], [119, -68], [-162, 80], [162, 80]]
    const ribSegments: [XY, XY][] = [
        [[-122, -81], [0, 88]], [[122, -81], [0, 88]],
        [[-176, 88], [0, -81]], [[176, 88], [0, -81]],
    ]
    const label = (text: string, y: number, end: XY) => (
        <g opacity={p}>
            <text x="45" y={y - 9} fill="#B4C1D0" fontFamily="Inter, Arial, sans-serif" fontSize="12" letterSpacing="0.3">{text}</text>
            <path d={`M45 ${y} H160 L${end[0]} ${end[1]}`} fill="none" stroke="#69819B" strokeWidth="0.7" opacity="0.42" />
            <circle cx={end[0]} cy={end[1]} r="2" fill="#AAC2DB" opacity="0.65" />
        </g>
    )

    return (
        <svg viewBox="0 0 800 600" width="100%" height="100%" role="img" aria-label="Illustrated Street Pulse trapezium module separating into a rim, patterned contact surface, perimeter lighting, structural ribs and electronics" style={{ display: "block", overflow: "hidden" }}>
            <g transform={`translate(0 ${-25 * (1-p)}) translate(385 324) scale(${1.14 - 0.14*p}) translate(-385 -324)`}>
            <ellipse cx={392 - p * 12} cy={449 + p * 66} rx={184 - p * 22} ry="24" fill="#010711" opacity="0.24" />

            {/* Underbody: damping feet, six haptic positions and schematic electronics. */}
            <g transform={shift(-30, 85)}>
                {feet.map((pos, index) => {
                    const [x, y] = project(pos, -7)
                    return <g key={`foot-${index}`}>
                        <path d={`M${x - 10} ${y} v10 a10 5 0 0 0 20 0 v-10`} fill="#151E29" stroke="#394450" strokeWidth="0.6" />
                        <ellipse cx={x} cy={y} rx="10" ry="5" fill="#46515D" />
                        <ellipse cx={x} cy={y + 1} rx="5.5" ry="2.7" fill="#242E3A" />
                    </g>
                })}
                {motorPositions.map((pos, index) => {
                    const [x, y] = project(pos, 5)
                    return <g key={`haptic-${index}`}>
                        <ellipse cx={x} cy={y + 3} rx="9" ry="5.2" fill="#535E68" />
                        <ellipse cx={x} cy={y} rx="9" ry="5.2" fill="#BAC6CB" stroke="#E3E9E8" strokeWidth="0.65" />
                        <ellipse cx={x} cy={y} rx="4.6" ry="2.7" fill="#687781" />
                    </g>
                })}
                <path d={`M${project([-120, 57], 5).join(" ")} Q335 375 ${project([-9, 30], 9).join(" ")}`} stroke="#C78A71" strokeWidth="1.6" fill="none" />
                <path d={`M${project([78, -56], 5).join(" ")} Q459 305 ${project([8, 2], 9).join(" ")}`} stroke="#8DA6B8" strokeWidth="1.5" fill="none" />
                <polygon points={points([[-29, -13], [37, -13], [37, 41], [-29, 41]], 7)} fill="#182F3E" stroke="#5F8B91" strokeWidth="1.1" />
                <polygon points={points([[-18, -3], [10, -3], [10, 24], [-18, 24]], 9)} fill="#111921" stroke="#799099" strokeWidth="0.7" />
                <polygon points={points([[18, -7], [32, -7], [32, 5], [18, 5]], 10)} fill="#B8C4C8" />
                {[0, 1, 2, 3, 4].map(i => <g key={`pin-${i}`}>
                    <line {...line([-27 + i * 11, 36], [-27 + i * 11, 42], 9)} stroke="#C9B282" strokeWidth="2.1" />
                    <line {...line([-24 + i * 11, -14], [-24 + i * 11, -9], 9)} stroke="#C9B282" strokeWidth="2.1" />
                </g>)}
            </g>

            {/* Open structural frame: raised triangular ribs, not a solid block. */}
            <g transform={shift(-12, 31)}>
                {outer.map((a, index) => <polygon key={`base-wall-${index}`} points={face(a, outer[(index + 1) % outer.length], 14, 20)} fill={index === 2 ? "#727D88" : "#455361"} stroke="#2E3A48" strokeWidth="0.55" />)}
                <path d={ring(14)} fill="#BAC2C8" fillRule="evenodd" stroke="#D3DBDF" strokeWidth="0.8" />
                {ribSegments.map(([a, b], index) => <g key={`rib-${index}`}>
                    <polygon points={face(a, b, 13, 16)} fill={index % 2 ? "#4B5B69" : "#70808D"} />
                    <line {...line(a, b, 13)} stroke="#D5DEE2" strokeWidth="5.2" strokeLinecap="square" />
                    <line {...line(a, b, 13)} stroke="#EDF1F1" strokeWidth="0.85" />
                </g>)}
                {inner.map((pos, index) => {
                    const [x, y] = project(pos, 15)
                    return <ellipse key={`mount-${index}`} cx={x} cy={y} rx="3.2" ry="1.8" fill="#40505E" />
                })}
            </g>

            {/* Perimeter lighting moves as an independent physical subassembly. */}
            <g transform={shift(6, -25)}>
                <path d={path(inner, 29)} fill="none" stroke="#2C2432" strokeWidth="9" strokeLinejoin="round" />
                <path d={path(inner, 29)} fill="none" stroke="#A44A6B" strokeWidth="5.6" strokeLinejoin="round" />
                <path d={path(inner, 29)} fill="none" stroke="#F38DA5" strokeWidth="2.9" strokeLinejoin="round" />
                <path d={path(inner, 29)} fill="none" stroke="#FFE2E4" strokeWidth="0.85" strokeLinejoin="round" />
            </g>

            {/* Patterned contact sheet, with a small visible edge thickness. */}
            <g transform={shift(22, -78)}>
                {plate.map((a, index) => <polygon key={`surface-edge-${index}`} points={face(a, plate[(index + 1) % plate.length], 34, 4)} fill={index === 2 ? "#866251" : "#453332"} />)}
                <polygon points={points(plate, 34)} fill="#674841" stroke="#A17969" strokeWidth="0.9" />
                <polygon points={points([[-110, -72], [110, -72], [157, 75], [-157, 75]], 34.5)} fill="#28262B" stroke="#B98B74" strokeWidth="1.15" />
                <path d={`M${project([-107, -68], 35).join(" ")} L${project([153, 71], 35).join(" ")} M${project([107, -68], 35).join(" ")} L${project([-153, 71], 35).join(" ")}`} stroke="#B4826C" strokeWidth="14" strokeLinejoin="miter" />
                <path d={`M${project([0, -72], 35).join(" ")} L${project([-73, 75], 35).join(" ")} M${project([0, -72], 35).join(" ")} L${project([73, 75], 35).join(" ")}`} stroke="#D0AF94" strokeWidth="5.5" />
                {[[-115, -77], [115, -77], [-165, 84], [165, 84]].map((pos, index) => {
                    const [x, y] = project(pos as XY, 36)
                    return <ellipse key={`surface-slot-${index}`} cx={x} cy={y} rx="4" ry="1.2" fill="#231E22" />
                })}
            </g>

            {/* Silver rim is drawn last so the assembled edge conceals the sheet. */}
            <g transform={shift(38, -133)}>
                {outer.map((a, index) => <polygon key={`rim-edge-${index}`} points={face(a, outer[(index + 1) % outer.length], 43, 8)} fill={index === 2 ? "#97A4AF" : index === 1 ? "#6F7C88" : "#BAC5CC"} stroke="#C4CED4" strokeWidth="0.45" />)}
                <path d={ring(43)} fill="#DCE4E8" fillRule="evenodd" stroke="#F5F7F6" strokeWidth="1.1" />
                <path d={path(inner, 43)} fill="none" stroke="#778695" strokeWidth="1.9" />
                <line {...line(outer[2], outer[3], 43)} stroke="#FAFCFA" strokeWidth="1.9" />
                {[[0, -91], [190, 100], [-190, 100]].map((pos, index) => {
                    const [x, y] = project(pos as XY, 44)
                    return <ellipse key={`rim-fixing-${index}`} cx={x} cy={y} rx="2.3" ry="1.3" fill="#7F8C98" />
                })}
            </g>

            </g>
            {label("SILVER RIM", 136, [238, 136])}
            {label("CONTACT SURFACE", 221, [254, 221])}
            {label("PERIMETER LIGHTING", 296, [239, 296])}
            {label("TRIANGULAR SUPPORTS", 391, [220, 391])}
            {label("ELECTRONICS + DAMPING", 484, [269, 484])}
            <text x="400" y="569" textAnchor="middle" fill="#A0B5C9" fontFamily="Inter, Arial, sans-serif" fontSize="12" letterSpacing="0.6">Exploded illustration</text>
        </svg>
    )
}


/**
 * Editorial internal-layout illustration based on the original S00 CAD views.
 * The chassis stays one piece. Only the documented CCU and mounting rail move.
 * Coordinates are illustrative; this is not a dimensioned assembly drawing.
 * Render inside an SVG with viewBox="0 0 800 600".
 */
function S00Scene({ progress }: { progress: number }) {
    const t = Math.max(0, Math.min(1, progress))
    type V3 = [number, number, number]
    const project = ([x, y, z]: V3): [number, number] => [
        428 + x * 0.86 - y * 0.68,
        463 + x * 0.3 + y * 0.38 - z,
    ]
    const points = (vertices: V3[]) => vertices.map(v => project(v).join(",")).join(" ")
    const path = (vertices: V3[], close = true) =>
        vertices.map((v, i) => `${i ? "L" : "M"}${project(v).join(",")}`).join(" ") + (close ? " Z" : "")
    const front = "#BCC9D9"
    const side = "#778BA3"
    const top = "#E5EDF6"
    const edge = "#34465D"
    const voidFill = "#182838"

    const face = (vertices: V3[], fill: string, extra: Record<string, unknown> = {}) => (
        <polygon points={points(vertices)} fill={fill} stroke={edge} strokeWidth={1.25}
            strokeLinejoin="round" {...extra} />
    )
    const line = (vertices: V3[], stroke = "#D5E7FA", width = 1, extra: Record<string, unknown> = {}) => (
        <path d={path(vertices, false)} fill="none" stroke={stroke} strokeWidth={width}
            strokeLinecap="round" strokeLinejoin="round" {...extra} />
    )
    const box = (x: number, y: number, z: number, w: number, d: number, h: number,
        colors: [string, string, string] = [front, side, top]) => (
        <g>
            {face([[x + w, y, z], [x + w, y + d, z], [x + w, y + d, z + h], [x + w, y, z + h]], colors[1])}
            {face([[x, y + d, z], [x + w, y + d, z], [x + w, y + d, z + h], [x, y + d, z + h]], colors[0])}
            {face([[x, y, z + h], [x + w, y, z + h], [x + w, y + d, z + h], [x, y + d, z + h]], colors[2])}
        </g>
    )
    const bolt = (v: V3, radius = 2.1) => {
        const [cx, cy] = project(v)
        return <g><circle cx={cx} cy={cy} r={radius + 0.9} fill="#5B7189" />
            <circle cx={cx - 0.35} cy={cy - 0.4} r={radius} fill="#DCE8F4" />
            <path d={`M${cx - radius * .55},${cy}h${radius * 1.1}`} stroke="#61788E" strokeWidth={0.8} /></g>
    }
    const circleInSide = (x: number, cy: number, cz: number, radius: number) =>
        Array.from({ length: 49 }, (_, i) => {
            const a = i / 48 * Math.PI * 2
            return [x, cy + Math.cos(a) * radius, cz + Math.sin(a) * radius] as V3
        })
    const railShift = [103 * t, -57 * t]
    const ccuShift = [-154 * t, 31 * t]
    const leader = (anchor: V3, offset: number[]) => {
        const [x, y] = project(anchor)
        return <g opacity={t * .56}>
            <path d={`M${x},${y}L${x + offset[0]},${y + offset[1]}`}
                fill="none" stroke="#8BC5F4" strokeWidth={1} strokeDasharray="3 5" />
            <circle cx={x} cy={y} r={2.5} fill="#111D2A" stroke="#8BC5F4" strokeWidth={1} />
        </g>
    }

    return <g>
        <ellipse cx={434} cy={521} rx={171} ry={29} fill="#040B13" opacity={.46} />
        <ellipse cx={434} cy={521} rx={116} ry={14} fill="#03070C" opacity={.27} />

        {/* The entire main framework is one continuous, stationary structure. */}
        <g>
            {/* Rear uprights and the inside of the lower compartment. */}
            {box(-85, -48, 13, 7, 96, 179, ["#859AAF", "#596D83", "#DBE6F0"])}
            {face([[-78, -47, 27], [79, -47, 27], [79, -47, 169], [-78, -47, 169]], "#576A80")}
            {line([[-77, -46, 169], [79, -46, 169]], "#9AB1C7")}
            {box(-88, -51, 8, 176, 105, 7)}
            {box(-90, 37, 0, 35, 27, 8)}
            {box(55, 37, 0, 35, 27, 8)}
            {box(-88, -50, 169, 176, 104, 8)}

            {/* Perforated lower right side: the rib pattern comes from the source view. */}
            {face([[86, -48, 17], [86, 51, 17], [86, 51, 172], [86, -48, 172]], side)}
            {[30, 76, 122].map((z, i) => <g key={`rib-${i}`}>
                {face([[86.2, -38, z + 4], [86.2, -38, z + 37], [86.2, -1, z + 21]], voidFill, { stroke: "#C0CFDD", strokeWidth: 1.05 })}
                {face([[86.2, -29, z + 39], [86.2, 36, z + 39], [86.2, 3, z + 24]], voidFill, { stroke: "#C0CFDD", strokeWidth: 1.05 })}
                {face([[86.2, 42, z + 34], [86.2, 42, z + 4], [86.2, 10, z + 18]], voidFill, { stroke: "#C0CFDD", strokeWidth: 1.05 })}
                {face([[86.2, -28, z + 2], [86.2, 34, z + 2], [86.2, 3, z + 16]], voidFill, { stroke: "#C0CFDD", strokeWidth: 1.05 })}
            </g>)}
            {line([[86, 51, 18], [86, 51, 173]], "#EFF5FA", 1.3)}
            {box(-85, 46, 16, 7, 9, 156)}

            {/* Lower compartment backplate, visible when the CCU moves aside. */}
            {face([[-74, 27, 43], [72, 27, 43], [72, 27, 151], [-74, 27, 151]], "#879BB0")}
            {line([[-74, 27, 151], [72, 27, 151]], "#D5E2EE", 1.15)}
            {[-67, 65].map((x, i) => <g key={`lower-fasteners-${i}`}>
                {bolt([x, 27.2, 49], 1.65)}{bolt([x, 27.2, 144], 1.65)}
            </g>)}

            {/* Main projecting tray and sloping transition to the upper cage. */}
            {box(-91, -51, 184, 182, 122, 6)}
            {face([[-84, 51, 201], [84, 51, 201], [90, 70, 190], [-90, 70, 190]], "#B2C2D4")}
            {line([[-90, 70, 190], [90, 70, 190]], "#EDF5FC", 1.4)}
            {face([[84, -49, 205], [91, -49, 190], [91, 52, 190], [84, 42, 205]], "#788EA5")}
            {box(-83, -46, 205, 166, 94, 5)}

            {/* Open upper structure. */}
            {box(-83, -46, 210, 7, 8, 94)}
            {box(-83, 40, 210, 7, 9, 94)}
            {face([[-76, -45, 218], [79, -45, 218], [79, -45, 294], [-76, -45, 294]], "#536980")}
            {face([[-64, -44.8, 227], [65, -44.8, 227], [65, -44.8, 282], [-64, -44.8, 282]], "#263B50", { stroke: "#9DB0C4", strokeWidth: 1.1 })}

            {/* Side fan aperture is a real cut-through opening, kept with the chassis. */}
            <path d={path([[83, -47, 212], [83, 49, 212], [83, 49, 302], [83, -47, 302]]) +
                path(circleInSide(83, 1, 256, 33))}
                fill={side} fillRule="evenodd" stroke={edge} strokeWidth={1.25} strokeLinejoin="round" />
            {line(circleInSide(83.1, 1, 256, 33), "#DCE8F4", 1.45)}
            {line(circleInSide(83.2, 1, 256, 30), "#233B52", 1.45)}
            {[[-35, 223], [37, 223], [-35, 290], [37, 290]].map(([y, z], i) =>
                <g key={`fan-bolt-${i}`}>{bolt([83.5, y, z], 1.6)}</g>)}
            {box(-83, 42, 294, 166, 7, 9)}

            {/* Top tray, rim and upward mounting tabs. */}
            {box(-86, -49, 302, 172, 100, 6)}
            {face([[-63, -30, 308.2], [61, -30, 308.2], [61, 29, 308.2], [-63, 29, 308.2]], "#526D85", { stroke: "#F0F6FC", strokeWidth: 1.2 })}
            {face([[-55, -22, 308.4], [-35, -22, 308.4], [54, 22, 308.4], [34, 22, 308.4]], "#BBCDDD")}
            {face([[35, -22, 308.4], [55, -22, 308.4], [-34, 22, 308.4], [-54, 22, 308.4]], "#C7D6E4")}
            {box(-87, -51, 308, 174, 4, 11)}
            {box(-87, -47, 308, 4, 98, 11)}
            {box(82, -47, 308, 5, 98, 11)}
            {box(-83, -48, 319, 14, 4, 14)}
            {box(68, -48, 319, 14, 4, 14)}
            {bolt([-76, -43.8, 326], 1.7)}
            {bolt([75, -43.8, 326], 1.7)}
            {[[-73, 40], [72, 40], [-72, -38], [72, -38]].map(([x, y], i) =>
                <g key={`tray-bolt-${i}`}>{bolt([x, y, 308.5], 1.5)}</g>)}
        </g>

        {leader([0, 40, 320], railShift)}
        {leader([0, 60, 103], ccuShift)}

        {/* Separate documented mounting rail, with gusseted end returns. */}
        <g transform={`translate(${railShift[0]} ${railShift[1]})`}>
            {box(-83, 24, 316, 166, 5, 17, ["#A9C6E3", "#6E94B8", "#DCEEFF"])}
            {box(-87, 25, 308, 18, 27, 5, ["#BFD7EB", "#789DBD", "#E2F0FC"])}
            {box(69, 25, 308, 18, 27, 5, ["#BFD7EB", "#789DBD", "#E2F0FC"])}
            {face([[-76, 29, 330], [-76, 50, 313], [-49, 29, 318]], "#819FB9")}
            {face([[76, 29, 330], [76, 50, 313], [49, 29, 318]], "#86A6C2")}
            {line([[-83, 29, 333], [83, 29, 333]], "#F0F8FF", 1.1)}
            {[-50, 50].map((x, i) => <g key={`rail-hole-${i}`}>
                {bolt([x, 29.2, 324], 1.8)}
            </g>)}
            {bolt([-78, 43, 313.3], 1.8)}{bolt([78, 43, 313.3], 1.8)}
        </g>

        {/* Separate CCU/air-duct unit, visually simplified from ccu-3.png. */}
        <g transform={`translate(${ccuShift[0]} ${ccuShift[1]})`}>
            {box(-75, 38, 41, 20, 7, 125, ["#ABC5D9", "#607D98", "#DBEBF5"])}
            {box(55, 38, 41, 20, 7, 125, ["#ABC5D9", "#607D98", "#DBEBF5"])}
            {box(-59, 44, 49, 119, 13, 112, ["#9EBEDB", "#54799F", "#D9EBF9"])}
            {box(-55, 57, 56, 111, 8, 101, ["#A6CAE8", "#678FAF", "#E3F3FF"])}
            {line([[37, 65.3, 143], [10, 65.3, 143], [1, 65.3, 137], [1, 65.3, 92], [8, 65.3, 84],
                [37, 65.3, 84], [43, 65.3, 90], [43, 65.3, 104]], "#547FA3", 11)}
            {line([[37, 65.5, 143], [10, 65.5, 143], [1, 65.5, 137], [1, 65.5, 92], [8, 65.5, 84],
                [37, 65.5, 84], [43, 65.5, 90], [43, 65.5, 104]], "#C9E9FF", 6)}
            {box(-46, 42, 40, 27, 17, 9, ["#789DBC", "#52728D", "#B6CFE0"])}
            {box(18, 42, 40, 27, 17, 9, ["#789DBC", "#52728D", "#B6CFE0"])}
            {[-66, 66].map((x, i) => <g key={`ccu-fasteners-${i}`}>
                {bolt([x, 45.2, 49], 1.7)}{bolt([x, 45.2, 157], 1.7)}
            </g>)}
            {line([[-55, 65, 157], [56, 65, 157]], "#EBF7FF", 1.4)}
        </g>

        <text x={400} y={569} textAnchor="middle" fill="#A0B5C9"
            fontFamily="Inter, system-ui, sans-serif" fontSize={12} letterSpacing={.6}>
            Internal layout illustration
        </text>
    </g>
}
