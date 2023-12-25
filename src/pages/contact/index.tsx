import styled from "@emotion/styled";
import { MasterLayout } from "@/components/masterLayout";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faUser } from "@fortawesome/free-regular-svg-icons";
import Button from "@/components/button";

const ContactPageStyled = styled.div`
  padding: 0 0 40px;
  .header{
    background-color: #FFF6E3;
    padding: 40px 0;
    text-align: center;
    h1{
      color: #2A6538;
      font-size: 3.5rem;
      font-weight: 700;
      margin-bottom: 24px;
    }
    .updateInfo{
      display: flex;
      justify-content: center;
      color: #707070;
    }
  }
  .content{
    color: #183A20;
    padding: 30px 0;
    text-align: justify;
    .companyInfo{
      div{
        margin-bottom: 10px;
        font-size: 0.99rem;
      }
      .name{
        font-size: 1.75rem;
        font-weight: 600;
        margin-bottom: 0px;
        color: #193D22;
      }
      .name2{
        font-size: 1.5rem;
        font-weight: 400;
        margin-bottom: 20px;
        color: #193D22;
      }
    }
    .contactForm{
      background-color: #FFF6E3;
      border: 1px solid #cecece;
      border-radius: 20px;
      padding: 40px 60px;
      text-align: center;
      &_title{
        font-size: 1.25rem;
        font-weight: 700;
        margin-bottom: 20px;
      }
      input, textarea{
        width: 100%;
        margin-bottom: 16px;
        border: 1px solid #C8C8C8;
        border-radius: 4px;
        padding: 8px 16px;
      }
    }
  }
`;

const ContactPage = ()=>{
  return(
    <MasterLayout activeButton="contact">
      <ContactPageStyled>
        <div className="header">
          <div className="container">
            <h1>CONTACT INFO</h1>
            <div className="updateInfo">
              <div className="me-4"><FontAwesomeIcon icon={faClock}/> 01/10/2023</div>
              <div><FontAwesomeIcon icon={faUser}/> Pham Trong Nhan</div>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="container">
            <div className="row">
              <div className="col-6">
                <div className="companyInfo">
                  <div className="name">{"Que Son's Cassava Noodle"}</div>
                  <div className="name2"> - Craft Village in Quang Nam - </div> 
                  <div>{"The Cassava Noodle Craft Village in Quang Nam is not only a unique culinary symbol but also an essential part of the region's cultural and historical heritage. The blend of traditional production techniques and innovation in serving the dish has created an exciting experience for tourists and serves as a reminder of the value of conserving and developing culinary heritage."}</div>
                  <div><b>Address: </b> Hon Tau Street,Thuan An Hamlet, Dong Phu Commune, Que Son District, Quang Nam Province</div>
                  <div><b>Website: </b> https://caromi.vn</div>
                  <div><b>Googlemap: </b> https://maps.app.goo.gl/jAoP9RtvrNMzZprP7</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContactPageStyled>
    </MasterLayout>
  )
}
export default ContactPage;