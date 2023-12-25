import styled from '@emotion/styled';
import Link from 'next/link';
import Button from './button';
import Image from 'next/image';

const ProductCardStyled = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid transparent;
  cursor: pointer;
  img{
    width: 100%;
    border-radius: 10px;
    object-fit: cover;
  }
  .productName{
    color: #122B18;
    font-size: 1.2rem;
    font-weight: 600;
    margin-top: 16px;
    margin-bottom: 4px;
  }
  .productWeight{
    color: #183A20;
    font-size: 1.125rem;
    font-weight: 300;
  }
  .productPrice{
    color: #183A20;
    font-size: 1.125rem;
    font-weight: 300;
  }
  &:hover{
    background-color: #D5E0D7;
    border: 1px solid #0C1D10;
    border-radius: 20px;
    box-shadow: 0px 6px 30px rgba(42,101,56, 0.4);
  }
`

export interface ProductCardProps {
  img: string
  name: string
  price: string
  weight: string
  itemurl: string
}

export const ProductCard = (
  props: ProductCardProps
)=>{
  return(
    <Link
      href={props.itemurl}
    >
      <ProductCardStyled>
        <Image className="productImg" src={props.img} width={270} height={270} alt=''/>
        <div className="productName">{props.name}</div>
        <div>
          <span className="productPrice">{props.price}</span>
          <span className="productWeight">&nbsp;({props.weight})</span>
        </div>
        <Button className="mt-3" size="small" onClick={(event)=>event.stopPropagation()}>Buy now</Button>
      </ProductCardStyled>
    </Link>
  )
}
export default ProductCard;