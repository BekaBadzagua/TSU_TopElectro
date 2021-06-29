import React, { ReactElement, useState } from 'react'
import { useTranslation } from 'react-i18next'
import cls from '../Layout.module.css'
import GeoFlag from '../../../assets/flags/32px-Flag_of_Georgia.svg.png'
import EngFlag from '../../../assets/flags/64px-Flag_of_the_United_States.svg.png'
import RuFlag from '../../../assets/flags/Flag_of_Russia.svg.webp'

interface Props {

}

const languages = [
    { lang: "ge", text: "ქართული", icon: <img src={GeoFlag} alt="geo flag" style={{marginRight:10}}/>},
    { lang: "ru", text: "Русский", icon: <img src={EngFlag} alt="rus flag" style={{marginRight:10, width:32,height:21}}/> },
    { lang: "en", text: "English", icon: <img src={RuFlag} alt="eng flag" style={{marginRight:10}}/> }
]

export default function LanguageBox(props: Props): ReactElement {

    const [isDropdownOpen, setDropdown] = useState(false);
    const [chosenLanguage, setChosenLanguage] = useState(languages[0]);
    const { i18n } = useTranslation();

    const changeLanguage = (lang: string) => {

        let index;
        switch (lang) {
            case "ge": index = 0; break;
            case "ru": index = 1; break;
            case "en": index = 2; break;
            default: index = 0;
        }
        setChosenLanguage(languages[index])
        i18n.changeLanguage(lang)
    }


    let langList: any = [...languages]
        .filter(item => item.lang !== chosenLanguage.lang)
        .map((item: any) => (
            <div onClick={(e) => changeLanguage(item.lang)}>
            {item.icon}
            <span key={item.lang} className="dropdown-item" >{item.text}</span>
            </div>)
       )

    return (
        <span className="dropdown-toggle" onClick={() => setDropdown(!isDropdownOpen)}>
            {chosenLanguage.icon}
            {chosenLanguage.text}
            <div className={['dropdown-menu', cls.langList, isDropdownOpen ? "show" : ""].join(' ')}>
                {langList}
            </div>
        </span>
    )
}
