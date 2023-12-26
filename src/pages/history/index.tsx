import { MasterLayout } from "@/components/masterLayout";
import styled from '@emotion/styled';
import Image from "next/image";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faUser } from "@fortawesome/free-regular-svg-icons";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination, Autoplay} from 'swiper/modules';

const HistoryPageStyled = styled.div`
  .header {
    background-color: #fff6e3;
    text-align: center;
    padding: 330px 0 50px;
    &_info {
      display: flex;
      justify-content: center;
      color: #707070;
      div:not(:last-child) {
        margin-right: 18px;
      }
    }
    &_img {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
    }
    h1 {
      color: #2A6538;
      text-shadow: 0px 4px 10px rgba(42,101,56, 0.4);
      font-weight: 700;
      margin-bottom: 24px;
    }
  }
  .content {
    padding: 30px 0;
    color: #0D1E11;
    line-height: 180%;
    text-align: justify;
    font-size: 1rem;
    img {
      width: 100vw !important;
    }
    >*{
      margin-bottom: 35px !important;
    }
  }
  .promotionsSlider{
    padding: 10px 0 0;
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
`;

const HistoryPage = () => {
  return (
    <MasterLayout activeButton="history">
      <HistoryPageStyled>
        <div className="header">
          <h1>History of the Cassava Noodle Craft Village</h1>
          <div className="header_info">
            <div><FontAwesomeIcon icon={faClock}/> 01/08/2023</div>
            <div><FontAwesomeIcon icon={faUser}/> Pham Trong Nhan</div>
          </div>
        </div>
        <div className="container">
          <div className="content">
            <p>
              {" Early Stage: The history of Cassava Noodles in Quang Nam can be traced back hundreds of years. This dish originated from the local people's need to utilize available resources from the sea and field crabs. Initially, cassava noodles and field crabs were processed simply, used as a family dish, and offered during traditional festivals."}
            </p>
            
            <p>
              {"Craft Village Development: Over time, Cassava Noodles became a popular dish in Quang Nam and the surrounding region. The craft village producing Cassava Noodles developed and passed down through generations. Noodle and crab artisans meticulously preserved production techniques, creating thin, chewy noodles, and delicious, flavorful field crabs."}
            </p>
            <p>
              {"Popularity and International Recognition: Cassava Noodles are not only famous domestically but also known to many food enthusiasts worldwide. It has become a culinary symbol of Quang Nam and Vietnam. Cassava Noodle shops and restaurants expanded their market to serve international tourists and those who appreciate traditional cuisine."}
            </p>
            <p>
              {"Conservation and Development: Currently, the Cassava Noodle Craft Village in Quang Nam is strongly conserved and developed. Local organizations and authorities promote the conservation and promotion of this dish. Various collaborative programs and the interest of tourists have helped maintain and develop traditional production techniques and raw materials."}
            </p>
            <p>
              {"The Cassava Noodle Craft Village in Quang Nam is not only a unique culinary symbol but also an essential part of the region's cultural and historical heritage. The blend of traditional production techniques and innovation in serving the dish has created an exciting experience for tourists and serves as a reminder of the value of conserving and developing culinary heritage."}
            </p>
          </div>
        </div>
      </HistoryPageStyled>
    </MasterLayout>
  )
}

export default HistoryPage;