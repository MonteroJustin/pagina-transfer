import React, { useEffect } from 'react'

const Nosotros = () => {

    useEffect(() => {

        const clickear = () => {
            console.log("Click")
        }

        window.addEventListener("click", clickear)

        return () => {

            window.removeEventListener("click", clickear)
        }

    }, [])


    return (
        <div className='container'>
            <h2 className='main.title'>Nosotros</h2>
            <p>Este es el componente "Nosotros"</p>
        </div>
    )
}

export default Nosotros