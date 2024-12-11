import React from 'react';
import { Typography, Divider, Card } from 'antd';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const { Title, Paragraph } = Typography;

const BlogPost = () => {
  const { postId } = useParams<{ postId: string }>();

  const posts = [
    {
      id: 1,
      title:
        'Hành trình hạnh phúc - Khám phá bản thân của Khăn Giấy Dung Dịch Vệ Sinh vùng kín TENCA',
      content: (
        <>
          <Title level={2}>Khăn Giấy Dung Dịch Vệ Sinh Vùng Kín TENCA Là Gì?</Title>
          <Paragraph>
            Khăn Giấy Dung Dịch Vệ Sinh Vùng Kín TENCA là sản phẩm tiện lợi và hiệu quả trong việc
            làm sạch và chăm sóc vùng kín phụ nữ. Sản phẩm này kết hợp giữa khăn giấy mềm mại và
            dung dịch vệ sinh đặc biệt giúp bảo vệ và giữ cho vùng kín luôn sạch sẽ, khô thoáng và
            không bị kích ứng.
          </Paragraph>
          <Paragraph>
            Với thành phần tự nhiên và công thức dịu nhẹ, sản phẩm giúp duy trì độ pH lý tưởng cho
            vùng kín, ngăn ngừa mồ hôi và sự phát triển của vi khuẩn có hại. Đây chính là giải pháp
            hoàn hảo giúp bạn chăm sóc cơ thể mỗi ngày, đặc biệt là trong những thời điểm cần sự
            thoải mái và tự tin.
          </Paragraph>

          <Title level={3}>Thành phần của sản phẩm</Title>
          <Paragraph>
            Khăn Giấy Dung Dịch Vệ Sinh Vùng Kín TENCA được chế tạo từ những thành phần an toàn, dịu
            nhẹ cho làn da vùng kín. Các thành phần chủ yếu bao gồm:
          </Paragraph>
          <ul>
            <li>
              Chiết xuất từ thiên nhiên: Các chiết xuất từ thảo dược giúp làm dịu và bảo vệ da khỏi
              các tác nhân gây kích ứng.
            </li>
            <li>
              Dung dịch vệ sinh nhẹ nhàng: Công thức dung dịch vệ sinh giúp làm sạch sâu mà không
              làm mất đi độ ẩm tự nhiên, giữ cho vùng kín luôn khô thoáng.
            </li>
            <li>
              Kháng khuẩn tự nhiên: Giúp ngăn ngừa sự phát triển của vi khuẩn và bảo vệ vùng kín
              khỏi các bệnh phụ khoa thông thường.
            </li>
          </ul>

          <Title level={3}>Ai Có Thể Sử Dụng Khăn Giấy Ướt TENCA?</Title>
          <Paragraph>
            Sản phẩm này dành cho phụ nữ ở mọi lứa tuổi, từ các cô gái mới lớn cho đến phụ nữ trưởng
            thành. Đặc biệt, những đối tượng sau sẽ đặc biệt hưởng lợi từ sản phẩm:
          </Paragraph>
          <ul>
            <li>
              Phụ nữ có chu kỳ kinh nguyệt: Giúp làm sạch và giảm thiểu sự khó chịu trong những ngày
              đèn đỏ.
            </li>
            <li>
              Phụ nữ mang thai: Bảo vệ vùng kín khỏi viêm nhiễm do thay đổi hormon trong thai kỳ.
            </li>
            <li>Phụ nữ sau sinh: Sản phẩm giúp làm sạch và làm dịu da sau khi sinh.</li>
            <li>
              Phụ nữ có thói quen vận động nhiều: Giúp vùng kín luôn khô thoáng và giảm mùi hôi sau
              các hoạt động thể thao.
            </li>
          </ul>

          <Title level={3}>Có Nên Sử Dụng Khăn Giấy Ướt TENCA Hằng Ngày?</Title>
          <Paragraph>
            Việc sử dụng sản phẩm này hàng ngày sẽ mang lại nhiều lợi ích lâu dài cho sức khỏe vùng
            kín:
          </Paragraph>
          <ul>
            <li>
              Bảo vệ sức khỏe vùng kín: Giúp loại bỏ bụi bẩn, vi khuẩn và các tác nhân gây hại khác.
            </li>
            <li>
              Cảm giác sạch sẽ và thoải mái: Mang lại cảm giác tươi mới sau một ngày dài làm việc
              hoặc vận động.
            </li>
            <li>
              Hỗ trợ chăm sóc sức khỏe lâu dài: Giảm thiểu nguy cơ viêm nhiễm do vệ sinh không đúng
              cách.
            </li>
          </ul>
        </>
      ),
      link: '/post/1',
      imgSrc: '/img/landing/blog-2.jpg', // Image link can be updated
    },
    {
      id: 2,
      title: 'Khăn Giấy Dung Dịch Vệ Sinh Vùng Kín Tenca - An Toàn và Hiệu Quả Cho Phái Đẹp',
      content: (
        <>
          <Title level={2}>
            Vệ Sinh Vùng Kín An Toàn và Hiệu Quả Cho Phái Đẹp Với Khăn Giấy Tenca
          </Title>
          <Paragraph>
            Vệ sinh vùng kín là một trong những vấn đề được chị em phụ nữ quan tâm hàng đầu. Để bảo
            vệ sức khỏe sinh sản, việc lựa chọn sản phẩm vệ sinh phù hợp là vô cùng quan trọng.
          </Paragraph>
          <Paragraph>
            Khăn Giấy Vệ Sinh Tenca ra đời nhằm đáp ứng nhu cầu đó. Với thành phần chiết xuất từ
            thiên nhiên như lá trầu không, lô hội, sản phẩm giúp làm sạch nhẹ nhàng, kháng khuẩn
            hiệu quả, cân bằng độ pH tự nhiên của vùng kín. Đặc biệt, Tenca không chứa hóa chất độc
            hại, an toàn cho da nhạy cảm.
          </Paragraph>

          <Title level={3}>Lợi ích Khi Sử Dụng Khăn Giấy Vệ Sinh Tenca</Title>
          <ul>
            <li>Bảo vệ sức khỏe: Ngăn ngừa viêm nhiễm, nấm ngứa.</li>
            <li>Tăng cường sự tự tin: Cảm giác sạch sẽ, thơm mát suốt cả ngày.</li>
            <li>Tiện lợi: Gói nhỏ gọn, dễ dàng mang theo bên mình.</li>
          </ul>

          <Title level={3}>Tại Sao Nên Chọn Tenca?</Title>
          <ul>
            <li>
              Thương hiệu uy tín: Tenca là thương hiệu Việt Nam, được sản xuất trên dây chuyền công
              nghệ hiện đại, đảm bảo chất lượng.
            </li>
            <li>Thành phần tự nhiên: An toàn cho da nhạy cảm.</li>
            <li>Hiệu quả cao: Đã được kiểm nghiệm lâm sàng.</li>
          </ul>

          <Title level={3}>Hướng Dẫn Sử Dụng</Title>
          <ul>
            <li>Rửa tay sạch trước khi sử dụng.</li>
            <li>Mở gói, lấy một miếng khăn và lau nhẹ nhàng vùng kín.</li>
            <li>Sử dụng hàng ngày để đạt hiệu quả tốt nhất.</li>
          </ul>

          <Paragraph>
            Việc lựa chọn sản phẩm vệ sinh vùng kín phù hợp là điều cần thiết để bảo vệ sức khỏe bản
            thân. Khăn Giấy Vệ Sinh Tenca tự hào là người bạn đồng hành tin cậy của phái đẹp. Hãy
            trải nghiệm sản phẩm của chúng tôi để cảm nhận sự khác biệt.
          </Paragraph>
        </>
      ),
      link: '/post/2',
      imgSrc: '/img/landing/blog-1.jpg', // Image link can be updated
    },
  ];

  return (
    <CenteredContainer>
      {posts.map(
        (post) =>
          post.id === Number(postId) && (
            <StyledCard>
              <img
                src={post.imgSrc}
                alt={post.title}
                style={{ width: '100%', marginBottom: '20px' }}
              />
              <Title>{post.title}</Title>
              <Divider />
              <Paragraph>{post.content}</Paragraph>
            </StyledCard>
          )
      )}
    </CenteredContainer>
  );
};

export default BlogPost;

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f7f7f7;
  padding-bottom: 2rem;
`;

const StyledCard = styled(Card)`
  padding: 40px;
  margin-top: 20px;
  background-color: #ffffff;
  width: 80%;
  max-width: 800px;
`;
