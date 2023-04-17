import trustStyle from './Customer.module.css'

export const Customer = () => {
    return (
        <div className={trustStyle.trustAnimation}>
            <div className={trustStyle.container}>
                <h1 className={trustStyle.title}>Customers all over Nigeria trust Flick to transact faster.</h1>
                <div className={trustStyle.inner}>
                    <p className={trustStyle.description}>Connect your bank accounts, view your net worth in a glance, and make contactless payments.</p>
                <div className={trustStyle.metrics}>
                    <div className={trustStyle.count}>
                        <h1 className={trustStyle.header1}>20
                            <span>+</span>
                        </h1>
                        <p>Bank integrations</p>
                    </div>
                    <div className={trustStyle.count}>
                        <h1 className={trustStyle.header1}>$2M
                            <span>+</span>
                        </h1>
                        <p>Transactions processed</p>
                    </div>
                    <div className={trustStyle.count}>
                        <h1 className={trustStyle.header1}>72k
                            <span>+</span>
                        </h1>
                        <p>Transactions completed</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}