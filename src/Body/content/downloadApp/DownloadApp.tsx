import downloadStyle from './DownloadApp.module.css';
import android from "../../../assets/downloadAndriod.svg";
import apple from "../../../assets/downloadApple.svg";
import scan from '../../../assets/videoPlay.svg';

export const DownloadApp = () => {
    return (
        <div className={downloadStyle.main}>
            <div className={downloadStyle.contain}>
                <div className={downloadStyle.appDownload}>
                    <div className={downloadStyle.divTitle}>
                        <p>DOWNLOAD THE FLICK APP</p>
                        <h1>Start making confident {' '}
                            <span>money moves</span>
                            {' '} today
                        </h1>
                        <div className={downloadStyle.footerDownloadLink}>
                            <a href="#">
                                <img className={downloadStyle.image} src={android} alt={'GooglePlayStore'}/>
                            </a>
                            <a href="#">
                                <img className={downloadStyle.image} src={apple} alt={'AppleStore'}/>
                            </a>
                        </div>
                    </div>
                </div>
                <img className={downloadStyle.scan} src={scan} alt={"QR code scan"}/>
            </div>
        </div>
    )
}