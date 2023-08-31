'use client'

import { useState, useRef, useEffect, Suspense } from 'react';
import { Stage, Layer, Rect, Text, Group } from 'react-konva';

import Loading from './loading';
import LyricsBlob from './LyricsBlob';

export default function KonvaClient() {
    //for setting stage width & height
    const divRef = useRef(null)
    const [dimensions, setDimensions] = useState({
        width: 0,
        height: 0
    })

    useEffect(() => {
        if (divRef.current?.offsetHeight && divRef.current?.offsetWidth) {
            setDimensions({
                width: divRef.current.offsetWidth,
                height: divRef.current.offsetHeight
            })
        }
    }, [])

    //initialization of blobs, temp only
    let initBlobs = [
        <Rect
            x={20}
            y={50}
            width={100}
            height={100}
            fill="red"
            shadowBlur={10}
            draggable
        />,
        <Rect
            x={30}
            y={50}
            width={100}
            height={100}
            fill="white"
            shadowBlur={10}
            draggable
            className="border rounded-2xl"
        />
    ];

    const [blobs, setBlobs] = useState([initBlobs]);
    let cssClasses = `bg-slate-700 w-${dimensions.width} h-${dimensions.height} border rounded-2xl border-solid border-gray-50 overflow-hidden`;

    function handleDragStart() {

    }


    return (
        <div className='w-full h-full flex flex-col justify-center' ref={divRef} >
            <Suspense fallback={<Loading />}>
                <Stage className={cssClasses} width={dimensions.width} height={dimensions.height}>
                    <Layer>
                        {/* {...blobs} */}
                        <LyricsBlob text="Text 1" />
                    </Layer>
                </Stage>
            </Suspense>
        </div>
    );
}