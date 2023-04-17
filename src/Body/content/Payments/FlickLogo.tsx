import bannerStyle from './Payments.module.css';
import flickApp from '../../../assets/multipleApp.svg'

export const FlickLogo = () => {
    return (
        <div className={`${bannerStyle.section} ${bannerStyle.left}`}>
            <div className={`${bannerStyle.animated} ${bannerStyle.leftSlide}`}>
                <img src={flickApp} alt={"Flick App"}/>
            </div>
            <div className={bannerStyle.leftContent}>
                <div className={`${bannerStyle.animated} ${bannerStyle.fadeInUp}`}>
                    <h1>No need for multiple apps</h1>
                    <p>Easily connect all your accounts. From cash and credit to loans and investments, you can see your
                        complete financial picture on Flick.</p>
                </div>
            </div>
        </div>
    )
}