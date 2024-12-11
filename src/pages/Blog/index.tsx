import React from 'react';
import { Layout, Col, Row, Card, Typography } from 'antd';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const posts = [
  {
    id: 1,
    title: 'Khăn Giấy Dung Dịch Vệ Sinh Vùng Kín TENCA',
    content:
      'Khăn giấy dung dịch vệ sinh vùng kín TENCA là giải pháp tiện lợi và hiệu quả giúp bảo vệ và chăm sóc vùng kín của phụ nữ. Sản phẩm kết hợp giữa khăn giấy mềm mại và dung dịch vệ sinh đặc biệt giúp duy trì độ pH lý tưởng và ngăn ngừa vi khuẩn.',
    link: '/post/1',
    imgSrc: '/img/landing/blog-2.jpg', // Hình ảnh có thể thay thế sau
  },
  {
    id: 2,
    title: 'Thành phần tự nhiên của Khăn Giấy TENCA',
    content:
      'Khăn Giấy Dung Dịch Vệ Sinh Vùng Kín TENCA chứa các thành phần tự nhiên giúp làm dịu và bảo vệ da, không gây kích ứng. Sản phẩm không chứa hóa chất độc hại, an toàn cho mọi phụ nữ, kể cả phụ nữ mang thai và sau sinh.',
    link: '/post/2',
    imgSrc: '/img/landing/blog-1.jpg', // Hình ảnh có thể thay thế sau
  },
];

const Blog = () => {
  return (
    <Layout style={{ minHeight: '100vh', backgroundColor: '#f0f2f5' }}>
      <Content>
        <StyledRow gutter={[24, 32]}>
          {posts.map((post) => (
            <Col key={post.id} xs={24} sm={12} lg={8}>
              <StyledCard hoverable>
                <Link to={`/blog${post.link}`}>
                  <StyledImg src={post.imgSrc} alt={post.title} />
                  <Title level={4}>{post.title}</Title>
                  <Paragraph ellipsis={{ rows: 2 }}>{post.content}</Paragraph>
                </Link>
              </StyledCard>
            </Col>
          ))}
        </StyledRow>
      </Content>
    </Layout>
  );
};

export default Blog;

// Styled Components
const StyledRow = styled(Row)`
  margin-top: 20px;
`;

const StyledCard = styled(Card)`
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
`;

const StyledImg = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-bottom: 1px solid #f0f0f0;
  margin-bottom: 16px;
`;
