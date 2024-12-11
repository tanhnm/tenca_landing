import React from 'react';
import { Layout, Col, Row, Card, Typography, Divider } from 'antd';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "Tenca's Vision for the Future",
      content: "An overview of Tenca's journey and future plans in the tech world.",
      link: '/post/1',
    },
    {
      id: 2,
      title: 'Latest UI/UX Design Trends',
      content: 'Explore the latest trends and innovations in UI/UX design for 2024.',
      link: '/post/2',
    },
    {
      id: 3,
      title: 'How Technology is Changing the Industry',
      content:
        'A deep dive into how emerging technologies are shaping industries across the globe.',
      link: '/post/3',
    },
  ];

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Content style={{ padding: '0 50px' }}>
        <Row gutter={[16, 24]}>
          <Col span={16}>
            {posts.map((post) => (
              <Card key={post.id} style={{ marginBottom: '20px' }} hoverable>
                <Link to={`blog${post.link}`}>
                  <Title level={3}>{post.title}</Title>
                  <Paragraph>{post.content}</Paragraph>
                </Link>
              </Card>
            ))}
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default Blog;
