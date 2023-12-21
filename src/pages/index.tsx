import Button from '@/components/button';
import { MasterLayout } from '@/components/masterLayout';
import styled from '@emotion/styled';
import { NextPage } from 'next';
import Image from 'next/image';
import "swiper/css";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination, Autoplay} from 'swiper/modules';
import ProductCard from '@/components/productCard';


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
      padding: 30px 40px;
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
        font-size: 1.1rem;
      }
    }
    &_phoneBtn{
      background: #2A6538;
      border-radius: 20px;
      padding: 18px;
      display: flex;
      color: white;
      font-size: 1.2rem;
    }
  }
  .promotionsSlider{
    padding: 175px 0 0;
    align-content: center;
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
        color: #0C1D10;
      }
      .heading_seeAll{
        color: #0C1D10;
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
        <section className='homeBanner'>
          <div className='container'>
            <div className='row'>
              <div className='col-7'>
                <div className='homeBanner_content'>
                  <h1>{"QueSon's Cassava Noodle"}</h1>
                  <p>{"The Cassava Noodle Craft Village in Quang Nam is not only a unique culinary symbol but also an essential part of the region's cultural and historical heritage. The blend of traditional production techniques and innovation in serving the dish has created an exciting experience for tourists and serves as a reminder of the value of conserving and developing culinary heritage."}</p>
                  <Button type='cta'>Contact us</Button>
                </div>
              </div>
              <div className='col-3'>
                <div className='homeBanner_coverImg'>
                  <Image src="/Images/homeBanner.jpeg" alt="" width={450} height={300} />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='contactPhone'>
          <div className='container position-relative'>
            <div className='contactPhone_container'>
              <div className='contactPhone_content'>
                <h2>{"Cassava Noodle - Craft Village in Quang Nam"}</h2>
                <p>{"Hon Tau Street,Thuan An Hamlet, Dong Phu Commune, Que Son District, Quang Nam Province"}</p>
              </div>
              <div className='contactPhone_phoneBtn'>
                <a href="tell: +84988846044">
                  <div className='d-flex align-items-center'>
                  <Image src="/Images/call.png" width={80} height={80} alt='' />
                    <div className='mx-4'>
                      <div className='fw-bold'>Liên hệ ngay</div>
                      <div>{"0988.846.044"}</div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className='promotionsSlider'>
          <div className='container'>
            <Swiper
            pagination={true}
            loop={true}
            autoplay={true}
            modules={[Pagination, Autoplay]}
            >
              <SwiperSlide>
                <Image src="/images/allProducts.jpeg" width={1115} height={470} alt='' />
              </SwiperSlide>
              <SwiperSlide>
                <Image src="/images/cassavasunny.png" width={1115} height={470} alt='' />
              </SwiperSlide>
              <SwiperSlide>
                <Image src="/images/rawmetiral.jpeg" width={1115} height={470} alt='' />
              </SwiperSlide>
            </Swiper>
          </div>
        </section>
        <section className='featuredProducts'>
          <div className='container'>
            <div className='featuredProducts_heading'>
              <div className='heading_title'> Featured Products</div>
              <div className='heading_seeAll'>See all</div>
            </div>
            <div className='row'>
              <div className='col-3'>
                <ProductCard 
                img = "/Images/product/phosannguyenchat-400-35.png"
                name = "Phở sắn"
                price = "35.000 đ"
                weight="400gr"
                itemurl="phosannguyenchat_400"
                />
              </div>
              <div className='col-3'>
                <ProductCard 
                img = "/Images/product/banhtrangsan-150-15.png"
                name = "Bánh tráng sắn"
                price = "15.000 đ"
                weight="150gr"
                itemurl="banhtrangsan_150"
                />
              </div>
              <div className='col-3'>
                <ProductCard 
                img = "/Images/product/botsannguyenchat-1kg-50.png"
                name = "Bột sắn nguyên chất"
                price = "50.000 đ"
                weight="1kg"
                itemurl="botsannguyenchat_1"
                />
              </div>
              <div className='col-3'>
                <ProductCard 
                img = "/Images/product/phosancuden-250-30.png"
                name = "Phở sắn củ dền"
                price = "30.000 đ"
                weight="250gr"
                itemurl="phosancuden_250"
                />
              </div>
            </div>
          </div>
        </section>
      </HomePageStyled>
    </MasterLayout>
  );
};

export default Home;