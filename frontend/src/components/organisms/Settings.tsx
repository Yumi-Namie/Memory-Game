import { MdClose } from 'react-icons/md';
import { ThemeSelector } from '../molecules/ThemeSelector';
import DifficultySelector from '../molecules/DifficultySelector';
import { useGame } from '../../context/GameContext';
import { useState } from 'react';
import AvatarImg from '../molecules/AvatarImg';

interface SettingsModalProps {

  onThemeChange: (newTheme: string) => void;
  selectedDifficulty: string;
  onDifficultyChange: (newDifficulty: string) => void;
  onClose: () => void;
  selectedTheme: string;
}

function SettingsModal(props: SettingsModalProps) {
  const { onClose } = props;
  const gameContext = useGame();

  console.log("Game Context:", gameContext);

  const [selectedTheme, setSelectedTheme] = useState(gameContext ? gameContext.selectedTheme : "");
  const [selectedDifficulty, setSelectedDifficulty] = useState(
    gameContext ? gameContext.selectedDifficulty : ""
  );
  const [userName, setUserName] = useState(gameContext ? gameContext.selectedUserName : "");
  const [avatarUrl, setAvatarUrl] = useState(gameContext ? gameContext.selectedAvatarUrl : "");

  const handleOkClick = () => {
    
    if (gameContext) {
      gameContext.loadCardsByTheme();
      gameContext.setSelectedTheme(selectedTheme);
      gameContext.setSelectedDifficulty(selectedDifficulty);
      gameContext.setSelectedUserName(userName);
      gameContext.setSelectedAvatarUrl(avatarUrl);
      
    }

    onClose();
  };



  const handleThemeChange = (theme: string) => {
    if (gameContext) {
      gameContext.setSelectedTheme(theme);
    }
    setSelectedTheme(theme);
  };

  const handleDifficultyChange = (difficulty: string) => {
    if (gameContext) {
      gameContext.setSelectedDifficulty(difficulty);
    }
    setSelectedDifficulty(difficulty);
  };

  const handleCloseModal = () => {
    onClose();
  };



  return (
    <div data-testid="settings" className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-[90%] md:w-[50%] h-[100%] p-4 rounded shadow-md flex flex-col gap-y-2 ">
        <div className="flex justify-end">
          <button className="top-2 right-2 text-gray-600" onClick={handleCloseModal}>
            <MdClose />
          </button>
        </div>
        <div className='flex flex-col justify-center items-center'>

        </div>
        
        <h2 className="text-lg font-semibold mb-5">Settings</h2>
        
        <div className='flex center items-center justify-center gap-x-4 mb-4'>
          <AvatarImg/>
        </div>
        
          
        <input
            type="text"
            placeholder="Your Name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="p-2 border border-gray-300 rounded-md"
          />
          <input
            type="text"
            placeholder="Avatar URL"
            value={avatarUrl}
            onChange={(e) => setAvatarUrl(e.target.value)}
            className="p-2 border border-gray-300 rounded-md "
          />

        <div className="flex flex-col gap-y-6">
          <ThemeSelector selectedTheme={selectedTheme} onThemeChange={handleThemeChange} />
          <DifficultySelector
            selectedDifficulty={selectedDifficulty.toString()}
            onDifficultyChange={handleDifficultyChange}
          />
        </div>
        <button
      onClick={handleOkClick}
      className="bg-bcBlue text-white py-2 px-4 rounded-md hover:bg-bcBlue-dark transition duration-300"
    >
          Apply
          </button>

          <p className="text-primary mt-3">
          Changing settings during an ongoing game will restart the game.
          </p>
      </div>
    </div>
  );
}

export default SettingsModal;
