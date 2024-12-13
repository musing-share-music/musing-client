import styled from '@emotion/styled';
import { useState } from 'react';

import { Main, MainLayout, Modal, OuterCloseModal } from 'shared/ui/';

// 컴포넌트 렌더링 테스트를 위한 /demo 페이지
const Demo = () => {
  const [open, setOpen] = useState(false);
  const [openCloseModal, setOpenCloseModal] = useState(false);

  return (
    <MainLayout>
      <ModalButton onClick={() => setOpen(true)}>BaseModal 열기</ModalButton>
      <ModalButton onClick={() => setOpenCloseModal(true)}>OuterCloseModal 열기</ModalButton>
      <Main></Main>
      <Modal open={open} onClose={() => setOpen(false)}>
        base modal 입니다.
      </Modal>
      <OuterCloseModal open={openCloseModal} onClose={() => setOpenCloseModal(false)}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad culpa quas dignissimos mollitia velit, quae sit
        ducimus corrupti libero nobis, quam rerum ipsum reprehenderit odio animi doloremque nisi tempore quia. Lorem
        ipsum, dolor sit amet consectetur adipisicing elit. Neque eligendi dolores sapiente esse deleniti nesciunt
        consequuntur quam aliquam velit sunt, porro iure officiis explicabo dicta magnam dolor maxime? Perferendis,
        aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est perspiciatis reiciendis earum ea error
        optio vitae quod, maiores laudantium dolorum provident asperiores iure molestias, ex nulla ratione? Praesentium,
        vero corporis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto perferendis, doloremque corrupti
        illo eum veritatis ipsum voluptatum voluptate reprehenderit delectus impedit dolorem dolore consectetur maiores
        voluptates velit porro! Natus, voluptatum!
      </OuterCloseModal>
    </MainLayout>
  );
};
export default Demo;

const ModalButton = styled.button`
  background: #fff;
`;
