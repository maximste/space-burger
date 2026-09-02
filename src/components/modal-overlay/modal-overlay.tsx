import cls from './modal-overlay.module.css';

type TModalOverlayProps = {
  onClick: () => void;
};

const ModalOverlay = ({ onClick }: TModalOverlayProps): React.JSX.Element => {
  return <div className={cls.overlay} onClick={onClick} />;
};

export { ModalOverlay };
