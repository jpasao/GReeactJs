import { useEffect, useRef } from 'react'
import { BUTTON_TYPES } from '../resources/button-types';
import Button from './button.component';

const DialogModal = ({ openModal, closeModal, children }) => {
  const ref = useRef();

  useEffect(() => {
    if (openModal) {
      ref.current?.showModal()
    } else {
      ref.current?.close();
    }
  }, [openModal])

  const closeProps = {
    type: `${BUTTON_TYPES.back}`,
    content: 'Close',
    clickHandle: closeModal
  }

  return (
    <dialog className="modalHelp"
      ref={ref}
      onCancel={closeModal}
    >
      {children}
      <Button buttonProps={closeProps} />
    </dialog>
  )
}

export default DialogModal