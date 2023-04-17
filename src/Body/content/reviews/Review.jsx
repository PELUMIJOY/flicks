import reviewStyle from './Review.module.css';
import member1 from '../../../assets/member3.jpeg';
import member2 from '../../../assets/member4.jpeg';
import quote from '../../../assets/quote.svg';
import star from '../../../assets/Star.svg'

export const Review = () => {
    return (
        <div className={reviewStyle.container}>
            <div className={reviewStyle.wrapper}>
                <div className={reviewStyle.reviews}>
                    <button>❮</button>
                    <div className={reviewStyle.inner}>
                        <div className={reviewStyle.frame1}>
                            <div className={reviewStyle.review}>
                                <div className={reviewStyle.section}>
                                    <div className={reviewStyle.content}>
                                        <img className={reviewStyle.memberImage} alt={"member 1"} src={member1}/>
                                        <h3>Temitope Ikushika</h3>
                                        <img className={reviewStyle.starImage} alt={"Star Image"} src={star}/>
                                        <img className={reviewStyle.quote} alt={"Quoter"} src={quote}/>
                                    </div>
                                    <p className={reviewStyle.comment}>The ability to have multiple bank account
                                        transitions from 1 App, gives the user a sense of single-point ownership for any
                                        financial transition to be made.I love how easy this app is and it really
                                        assists me in my day to day transactions.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className={reviewStyle.frame2}>
                            <div className={reviewStyle.review}>
                                <div className={reviewStyle.section}>
                                    <div className={reviewStyle.content}>
                                        <img className={reviewStyle.memberImage} alt={"member 1"} src={member2}/>
                                        <h3>Oyinda Akinsola</h3>
                                        <img className={reviewStyle.starImage} alt={"Star Image"} src={star}/>
                                        <img className={reviewStyle.quote} alt={"Quoter"} src={quote}/>
                                    </div>
                                    <p className={reviewStyle.comment}>The Flick app is very wonderful. The ease in
                                        depositing and withdrawing is very distinguished.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button>❯</button>
                </div>
            </div>
        </div>
    )
}