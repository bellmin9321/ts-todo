import { FC } from 'react';
import { ModalProps } from '../../types';
import ModalLayout from '../Layout/ModalLayout';

const Modal: FC<ModalProps> = ({ handleModal, component }) => (
  <ModalLayout onHandleModal={handleModal}>{component}</ModalLayout>
);

export default Modal;
