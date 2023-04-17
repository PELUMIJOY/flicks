import bannerStyle from './Payments.module.css';
import loyaltyCard from '../../../assets/loyaltyCard.svg'
export const LoyaltyCard = () => {
    return (
        <div className={`${bannerStyle.section} ${bannerStyle.right}`}>
            <div className={bannerStyle.rightContent}>
                <span>Coming soon</span>
                <div className={`${bannerStyle.animated} ${bannerStyle.fadeInUp}`}>
                    <h1>Access digital loyalty cards and earn customer points</h1>
                    <p>Get rewarded by your favorite merchant with digital loyalty cards and earn customer points to
                        shop more. With our app, no more unused/untraceable loyalty customer points.</p>
                </div>
            </div>
            <div className={`${bannerStyle.animated} ${bannerStyle.rightSlide}`}>
                <img src={loyaltyCard} alt={'Fast Payment'}/>
            </div>
        </div>
    )
}
