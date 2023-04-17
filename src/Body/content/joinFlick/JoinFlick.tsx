import joinStyle from './JoinFlick.module.css'
import one from '../../../assets/one.svg'
import two from '../../../assets/two.svg'
import three from '../../../assets/three.svg'

export const JoinFlick = () => {
  return(
      <div className={joinStyle.section}>
          <div className={joinStyle.left}>
              <div className={joinStyle.join}>
                  <h1>Join Flick business today!</h1>
                  <p>Flick is simple to set up. Just download the app and you’re ready to go.</p>
                  <a href="#">Get Started</a>
              </div>
          </div>
          <div className={joinStyle.right}>
              <div className={`${joinStyle.index} ${joinStyle.first}`}>
                  <img className={joinStyle.image} src={one} alt={"one"} />
                  <div className={joinStyle.content}>
                      <h1>Download the app</h1>
                      <p>Join our 22,000 users and start managing your money with ease today.</p>
                  </div>
              </div>
              <div className={`${joinStyle.index} ${joinStyle.second}`}>
                  <img className={joinStyle.image} src={two} alt="number" />
                  <div className={joinStyle.content}>
                      <h1>Securely link your account</h1>
                      <p>From cash to investments, you can easily connect all your accounts.</p>
                  </div>
              </div>
              <div className={`${joinStyle.index} ${joinStyle.third}`}>
                  <img className={joinStyle.image} src={three} alt={"one"} />
                  <div className={joinStyle.content}>
                      <h1>Start transacting</h1>
                      <p>Experience a fresh way to manage your money and transact faster today.</p>
                  </div>
              </div>
          </div>
      </div>
  )
}