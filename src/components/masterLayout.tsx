import React, {PropsWithChildren} from "react";
import styled from '@emotion/styled';
import HeaderLayout, { HeaderLayoutProps } from "./headerLayout";
import { MetaTag } from "./metaTag";
import FooterLayout from "./footerLayout";

const MasterLayoutStyled = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

interface MasterLayoutProps extends HeaderLayoutProps{}

export const MasterLayout = ({
  activeButton='home',
  children
}: PropsWithChildren<MasterLayoutProps>) => (
  <React.Fragment>
    <MetaTag/>
    <MasterLayoutStyled>
      <HeaderLayout activeButton={activeButton} />
      <main>
        {children}
      </main>
      <FooterLayout/>
    </MasterLayoutStyled>
  </React.Fragment>
);