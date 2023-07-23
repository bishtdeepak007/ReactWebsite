import React, { useEffect, useState } from 'react'
import { AiOutlineArrowUp } from 'react-icons/ai';
import "./style.scss";

const Gototop = () => {
    const [vissible, setVissible] = useState(false)
    const goToTop = () => {
        window.scrollTo({ top: 0 })
    }
    const findscroll = () => {
        const heightVal = 250;
        const scroll =
            document.body.scrollTop || document.documentElement.scrollTop
        if (scroll > heightVal) {
            setVissible(true)
        } else {
            setVissible(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", findscroll)
    }, [])
    return (
        <section className='GoToTop-section'>
            {vissible && (
                <button className='topBtn' onClick={goToTop}>
                    <AiOutlineArrowUp className='icon' />
                </button>
            )}
        </section>
    )
}

export default Gototop