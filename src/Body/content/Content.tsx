import contentStyle from './Content.module.css'
import {Customer} from "./Customers/Customer";
import {FlickLogo} from "./Payments/FlickLogo";
import {Payment} from "./Payments/Payment";
import {Overview} from "./Payments/Overview";
import {LoyaltyCard} from "./Payments/LoyaltyCard";
import {Security} from "./Payments/Security";

export const Content = () => {
    return(
        <div className={contentStyle.main}>
            <Customer />
            <FlickLogo />
            <Payment />
            <Overview />
            <LoyaltyCard />
            <Security />
        </div>
    )
}