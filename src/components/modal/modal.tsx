import { CloseIcon } from '@krgaa/react-developer-burger-ui-components';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import { ModalOverlay } from '@components/modal-overlay/modal-overlay';

import type { ReactNode } from 'react';

import cls from './modal.module.css';

type TModalProps = {
  title?: string;
  onClose: () => void;
  children: ReactNode;
};

const modalRoot = document.getElementById('modals');

const Modal = ({
  title = '',
  onClose,
  children,
}: TModalProps): React.JSX.Element | null => {
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent): void => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);

    return (): void => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  if (!modalRoot) {
    return null;
  }

  return createPortal(
    <>
      <ModalOverlay onClick={onClose} />
      <div
        className={`${cls.modal} pt-10 pr-10 pl-10 pb-15`}
        role="dialog"
        aria-modal="true"
      >
        <div className={`${cls.header} mb-4`}>
          {title ? <h2 className="text text_type_main-large">{title}</h2> : <span />}
          <button
            type="button"
            className={cls.close}
            aria-label="Закрыть"
            onClick={onClose}
          >
            <CloseIcon type="primary" />
          </button>
        </div>
        {children}
      </div>
    </>,
    modalRoot
  );
};

export { Modal };
