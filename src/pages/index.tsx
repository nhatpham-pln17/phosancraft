import Button from '@/components/button';
import { MasterLayout } from '@/components/masterLayout';
import styled from '@emotion/styled';
import { NextPage } from 'next';
import Image from 'next/image';

const HomePageStyled = styled.div`
  .homeBanner{
    background-color: #FFF6E3;
    padding: 60px 0 160px;
    h1{
      color: #2A6538;
      font-weight: 700;
      margin-bottom: 16px;
      font-size: 3rem;
    }
    p{
      color: #707070;
      font-size: 1.15rem;
      line-height: 1.5;
      text-align: justify;
      margin-bottom: 32px;
    }
  }
  .contactPhone{
    &_container{
      background-color: white;
      border-radius: 30px;
      position: absolute;
      transform: translateY(-50%);
      left: 0;
      right: 0;
      top: 0;
      padding: 40px 80px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
    }
    &_content{
      h2{
        color: #2A6538;
        font-weight: 700;
        font-size: 1.75rem;
      }
      p{
        color: #707070;
        font-size: 1.25rem;
      }
    }
    &_phoneBtn{
      background: #2A6538;
      border-radius: 20px;
      padding: 18px;
      display: flex;
      color: white;
      font-size: 1.25rem;
    }
  }
  .promotionsSlider{
    padding: 175px 0 0;
    .swiper-slide{
      margin-bottom: 40px;
      img {
        display: block;
        object-fit: cover;
        border-radius: 20px;
      }
    }
    .swiper-pagination{
      bottom: 0;
      .swiper-pagination-bullet{
        width: 16px;
        height: 16px;
        margin: 0 8px;
        background-color: #a5a5a5;
        &-active{
          background-color: #2A6538;
        }
      }
    }
  }
  .featuredProducts{
    padding: 70px 0 80px;
    &_heading{
      display: flex;
      justify-content: space-between;
      margin-bottom: 25px;
      align-items: baseline;
      .heading_title{
        font-weight: 700;
        font-size: 1.75rem;
      }
      .heading_seeAll{
        color: #707070;
        text-decoration: underline;
      }
    }
    .col-3{
      padding: 0;
    }
  }
  .articles{
    padding: 40px 0;
    background-color: #FFF6E3;
    &_heading{
      display: flex;
      justify-content: space-between;
      margin-bottom: 25px;
      align-items: baseline;
      .heading_title{
        font-weight: 700;
        font-size: 1.75rem;
      }
      .heading_seeAll{
        color: #707070;
        text-decoration: underline;
      }
    }
    .col-4{
      padding: 0;
    }
  }
  .contactPhoneForm{
    background-color: #2A6538;
    color: white;
    padding: 114px 0;
    form{
      h3{
        font-weight: 700;
        margin-bottom: 24px;
      }
      p{
        line-height: 1.8em;
        margin-bottom: 32px;
      }
      .formSubmit{
        display: flex;
        input{
          width: 100%;
          background: linear-gradient(109.46deg, rgba(201, 201, 201, 0.8) 1.57%, rgba(196, 196, 196, 0.1) 100%);
          opacity: 0.6;
          border-radius: 30px;
          border: none;
          padding: 10px 20px;
          color: white;
          ::placeholder {
            color: white;
            font-style: italic;
          }
        }
      }
    }
  }
`;

const Home: NextPage = () => {
  return(
    <MasterLayout>
      <HomePageStyled>
        <div className='homeBanner'>
          <div className='container'>
            <div className='row'>
              <div className='col-7'>
                <div className='homeBanner_content'>
                  <h1>QueSon's Cassava Noodle</h1>
                  <p>The Cassava Noodle Craft Village in Quang Nam is not only a unique culinary symbol but also an essential part of the region's cultural and historical heritage. The blend of traditional production techniques and innovation in serving the dish has created an exciting experience for tourists and serves as a reminder of the value of conserving and developing culinary heritage.</p>
                  <Button type='cta'>Contact us</Button>
                </div>
              </div>
              <div className='col-3'>
                <div className='homeBanner_coverImg'>
                  <Image src="/Images/homebanner.jpg" alt="" width={450} height={300} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </HomePageStyled>
    </MasterLayout>
  );
};

export default Home;