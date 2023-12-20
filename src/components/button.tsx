import {cx} from '@emotion/css';
import styled from '@emotion/styled';
import React, { MouseEvent, PropsWithChildren } from 'react';
import { respondTo } from '@/utils/breakpoints';


export interface ButtonProps {
  type?: 'default' | 'outline' | 'cta'
  size?: 'large' | 'small' | 'xsmall' | ''
  className?: string
  active?: boolean
  onClick?: (evt: MouseEvent<HTMLButtonElement>) => void
}

const ButtonStyled = styled.button`
  min-width: 8rem;
  font-size: inherit;
  border-radius: 100px;
  height: 48px;
  font-weight: 700;
  border: transparent;
  padding: 0 20px;
  cursor: pointer;
  &[data-size='large']{
    height: 48px;
  }
  &[data-size='small']{
    height: 40px;
    font-size: 0.875rem;
  }
  &[data-size='xsmall']{
    height: 32px;
  }
  &[data-type='default']{
    background-color: #2A6538;
    color: white;
    ${ respondTo.sm`
        &:hover{
          background-color: #3C9050;
        }   
        &:active{
          background-color: #368148;
        }
    ` }       
  }
  &[data-type='outline']{
    background-color: white;
    color: #2A6538;
    border: 1px solid #2A6538 ;
    ${ respondTo.sm`
        &:hover{
          background-color: #52B76A;
        }   
        &:active{
          background-color: #3C9050;
        }
    ` }   
  }
  
  &[data-type='cta']{
    background-color: #2A6538;
    color: white;
    padding: 0 35px;
    height: 60px;
    box-shadow: 0px 4px 20px rgba(42,101,56, 0.4);
    ${ respondTo.sm`
        &:hover{
          background-color: #3C9050;
        }
        &:active{
          background-color: #368148;
        }
    ` }  
  }
`

export const Button = ({
  type = 'default',
  size = '',
  className = '',
  onClick,
  active = false,
  children
}: PropsWithChildren<ButtonProps>)=>{
  return(
    <ButtonStyled
    className={className}
    data-active={ active }
    data-size={ size } 
    data-type={ type }
    onClick={ onClick }
    >
      {children}
    </ButtonStyled>
  )
}

export default Button;