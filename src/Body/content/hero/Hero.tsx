import heroStyle from './Hero.module.css';
import heroImage from '../../../assets/heroImage.svg';

export const Hero = () => {
    return (
        <div className={heroStyle.heroMain}>
            <div className={heroStyle.content}>
                <h1 className={heroStyle.bigContent}>Payment has never been this{' '}
                    <span className={heroStyle.green}>
                         easy
                    </span>
                </h1>
                <p className={heroStyle.words}>One secure platform to pay, get paid, and manage all your finances
                    better!</p>
                <div className={heroStyle.clickable}>
                    <a href="https://flickuser.page.link/userinvite">Join as a User</a>
                    <a className={heroStyle.open} href="https://flickmerchants.page.link/tV8u">Open a Business Account</a>
                </div>
                </div>
            <div className={heroStyle.heroImage}>
            <img src={heroImage} alt={'heroImage'}/>
           </div>
            
        </div>
    )
}