import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import emailjs from 'emailjs-com'
import { InputChangeHandler, FormIsValid, ResetInput } from '../../shared/InputTools'
import ImageHeading from '../UI/Headers/ImageHeading';
import Button from '../UI/Buttons/Button/Button';
import img from '../../assets/images/aboutus.png'
import cls from './Contact.module.css'
import { Helmet } from 'react-helmet';

const Contact = (props: any) => {

    const [inputData, setInputData] = useState({
        from_name: {
            elementConfig: { name: "from_name", type: "text" },
            elementType: "input",
            label: "",
            invalid: false,
            value: "",
            rules: { required: true }
        },
        from_lastname: {
            elementConfig: { name: "from_lastname", type: "text" },
            elementType: "input",
            label: "",
            invalid: false,
            value: "",
            rules: { required: false }
        },
        from_email: {
            elementConfig: { name: "from_email", type: "email" },
            elementType: "input",
            label: "",
            invalid: false,
            value: "",
            rules: { required: true, isEmail: true }
        },
        subject: {
            elementConfig: { name: "subject", type: "text" },
            elementType: "input",
            label: "",
            invalid: false,
            value: "",
            rules: { required: true }
        },
        message: {
            elementConfig: { name: "message", type: "text" },
            elementType: "textarea",
            label: "",
            invalid: false,
            value: "",
            rules: { required: true }
        }
    });
    const changeHandler = (event: any) => {
        InputChangeHandler(event, inputData, setInputData)
    }
    const { t } = useTranslation()

    const resetForm = () => {
        ResetInput(inputData, setInputData)
    }


    function sendEmail(e: any) {
        e.preventDefault();



        if (!FormIsValid(inputData, setInputData)) {
            return;
        }
        emailjs.sendForm('service_82jlygh', 'template_p3gr6kn', e.target, 'user_JgwSzZB6Hb57ziHONIKSi')
            .then(() => {
                alert('წერილი გაგზავნილია!\n\nMessage Sent!')
                resetForm()
            })
            .catch(error => {
                console.log(error)
                alert('წერილის გაგზავნა ვერ მოხერხდა, გთხოვთ მოგვწეროთ პირდაპირ მეილზე: top.elektro@mail.ru!\n\nFailed to send email, please email us directly on top.elektro@mail.ru')
            });
    }


    return (
        <section className={cls.Contact}>
            <Helmet>
                <title>Top Electro - კონტაქტი</title>
                <meta name='robots' content='index' />
                <meta name="description" content=",,TOP ELEKTRO’’ - საკონტაქტო ინფორმაცია" />
                <meta name="keywords" content="topelectro, topelektro,TDM topelektro, topelectro კონტაქტი, topelectro საკონტაქტო, topelectro ინფორმაცია" />
            </Helmet>
            <ImageHeading img={img} homePage={t('navigation.home')} heading={t('contact.header')} page={t('contact.page')} />

            <div className={cls.LeftDiv} style={{ backgroundColor: "#fff", position: "relative" }}>
                <form className={cls.ContactForm} onSubmit={sendEmail}>
                    <div className={[cls.InputWrapper, cls.DualInput].join(' ')}>
                        <div>
                            <label>{t('common.name')}</label>
                            <input
                                className={inputData.from_name.invalid ? 'invalid-form' : ''}
                                {...inputData.from_name.elementConfig}
                                value={inputData.from_name.value}
                                placeholder={t('common.name')}
                                onChange={changeHandler} />
                        </div>
                        <div>
                            <label>{t('common.lastname')}</label>
                            <input
                                className={inputData.from_lastname.invalid ? 'invalid-form' : ''}
                                {...inputData.from_lastname.elementConfig}
                                value={inputData.from_lastname.value}
                                placeholder={t('common.lastname')}
                                onChange={changeHandler} />
                        </div>
                    </div>
                    <div className={cls.InputWrapper}>
                        <label>{t('common.email')}</label>
                        <input
                            className={inputData.from_email.invalid ? 'invalid-form' : ''}
                            {...inputData.from_email.elementConfig}
                            value={inputData.from_email.value}
                            placeholder={t('common.email')}
                            onChange={changeHandler} />
                    </div>
                    <div className={cls.InputWrapper}>
                        <label>{t('contact.subject')}</label>
                        <input
                            className={inputData.subject.invalid ? 'invalid-form' : ''}
                            {...inputData.subject.elementConfig}
                            value={inputData.subject.value}
                            placeholder={t('contact.subject')}
                            onChange={changeHandler} />
                    </div>
                    <div className={cls.InputWrapper}>
                        <label>{t('contact.letter')}</label>
                        <textarea
                            className={inputData.message.invalid ? 'invalid-form' : ''}
                            {...inputData.message.elementConfig}
                            value={inputData.message.value}
                            onChange={changeHandler} />;
                    </div>





                    <div className={[cls.InputWrapper, cls.ButtonWrapper].join(' ')}>
                        <Button btnClass="success">{t('contact.send')}</Button>
                    </div>
                </form>
            </div>

            <div className={cls.RightDiv} style={{ backgroundColor: "#fff" }}>
                <div className={cls.ContactInfo}>
                    <div>
                        <h6>{t('common.mail')}</h6>
                        <p className="light-red">top.elektro@mail.ru</p>
                    </div>
                    <div>
                        <h6>{t('common.address')}</h6>
                        <p>{t('home.locations.1.address')}</p>
                    </div>
                    <div className={cls.PhonesWrapper}>
                        <h6>{t('common.phone')}</h6>
                        <p className="light-red">+995 568 77 86 37</p>
                        <p className="light-red">+995 568 77 86 27</p>
                        <p className="light-red">+995 571 24 85 21</p>
                    </div>
                </div>
                <div className={cls.MiniMap}>
                    <iframe title="store2" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3054.8538720738743!2d44.78073249990743!3d41.728674272356976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4044736d560971ab%3A0xa5c284456595f753!2sTopElectro!5e1!3m2!1sen!2sge!4v1609427578568!5m2!1sen!2sge"></iframe>
                </div>
            </div>
        </section>
    );
}

export default Contact