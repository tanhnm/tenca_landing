import { Row, Col } from 'antd';
import { withTranslation, TFunction } from 'react-i18next';
import { SvgIcon } from '../../common/SvgIcon';
import Container from '../../common/Container';

import i18n from 'i18next';
import {
  FooterSection,
  Title,
  NavLink,
  Extra,
  LogoContainer,
  Para,
  Large,
  Chat,
  Empty,
  FooterContainer,
  Language,
  Label,
  LanguageSwitch,
  LanguageSwitchContainer,
} from './styles';

interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = ({ t }: { t: TFunction }) => {
  const handleChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a href={href} target='_blank' rel='noopener noreferrer' key={src} aria-label={src}>
        <SvgIcon src={src} width='25px' height='25px' />
      </a>
    );
  };

  return (
    <>
      <FooterSection>
        <Container>
          <Row justify='space-between'>
            <Col lg={10} md={10} sm={12} xs={12}>
              <Language>{t('Liên Hệ')}</Language>
              <Large to='/'>{t('Chia sẻ tất cả với chúng tôi')}</Large>
              <Para>{t(`Bạn có câu hỏi nào? Đừng ngần ngại liên hệ với chúng tôi.`)}</Para>
              <a href='mailto:tenca@example.com'>
                <Chat>{t(`Hãy trò chuyện`)}</Chat>
              </a>
            </Col>
            <Col lg={8} md={8} sm={12} xs={12}>
              <Title>{t('Chính Sách')}</Title>
              <Large to='/'>{t('Bảo Mật Ứng Dụng')}</Large>
              <Large to='/'>{t('Nguyên Tắc Phần Mềm')}</Large>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              <Empty />
              <Large to='/'>{t('Trung Tâm Hỗ Trợ')}</Large>
              <Large to='/'>{t('Hỗ Trợ Khách Hàng')}</Large>
            </Col>
          </Row>
          <Row justify='space-between'>
            <Col lg={10} md={10} sm={12} xs={12}>
              <Empty />
              <Language>{t('Địa Chỉ')}</Language>
              <Para>Rancho Santa Margarita</Para>
              <Para>2131 Elk Street</Para>
              <Para>California</Para>
            </Col>
            <Col lg={8} md={8} sm={12} xs={12}>
              <Title>{t('Công Ty')}</Title>
              <Large to='/'>{t('Giới Thiệu')}</Large>
              <Large to='/'>{t('Blog')}</Large>
              <Large to='/'>{t('Thông Cáo Báo Chí')}</Large>
              <Large to='/'>{t('Sự Nghiệp & Văn Hóa')}</Large>
            </Col>
          </Row>
        </Container>
      </FooterSection>
      <Extra>
        <Container border={true}>
          <Row justify='space-between' align='middle' style={{ paddingTop: '3rem' }}>
            <NavLink to='/'>
              <LogoContainer>
                <SvgIcon src='logo.svg' aria-label='homepage' width='101px' height='64px' />
              </LogoContainer>
            </NavLink>
            <FooterContainer>
              <SocialLink
                href='https://www.facebook.com/profile.php?id=61567470094988'
                src='facebook.svg'
              />
              <SocialLink
                href='https://www.facebook.com/profile.php?id=61567470094988'
                src='youtube.svg'
              />
              <SocialLink href='https://www.instagram.com/tenca_tts' src='instagram.svg' />
              <a href='https://ko-fi.com/Y8Y7H8BNJ' target='_blank' rel='noopener noreferrer'>
                <img
                  height='36'
                  style={{ border: 0, height: 36 }}
                  src='https://storage.ko-fi.com/cdn/kofi3.png?v=3'
                  alt='Buy Me a Coffee at ko-fi.com'
                />
              </a>
            </FooterContainer>
          </Row>
        </Container>
      </Extra>
    </>
  );
};

export default withTranslation()(Footer);
