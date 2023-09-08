
import { MdClose } from 'react-icons/md';



interface ModalProps {
  isOpen: boolean;
  clickCount: number;
  matchCount: number;
  onRestart: () => void;
  onClose: () => void;
}



export const ResultModal: React.FC<ModalProps> = ({isOpen, clickCount, matchCount, onClose, onRestart }) => {

  console.log('isOpen:', isOpen);

  const handleCloseModal = () => {
    onClose();
  };

  const handleRestartClick = () => {
    onRestart();
    onClose(); 
  };
  
  const brainImgUrl = "https://res.cloudinary.com/dcwt8jbja/image/upload/v1693074310/MemoryGame/Group_1_1_cklrok.png"
  const modalClasses = `fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50`;

  return (
    isOpen && (
      <div className={modalClasses}>
        <div className="bg-white w-[80%] h-[95%] p-4 rounded shadow-md">
          <div className="flex justify-end">
            <button className="top-2 right-2 text-gray-600" onClick={handleCloseModal}>
              <MdClose />
            </button>
          </div>
          <div className="flex flex-col items-center justify-center h-full"> 
            <h2 className='text-4xl mb-4'>Congrats!</h2>
            <img className='w-[60%] m-8' src={brainImgUrl} alt="Brain"/>
            <p>Clicks: {clickCount}</p>
            <p>Matches: {matchCount}</p>
            <button
              onClick={handleRestartClick}
              className="bg-bcBlue text-white py-2 px-4 rounded-md hover:bg-bcBlue-dark transition duration-300 mt-10"
            >Restart
            </button>
          </div>
        </div>
      </div>
    )
    );
  };

export default ResultModal;

