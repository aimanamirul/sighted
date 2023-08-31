'use client'

import { Group, Shape, Rect, Text } from 'react-konva'
import { Html } from 'react-konva-utils';
import { useState } from 'react'

export default function LyricsBlob(props) {
    const [coords, setCoords] = useState({ x: 0, y: 0 });
    let textContent = props.text;

    return (
        <Group draggable>
            <Rect
                x={coords.x}
                y={coords.y}
                width={100}
                height={100}
                fill="red"
                shadowBlur={10}
            />
            <Html>
                <h1 className='font-montserrat mx-3 my-1 font-bold ' >{textContent}</h1>
                <p className='font-montserrat mx-3 my-1' >{textContent}</p>
            </Html>
        </Group>
    )
}