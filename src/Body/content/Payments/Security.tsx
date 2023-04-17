import bannerStyle from './Payments.module.css';
import security from '../../../assets/security.svg';

export const Security = () => {
    return (
        <div className={`${bannerStyle.section} ${bannerStyle.left}`}>
            <div className={`${bannerStyle.animated} ${bannerStyle.leftSlide}`}>
                <img src={security} alt={"Flick App"}/>
            </div>
            <div className={bannerStyle.leftContent}>
                <div className={`${bannerStyle.animated} ${bannerStyle.fadeInUp}`}>
                    <h1>Security & support you can trust</h1>
                    <p>Flick uses secure processes to protect your information and help prevent unauthorized use. Also,
                        If you need help, Flick’s support channels are on standby 24/7.</p>
                </div>
            </div>
        </div>
    )
}