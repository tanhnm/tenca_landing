import React from 'react';
import { Card, Row, Col, Typography } from 'antd';
import styled from 'styled-components';

const { Title, Paragraph } = Typography;

// Sample data for team members
const teamMembers = [
  {
    id: 1,
    name: 'Phan Nhật Huy',
    role: 'CEO',
    imgSrc: '/img/team/CEO.jpg', // Replace with actual image URL
  },
  {
    id: 2,
    name: 'Nguyễn Thị Mỹ Trân',
    role: 'HR Director',
    imgSrc: '/img/team/HRDIRECTOR.jpg',
  },
  {
    id: 3,
    name: 'Mai Trọng Nguyên',
    role: 'CCO',
    imgSrc: '/img/team/CCO.png',
  },
  {
    id: 4,
    name: 'Vương Huỳnh Thiên Phước',
    role: 'CPO',
    imgSrc: '/img/team/CPO.jpg',
  },
  {
    id: 5,
    name: 'Nguyễn Lê Mỹ Duyên',
    role: 'CMO',
    imgSrc: '/img/team/CMO.jpg',
  },
  {
    id: 6,
    name: 'Đoàn Thụy Vy',
    role: 'Chief Accountant',
    imgSrc: '/img/team/CA.jpg',
  },
  {
    id: 7,
    name: 'Trần Mai Kiều Linh',
    role: 'CFO',
    imgSrc: '/img/team/CFO.jpg',
  },
];

const TeamPage = () => {
  return (
    <Container>
      <Title level={2} style={{ textAlign: 'center', marginBottom: '30px' }}>
        Meet Our Team
      </Title>
      <Row gutter={[16, 16]}>
        {teamMembers.map((member) => (
          <Col key={member.id} xs={24} sm={12} md={8} lg={6}>
            <StyledCard hoverable>
              <img
                src={member.imgSrc}
                alt={member.name}
                width={100}
                height={'300px'}
                style={{
                  width: '100%',
                  borderRadius: '8px',
                  marginBottom: '15px',
                  objectFit: 'cover',
                }}
              />
              <Title level={4}>{member.name}</Title>
              <Paragraph strong>{member.role}</Paragraph>
            </StyledCard>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default TeamPage;

// Styled components for layout
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
`;

const StyledCard = styled(Card)`
  text-align: center;
  border-radius: 8px;
  overflow: hidden;
  padding: 8px;
`;
