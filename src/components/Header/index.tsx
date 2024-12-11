import { useState } from 'react';
import { Row, Col, Drawer } from 'antd';
import { withTranslation, TFunction } from 'react-i18next';
import Container from '../../common/Container';
import { SvgIcon } from '../../common/SvgIcon';
import { Button } from '../../common/Button';
import { useHistory } from 'react-router-dom';

import {
  HeaderSection,
  LogoContainer,
  Burger,
  NotHidden,
  Menu,
  CustomNavLinkSmall,
  Label,
  Outline,
  Span,
} from './styles';

const Header = ({ t }: { t: TFunction }) => {
  const [visible, setVisibility] = useState(false);
  const history = useHistory();

  const toggleButton = () => {
    setVisibility(!visible);
  };

  const MenuItem = () => {
    const scrollTo = async (id: string) => {
      await history.push('/');
      const element = document.getElementById(id) as HTMLDivElement;
      element.scrollIntoView({
        behavior: 'smooth',
      });
      setVisibility(false);
    };

    return (
      <>
        <CustomNavLinkSmall onClick={() => scrollTo('about')}>
          <Span>{t('Về Chúng Tôi')}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={() => scrollTo('mission')}>
          <Span>{t('Sứ Mệnh')}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={() => history.push('/blog')}>
          <Span>{t('Blog')}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={() => scrollTo('product')}>
          <Span>{t('Sản Phẩm')}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall style={{ width: '180px' }} onClick={() => scrollTo('contact')}>
          <Span>
            <Button>{t('Liên Hệ')}</Button>
          </Span>
        </CustomNavLinkSmall>
      </>
    );
  };

  return (
    <HeaderSection>
      <Container>
        <Row justify='space-between'>
          <LogoContainer to='/' aria-label='homepage'>
            <img src='/img/icons/logo.png' width='150px' alt='logo' />
          </LogoContainer>
          <NotHidden>
            <MenuItem />
          </NotHidden>
          <Burger onClick={toggleButton}>
            <Outline />
          </Burger>
        </Row>
        <Drawer closable={false} open={visible} onClose={toggleButton}>
          <Col style={{ marginBottom: '2.5rem' }}>
            <Label onClick={toggleButton}>
              <Col span={12}>
                <Menu>Menu</Menu>
              </Col>
              <Col span={12}>
                <Outline />
              </Col>
            </Label>
          </Col>
          <MenuItem />
        </Drawer>
      </Container>
    </HeaderSection>
  );
};

export default withTranslation()(Header);
