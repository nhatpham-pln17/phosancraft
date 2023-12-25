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
                  name = "Phở sắn nguyên chất"
                  price = "35.000 đ"
                  weight="400gr"
                  itemurl="https://caromi.vn/product/pho-san-nguyen-chat-tui-400-g/"
                  />
                </div>
                <div className='col-3'>
                  <ProductCard 
                  img = "/Images/product/phosanhopgiay-250-28.png"
                  name = "Phở sắn hộp giấy"
                  price = "28.000 đ"
                  weight="250gr"
                  itemurl="https://caromi.vn/product/pho-san-nguyen-chat-tui-400-g/"
                  />
                </div>
                <div className='col-3'>
                  <ProductCard 
                  img = "/Images/product/phosancarot-250-30.png"
                  name = "Phở sắn cà rốt"
                  price = "30.000 đ"
                  weight="250gr"
                  itemurl="https://caromi.vn/product/pho-san-ca-rot-goi-250g/"
                  />
                </div>
                <div className='col-3'>
                  <ProductCard 
                  img = "/Images/product/phosancuden-250-30.png"
                  name = "Phở sắn củ dền"
                  price = "30.000 đ"
                  weight="250gr"
                  itemurl="https://caromi.vn/product/pho-san-cu-den-caromi/"
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
                  img = "/Images/product/banhtrangsan-150-15.png"
                  name = "Bánh tráng sắn"
                  price = "15.000 đ"
                  weight="150gr"
                  itemurl="https://caromi.vn/product/banh-trang-san-bot-loc-2/"
                  />
                </div>
                <div className='col-3'>
                  <ProductCard 
                  img = "/Images/product/banhtrangsan-200-25.png"
                  name = "Bánh tráng sắn"
                  price = "25.000 đ"
                  weight="200gr"
                  itemurl="https://caromi.vn/product/banh-trang-san-bot-loc-200g/"
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
                  img = "/Images/product/botsannguyenchat-1kg-50.png"
                  name = "Bột sắn nguyên chất"
                  price = "50.000 đ"
                  weight="1kg"
                  itemurl="https://caromi.vn/product/bot-san-bot-nang-5kg/"
                  />
                </div>
                <div className='col-3'>
                  <ProductCard 
                  img = "/Images/product/tinhbotsan-500-35.png"
                  name = "Bột năng"
                  price = "25.000 đ"
                  weight="500gr"
                  itemurl="https://caromi.vn/product/bot-nang-caromi-virgin-500g/"
                  />
                </div>
                <div className='col-3'>
                  <ProductCard 
                  img = "/Images/product/tinhbotsan-1-50.png"
                  name = "Bột năng"
                  price = "50.000 đ"
                  weight="1kg"
                  itemurl="https://caromi.vn/product/bot-nang-virgin-1kg/"
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
                  img = "/Images/product/mamcacom-550-45.jpeg"
                  name = "Mắm cái cá cơm"
                  price = "45.000 đ"
                  weight="550gr"
                  itemurl="https://caromi.vn/product/mam-cai-ca-com-hu-550g/"
                  />
                </div>
                <div className='col-3'>
                  <ProductCard 
                  img = "/Images/product/mamruochu-220-38.jpeg"
                  name = "Mắm ruốc hũ"
                  price = "38.000 đ"
                  weight="220gr"
                  itemurl="https://caromi.vn/product/mam-ruoc-ngon-hu-220ml/"
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