import bodyStyles from './Body.module.css'
import {Hero} from "./content/hero/Hero";
import {Content} from "./content/Content";
import {DownloadApp} from "./content/downloadApp/DownloadApp";
import {Review} from "./content/reviews/Review";
import {JoinFlick} from "./content/joinFlick/JoinFlick";

export const Body = () => {
    return (
        <div className={bodyStyles.pageBody}>
            <Hero />
            <Content />
            <DownloadApp />
            <Review />
            <JoinFlick />
        </div>
    )
}