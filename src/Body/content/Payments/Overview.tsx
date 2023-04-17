import bannerStyle from './Payments.module.css';
import overview from '../../../assets/financialOverview.svg'

export const Overview = () => {
    return (
        <div className={`${bannerStyle.section} ${bannerStyle.left}`}>
            <div className={`${bannerStyle.animated} ${bannerStyle.leftSlide}`}>
                <img src={overview} alt={"Flick App"}/>
            </div>
            <div className={bannerStyle.leftContent}>
                <div className={`${bannerStyle.animated} ${bannerStyle.fadeInUp}`}>
                    <h1>Your Financial Overview at a glance</h1>
                    <p>From the big picture to the tiny details, Flick gives you the full overview of all your finances.
                        Discover where your money really goes each month thanks to powerful insights about your spending
                        habits.</p>
                </div>
            </div>
        </div>
    )
}