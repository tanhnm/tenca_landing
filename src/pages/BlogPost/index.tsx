import React from 'react';
import { Typography, Divider, Card } from 'antd';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const { Title, Paragraph } = Typography;

const BlogPost = () => {
  const { postId } = useParams<{ postId: string }>();

  const post = {
    id: postId,
    title: "Tenca's Vision for the Future",
    content: "An in-depth look into Tenca's mission and its roadmap in the tech industry.",
  };

  return (
    <CenteredContainer>
      <StyledCard>
        <Title>{post.title}</Title>
        <Divider />
        <Paragraph>{post.content}</Paragraph>
      </StyledCard>
    </CenteredContainer>
  );
};

export default BlogPost;

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f7f7f7; /* Optional background color */
  padding-bottom: 2rem;
`;

const StyledCard = styled(Card)`
  padding: 40px;
  margin-top: 20px;
  background-color: #ffffff;
  width: 80%; /* You can adjust this width to your preference */
  max-width: 800px; /* You can set a maximum width to make it responsive */
`;
