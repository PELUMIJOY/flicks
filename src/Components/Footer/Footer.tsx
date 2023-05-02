import React from 'react'
import styled from 'styled-components';
import logo from '../../assets/FlickLogo2.svg'
import apple from '../../assets/downloadApple.svg';
import android from '../../assets/downloadAndriod.svg';
import {FiFacebook} from 'react-icons/fi'
import {CiTwitter} from 'react-icons/ci'
import {FaLinkedin} from 'react-icons/fa'
import {FaInstagramSquare} from 'react-icons/fa'


const Footer = () => {
const FooterContainer = styled.footer`
  background: #151f32;
  color: #f2f2f2;
  padding: 80px 60px;
  margin-top:80px;
  width:90%;
  @media (max-width: 1000px) {
  padding: 5px 35px;
  width:90%;
  }
  @media (max-width: 280px){
    width:100%;
  }
`;

const Footerup = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 768px) {
   flex-direction:column;
    }
`;

const FooterRight = styled.div`
height:20px;
display:flex;
flex:1;
flex-direction:column;
align-items:flex-start;
color:#fff;
width: 35%;
@media (max-width: 768px) {
    text-align:left;
    width: 100%;
    
    
     }

  .image {
    margin-bottom: 16px;
     height: auto;
    max-width: 100%;      
  }
  .image2{
    margin:10px;
    cursor:pointer
}

  .footerPara {
    font-size: 18px;
    font-weight: 500;
    line-height: 28px;
    margin-bottom: 24px;
    color: #d5f2f0;
    @media (max-width: 768px) {
        // flex-direction:row;
        justify-content: flex-start;
        text-align:flex-start;
        font-size: 15px;
    font-weight:400;
         }
      
       
  .footerDownloadLink {
    display: flex;
    justify-content: flex-start;

    .downloadLink {
      margin-right: 16px;

      .image2 {
        height: 44px;
        width: 133px;
      }
    }
  }

  @media (max-width: 1000px) {
    width: 100%;
    margin-bottom: 10px;
  }
`;

const Footermiddle = styled.div`
  display: flex;
  flex:2;
  flex-direction: row;
  align-items: flex-start;
  width: 60%;
 text-align:left;
 margin-left:100px;
 border-left:1px solid white;
 margin-bottom: 40px;
 color: #d5f2f0;
 @media (max-width: 1024px) {
    border:none;
    border-top:20px;
    margin-left:0;
    margin-bottom: 20px;
  }
  @media (max-width: 280px) {
  flex-direction:column;  
  flex:none;
  }


  .company{
margin:0 50px;
@media (max-width: 1000px) {
margin:0;
  }

  }
.developer{
    margin:0 50px; 
    @media (max-width: 280px) {
    
      margin:0; 
      }
}
.address{
    text-align:left;
    align-items:flex-start;
   margin:auto;
   width:auto;

    media (max-width: 1024px) {
       padding:20px;
    

          }
}

  h3 {
    margin-bottom: 16px;
    font-size: 22px;
    line-height: 28px;
  }

  .list {
    list-style: none;
  }

    .listItem {
      margin-bottom: 10px;
      font-size: 18px;
      line-height: 28px;
      align-items:left;
      justify-content:flex-start;

      a {
        text-decoration: none;
       color: #d5f2f0;

        &:hover {
          color:darkcyan;
        }
      }
    }
  }

  .addressP{
    padding:0 30px;
    line-height:2rem;

    @media (max-width: 280px) {
  width:100%; 
  padding:0 ;
  font-size:18px;
  font-weight:500;
      }

   }



  @media (max-width: 1000px) {
    width: 50%;
  }
`;

const FooterDown = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #f2f2f2;
  padding-top: 40px;
  margin-top: 40px;
  font-size: 16px;
  line-height: 24px;

  @media (max-width: 1000px) {
    flex-direction: column;
    text-align: center;
    font-size: 14px;
  }

  & > div:first-child {
    margin-right: auto;
  }

  & > div:last-child {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    & > div:first-child {
      display: flex;

      svg {
        color: #757589;
        font-size: 24px;
        margin-right: 20px;

        &:hover {
            color: darkcyan;
        }
      }
    }

    & > div:last-child {
      display: flex;

      p {
        text-decoration: none;
        cursor: pointer;
        margin: 20px;
        color: #757589;

        &:hover {
          color: darkcyan;
        }
      }
    }
  }
`;



const SocialMedia = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-wrap: wrap;
  color: #757589;
`;

const SocialMediaLink = styled.div`
  display: inline-block;
  margin-right: 10px;
  color: #757589;

  &:hover {
    color: darkcyan;
  }
`;

const Unsubscribe = styled.div`
  margin-right: 20px;
`;

const DeleteProfile = styled.div`
  margin-right: 20px;
`;


  return (
    <FooterContainer>
<Footerup>
    <FooterRight>
    <img className="image" src={logo} alt='Flick Logo'/>
     <p className="footerPara">One secure platform to pay, get paid, and manage all  your finances better! </p>
     <div className="footerDownloadLink">
    <a className="downloadLink" href="#">
        <img className="image2" src={android} alt={'GooglePlayStore'}/></a>
        <a className="downloadLink" href="#">
        <img className="image2"src={apple} alt={'AppleStore'}/></a>
     </div>
    </FooterRight>
    <Footermiddle className='footer-left'>
        <div className='company'>
        <h3 >Company</h3>
        <ul className="list">
        <li className='listItem'> <a href="#">About Us </a></li>
        <li className='listItem'> <a href="#">Pricing </a></li>
        <li className='listItem'> <a href="#">FAQs</a> </li>
        <li className='listItem'> <a href="#">Terms & Conditions</a></li>
        <li className='listItem'> <a href="#">Privacy Policy</a></li>
        </ul>
        </div>
     
    <div className='developer'>
        <h3>Developers</h3>
        <ul className="list">
        <li className='listItem'> <a href="#">Overview </a></li>
        <li className='listItem'> <a href="#">API Documentation </a></li>
        <li className='listItem'>  <a href="#">Support</a></li>
        </ul>
       </div>
    <div className='address'>
        <h3>Address</h3>
        {/* <div className='address2'> */}
        <p className='addressP'>Nigeria: <br/> 6th Floor, Landmark Towers, 5B Water Corporation Road, Victoria Island, Lagos</p>
        <p className='addressP'>United States: <br/>2261 Market Street #4664 San Francisco, CA 9114</p>
        {/* </div> */}
        
    </div>
    </Footermiddle>
   

</Footerup>

<FooterDown>
    <div>Copywriting © 2023 Flick. All rights reserved • A product of QRaba Inc.</div>
    <SocialMedia>
        <SocialMediaLink>
            <FiFacebook/>
            <CiTwitter/>
            <FaLinkedin/>
            <FaInstagramSquare/>
        </SocialMediaLink>
        <div>
            <Unsubscribe><p>unsubscribe</p></Unsubscribe>
            <DeleteProfile><p>delete profile</p></DeleteProfile>
        </div>
    </SocialMedia>
   </FooterDown>
    </FooterContainer>
  )
}

export default Footer