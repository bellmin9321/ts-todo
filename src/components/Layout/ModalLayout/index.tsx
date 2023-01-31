import { FC } from 'react';
import { ModalLayoutProps } from '../../../types';

const ModalLayout: FC<ModalLayoutProps> = ({ children, onHandleModal }) => {
  return (
    <div className="fixed flex h-full w-full snap-center justify-center">
      {children}
      <div
        className="fixed top-0 h-screen w-screen bg-black/40"
        onClick={() => onHandleModal(false)}
      />
    </div>
  );
};

export default ModalLayout;
