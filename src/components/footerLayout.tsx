/* eslint-disable react/display-name */
import React from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faGoogle } from "@fortawesome/free-brands-svg-icons";
import NextLink from 'next/link';

const FooterLayoutStyled = styled.footer`
  margin-top: auto;
  padding: 25px 0;
  background-color: #112816;
  color: #FBFDFC;
  .footer{
    display: flex;
    justify-content: space-between;
    align-items: center;
    &_content{
      ul{
        display: flex;
        list-style-type: none;
        padding: 0;
        li{
          margin-right: 40px;
          &:last-child{
            margin-right: 0;
          }
        }
      }
      hr{
        border-top: 1px solid #FBFDFC;
        opacity: 1.5;
        margin: 12px 0;
      }
    }
    &_logo{
      background-color: #112816;
    }
    &_contact{
      display: flex;
      .icon{
        background-color: #e2b86925;
        width: 40px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 30px;
        border-radius: 50%;
        border: 2px solid #FFFFFF25;
        &:last-child{
          margin-right: 0;
        }
      }
    }
  }
`;

export const FooterLayout = () => (
  <FooterLayoutStyled>
    <div className='container'>
      <div className='row'>
        <div className='offset-1 col-10'>
          <div className='footer'>
            <div className='footer_logo'>
              <Image className='navbar_logo' src="/Images/lgfooter.png" alt="" width={100} height={100} />
            </div>
            <div className='footer_content'>
              <ul>
                <li>
                  <NextLink href="/">Home</NextLink>
                </li>
                <li>
                  <NextLink href="/products">Products</NextLink>
                </li>
                <li>
                  <NextLink href="/history">History</NextLink>
                </li>
                <li>
                  <NextLink href="/contact">Contact</NextLink>
                </li>
              </ul>
              <hr />
              <div className='text-center'> - Build by NP. All rights reserved. - </div>
            </div>
            <div className='footer_contact'>
              <div className='icon'>
                <FontAwesomeIcon icon={faTwitter} />
              </div>
              <div className='icon'>
                <FontAwesomeIcon icon={faFacebookF} />
              </div>
              <div className='icon'>
                <FontAwesomeIcon icon={faGoogle} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </FooterLayoutStyled>
);

export default React.memo(FooterLayout, () => true);