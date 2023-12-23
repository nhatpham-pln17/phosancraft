import styled from '@emotion/styled'
import ProductCard from '@/components/productCard';
import { MasterLayout } from '@/components/masterLayout';

const ProductsPageStyled = styled.div`
  padding: 40px 0;
  .productGroup {
    margin-bottom: 40px;
    .categoryName {
      font-size: 1.75rem;
      font-weight: 700;
      margin-bottom: 40px;
      color: #0C1D10;
    }
  }
  .col-3{
    padding: 0;
  }
`;

const ProductsPage = () => {
  return (
    <MasterLayout activeButton='products'>
      <ProductsPageStyled>
        <div className='container'>
          <div className='productGroup'>
            <div className='categoryName'>Phở sắn</div>
            <div className='productList'>
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
          </div>
          <div className='productGroup'>
            <div className='categoryName'>Bánh tráng sắn</div>
            <div className='productList'>
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
          </div>
          <div className='productGroup'>
            <div className='categoryName'>Bột sắn</div>
            <div className='productList'>
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
          </div>
          <div className='productGroup'>
            <div className='categoryName'>Sản phẩm khác</div>
            <div className='productList'>
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
          </div>
        </div>
      </ProductsPageStyled>
    </MasterLayout>
  )
};

export default ProductsPage;