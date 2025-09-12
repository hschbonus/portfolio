import Modal from "react-modal";

Modal.setAppElement("#root");

export default function MyModal({ isOpen, onClose, title, children }) {
  return (
    <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        contentLabel={title}
        className="relative z-[10000] bg-white p-6 rounded-xl border-2 shadow-lg w-[90vw] max-w-[1200px] h-[90vh] md:h-[70vh] mx-auto transition-all duration-300 ease-out transform"
        overlayClassName="fixed inset-0 z-[9999] bg-black/50 flex items-center justify-center transition-opacity duration-300 ease-out"
        closeTimeoutMS={300}
    >

      <div>{children}</div>
      <button
        className="absolute top-2 right-2 text-grey-500 rounded-sm w-[25px] h-[25px] hover:text-black transition-colors duration-200"
        onClick={onClose}
      >
        ✕
      </button>
      
      <style jsx>{`
        .ReactModal__Overlay {
          opacity: 0;
          transition: opacity 300ms ease-out;
        }
        
        .ReactModal__Overlay--after-open {
          opacity: 1;
        }
        
        .ReactModal__Overlay--before-close {
          opacity: 0;
        }
        
        .ReactModal__Content {
          transform: scale(0.8) translateY(-20px);
          opacity: 0;
          transition: all 300ms ease-out;
        }
        
        .ReactModal__Content--after-open {
          transform: scale(1) translateY(0);
          opacity: 1;
        }
        
        .ReactModal__Content--before-close {
          transform: scale(0.8) translateY(-20px);
          opacity: 0;
        }
      `}</style>
    </Modal>
  );
}