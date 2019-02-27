import React from 'react'

const url = './images/spriteSVG/sprite.svg'

const Icon = (props) => (
    <svg viewBox='0 0 16 16' className='svgicon'>
        <use xlinkHref={`${url}#${props.icon}`} />
    </svg>
)

export default Icon