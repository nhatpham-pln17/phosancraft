import React from "react";
import styled from '@emotion/styled';
import Image from "next/image";
import {cx} from '@emotion/css';
import Link from "next/link";

const HeaderLayoutStyled = styled.header`
  background-color: #FFF6E3;
  .navbar{
    padding: 10px 10px;
    &_logo{
      height: auto;
      cursor: pointer;
    }
    &_links{
      display: flex;
      .navbarLink{
        padding: 10px 20px;
        border-radius: 50px;
        font-size: 1rem;
        letter-spacing: 0.05em;
        margin-left: 15px;
        &.-active{
          background-color: #2A6538;
          box-shadow: 0px 4px 20px rgba(42,101,56, 0.4);
          font-weight: 700;
          a{
            color: white;
          }
        }
      }
    }
  }
`;

export interface HeaderLayoutProps {
  activeButton?: 'home' | 'products' | 'history' | 'contact'
}

export const HeaderLayout = ({
  activeButton = 'home'
} : HeaderLayoutProps) => (
  <HeaderLayoutStyled>
    <div className='container'>
      <div className='navbar'>
        <Link legacyBehavior href="/">
          <a>
            <Image className='navbar_logo' src="/Images/logofull.png" alt="" width={300} height={80}/>
          </a>
        </Link>
        <div className='navbar_links'>
          <div className={cx('navbarLink', {
            '-active': activeButton == 'home'
          })}>
            <Link href="/">Home</Link>
          </div>
          <div className={cx('navbarLink', {
            '-active': activeButton == 'products'
          })}>
            <Link href="/products">Products</Link>
          </div>
          <div className={cx('navbarLink', {
            '-active': activeButton == 'history'
          })}>
            <Link href="/">History</Link>
          </div>
          <div className={cx('navbarLink', {
            '-active': activeButton == 'contact'
          })}>
            <Link href="/">Contact</Link>
          </div>
        </div>
      </div>
    </div>
  </HeaderLayoutStyled>
);

export default HeaderLayout;