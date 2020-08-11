import React, {useState, useEffect} from 'react'

function HookMouse() {
    const [point, setPoint] = useState({x:0, y:0})

    const logMousePosition = e => {
        console.log('Mouse Event')
        setPoint({x: e.clientX, y: e.clientY})
    }
    useEffect(() => {
        console.log('useEffect called')
        window.addEventListener('mousemove', logMousePosition)

        return () => {
            console.log('Component unmounting code')
            window.removeEventListener('mousemove', logMousePosition)
        }
    }, [])
    return (
        <div>
            Hooks X - {point.x}, Y- {point.y}
        </div>
    )
}

export default HookMouse
