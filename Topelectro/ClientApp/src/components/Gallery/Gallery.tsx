import React from 'react'

import avtomatebiIMG from '../../assets/images/gallery/avtomatebi.png'
import axaliWeliIMG from '../../assets/images/gallery/axaliWeli.png'
import bagiIMG from '../../assets/images/gallery/bagi.png'
import bavrIMG from '../../assets/images/gallery/bavr.png'
import eko2020IMG from '../../assets/images/gallery/eko2020.png'
import gamkofiKolofebiIMG from '../../assets/images/gallery/gamkofiKolofebi.png'
import instrumentebiIMG from '../../assets/images/gallery/instrumentebi.png'
import kabelebiIMG from '../../assets/images/gallery/kabelebi.png'
import rozetebiIMG from '../../assets/images/gallery/rozetebi.png'
import rubilnikiIMG from '../../assets/images/gallery/rubilniki.png'
import sanatebiIMG from '../../assets/images/gallery/sanatebi.png'
import sipIMG from '../../assets/images/gallery/sip.png'

import avtomatebiPDF from '../../assets/files/gallery/avtomatebi.pdf'
import axaliWeliPDF from '../../assets/files/gallery/axaliWeli.pdf'
import bagiPDF from '../../assets/files/gallery/bagi.pdf'
import bavrPDF from '../../assets/files/gallery/bavr.pdf'
import eko2020PDF from '../../assets/files/gallery/eko2020.pdf'
import gamkofiKolofebiPDF from '../../assets/files/gallery/gamkofiKolofebi.pdf'
import instrumentebiPDF from '../../assets/files/gallery/instrumentebi.pdf'
import kabelebiPDF from '../../assets/files/gallery/kabelebi.pdf'
import rozetebiPDF from '../../assets/files/gallery/rozetebi.pdf'
import rubilnikiPDF from '../../assets/files/gallery/rubilniki.pdf'
import sanatebiPDF from '../../assets/files/gallery/sanatebi.pdf'
import sipPDF from '../../assets/files/gallery/sip.pdf'
import { Helmet } from 'react-helmet';




const Gallery = (props: any) => {

    return (
        <div className="row gallery">
            <Helmet>
                <title>Top Electro - კატალოგი</title>
                <meta name='robots' content='index' />
                <meta name="description" content=",,TOP ELEKTRO’’ - კატალოგი, იხილეთ ჩვნი პროდუქტი" />
                <meta name="keywords" content="topelectro, topelektro,TDM topelektro, topelectro კატალოგი, topelectro კატალოგი, topelectro კატალოგი" />
            </Helmet>

            <div style={{ width: "90%", margin: "auto" }}>
                <div className="col-md-12" style={{ padding: 0 }}>

                    <div className="mdb-lightbox">

                        <figure className="col-md-4" style={{ display: "inline-block" }}>
                            <a href={axaliWeliPDF} target='_blank' rel="noopener noreferrer">
                                <img alt="axaliWeliIMG" src={axaliWeliIMG} className="img-fluid" />
                            </a>
                        </figure>
                        <figure className="col-md-4" style={{ display: "inline-block" }}>
                            <a href={bagiPDF} target='_blank' rel="noopener noreferrer">
                                <img alt="bagiIMG" src={bagiIMG} className="img-fluid" />
                            </a>
                        </figure>

                        <figure className="col-md-4" style={{ display: "inline-block" }}>
                            <a href={eko2020PDF} target='_blank' rel="noopener noreferrer">
                                <img alt="eko2020IMG" src={eko2020IMG} className="img-fluid" />
                            </a>
                        </figure>
                        <figure className="col-md-4" style={{ display: "inline-block" }}>
                            <a href={gamkofiKolofebiPDF} target='_blank' rel="noopener noreferrer">
                                <img alt="gamkofiKolofebiIMG" src={gamkofiKolofebiIMG} className="img-fluid" />
                            </a>
                        </figure>

                        <figure className="col-md-4" style={{ display: "inline-block" }}>
                            <a href={instrumentebiPDF} target='_blank' rel="noopener noreferrer">
                                <img alt="instrumentebiIMG" src={instrumentebiIMG} className="img-fluid" />
                            </a>
                        </figure>
                        <figure className="col-md-4" style={{ display: "inline-block" }}>
                            <a href={rozetebiPDF} target='_blank' rel="noopener noreferrer">
                                <img alt="rozetebiIMG" src={rozetebiIMG} className="img-fluid" />
                            </a>
                        </figure>
                        <figure className="col-md-4" style={{ display: "inline-block" }}>
                            <a href={sipPDF} target='_blank' rel="noopener noreferrer">
                                <img alt="sipIMG" src={sipIMG} className="img-fluid" />
                            </a>
                        </figure>
                        <figure className="col-md-4" style={{ display: "inline-block" }}>
                            <a href={sanatebiPDF} target='_blank' rel="noopener noreferrer">
                                <img alt="sanatebiIMG" src={sanatebiIMG} className="img-fluid" />
                            </a>
                        </figure>
                        <figure className="col-md-4" style={{ display: "inline-block" }}>
                            <a href={kabelebiPDF} target='_blank' rel="noopener noreferrer">
                                <img alt="kabelebiIMG" src={kabelebiIMG} className="img-fluid" />
                            </a>
                        </figure>
                        <figure className="col-md-4" style={{ display: "inline-block" }}>
                            <a href={avtomatebiPDF} target='_blank' rel="noopener noreferrer">
                                <img alt="eko2020IMG" src={avtomatebiIMG} className="img-fluid" />
                            </a>
                        </figure>
                        <figure className="col-md-4" style={{ display: "inline-block" }}>
                            <a href={bavrPDF} target='_blank' rel="noopener noreferrer">
                                <img alt="bavrIMG" src={bavrIMG} className="img-fluid" />
                            </a>
                        </figure>
                        <figure className="col-md-4" style={{ display: "inline-block" }}>
                            <a href={rubilnikiPDF} target='_blank' rel="noopener noreferrer">
                                <img alt="rubilnikiIMG" src={rubilnikiIMG} className="img-fluid" />
                            </a>
                        </figure>
                    </div>
                </div>
            </div>

        </div>
    )
}


export default Gallery