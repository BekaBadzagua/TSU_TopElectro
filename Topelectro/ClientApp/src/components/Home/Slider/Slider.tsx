import React, { useEffect, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import $ from 'jquery'
import { yearsDiff_UntillNow } from '../../../shared/TimeTools'
import cls from './Slider.module.css'

import image1 from '../../../assets/images/slides/slide1.png'
import image2 from '../../../assets/images/slides/team.jpg'
import image3 from '../../../assets/images/slides/slide2.png'
import image4 from '../../../assets/images/slides/slide3.png'
import Button from '../../UI/Buttons/Button/Button'


const Slider = (props: any) => {
    let sliderData: any = {
        length: 0,
        currentIndex: 0,
        slides: null,
        bullets: null,
        intervalId: null
    }

    const { t } = useTranslation();




    const autoMove = useCallback((slides: JQuery<HTMLElement>) => {
        slides[sliderData.currentIndex].classList.remove(cls.SlideVisible)
        sliderData.bullets[sliderData.currentIndex].classList.remove(cls.ActiveBullet)
        sliderData.currentIndex = nextIndex(sliderData.currentIndex, sliderData.length)
        slides[sliderData.currentIndex].classList.add(cls.SlideVisible)
        sliderData.bullets[sliderData.currentIndex].classList.add(cls.ActiveBullet)
    }, [sliderData])

    const nextIndex = (currentInd: number, length: number, increment = true) => {
        if (increment) {
            currentInd = currentInd + 1;
            if (currentInd === length)
                currentInd = 0
        }
        else {
            currentInd = currentInd - 1;
            if (currentInd === -1)
                currentInd = length - 1
        }
        return currentInd
    }
    const makeMove = (direction: string | null = null, toIndex: number | null = null) => {
        sliderData.slides[sliderData.currentIndex].classList.remove(cls.SlideVisible)
        sliderData.bullets[sliderData.currentIndex].classList.remove(cls.ActiveBullet)

        if (toIndex !== null)
            sliderData.currentIndex = toIndex
        else {
            if (direction === "left")
                sliderData.currentIndex = nextIndex(sliderData.currentIndex, sliderData.length, false)
            if (direction === "right")
                sliderData.currentIndex = nextIndex(sliderData.currentIndex, sliderData.length, true)
        }
        sliderData.slides[sliderData.currentIndex].classList.add(cls.SlideVisible)
        sliderData.bullets[sliderData.currentIndex].classList.add(cls.ActiveBullet)

        // reset interval
        clearInterval(sliderData.intervalId)
        sliderData.intervalId = setInterval(() => {
            autoMove(sliderData.slides)
        }, 10000)
    }

    useEffect(() => {
        sliderData.length = $("#slidesWrapper").children().length;
        sliderData.slides = $("#slidesWrapper").children();
        sliderData.bullets = $("#slidesBullets").children();
        sliderData.intervalId = setInterval(() => {
            autoMove(sliderData.slides)
        }, 10000)

        return function cleanup() {
            clearInterval(sliderData.intervalId)
        }
    }, [autoMove, sliderData])

    return (
        <div className={cls.Slider}>
            <div className={cls.SliderWrapper} id="slidesWrapper">
                <div className={cls.Slide} style={{ opacity: 1, zIndex: 10 }}>
                    <img src={image1} alt="slide" />
                    <div className={cls.BackDrop}>
                        <div className={cls.SliderInfo}>
                            <h1>{t('home.slides.1.bigText')}</h1>
                            <p>{t('home.slides.1.smallText')}</p>
                            <Link to="/products"><Button btnClass="warning">{t('home.slides.button.see')}</Button></Link>
                        </div>
                    </div>
                </div>

                <div className={cls.Slide}>
                    <img src={image3} alt="slide" />
                    <div className={cls.BackDrop}>
                        <div className={cls.SliderInfo}>
                            <h1>{t('home.slides.2.bigText')}</h1>
                        </div>
                    </div>

                </div>
                <div className={cls.Slide}>
                    <img src={image4} alt="slide" />
                    <div className={cls.BackDrop}>
                    </div>

                </div>
                <div className={cls.Slide}>
                    <img src={image2} alt="slide" />
                    <div className={cls.BackDrop}>
                        <div className={cls.SliderInfo}>
                            <h1>{t('home.slides.4.smallText.1')} {yearsDiff_UntillNow("01/01/2016")} {t('home.slides.4.smallText.2')}</h1>
                            <p>{t('home.slides.4.bigText')}</p>
                            <Link to="/about"><Button btnClass="warning">{t('home.slides.button.see')}</Button></Link>
                        </div>
                    </div>

                </div>
            </div>


            <div className={cls.SliderAction}>
                <div onClick={() => { makeMove("left") }}><span> &lt; </span></div>
                <div onClick={() => { makeMove("right") }}><span> &gt; </span></div>
            </div>
            <div className={cls.BottomButtons} id="slidesBullets">
                <span onClick={() => { makeMove(null, 0) }} className={cls.ActiveBullet}></span>
                <span onClick={() => { makeMove(null, 1) }}></span>
                <span onClick={() => { makeMove(null, 2) }}></span>
                <span onClick={() => { makeMove(null, 3) }}></span>
            </div>
        </div>
    )
}

export default Slider