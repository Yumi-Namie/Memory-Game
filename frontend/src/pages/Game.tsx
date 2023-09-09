import { useState } from 'react';
import { FaCog } from 'react-icons/fa';
import SettingsModal from '../components/organisms/Settings';
import GameBoard from '../components/templates/GameBoard';
import { useGame } from '../context/GameContext';
import AvatarImg from '../components/molecules/AvatarImg';

export default function Game() {

  const [isSettingsOpen, setIsSettingsOpen] = useState(true);
  const [selectedDifficulty, setSelectedDifficulty] = useState("easy");

  const handleToggleSettings = () => {
    setIsSettingsOpen((prevIsOpen) => !prevIsOpen);
  };

  const handleCloseSettings = () => {
    setIsSettingsOpen(false);
  };

  const gameContext = useGame();
  if (!gameContext) {
    return null; 
  }
  const { selectedTheme } = gameContext;
  

  const handleThemeChange = (newTheme: string) => {
    gameContext.changeTheme(newTheme); 
  };
  

  const handleDifficultyChange = (newDifficulty: string) => {
    setSelectedDifficulty(newDifficulty);
  };



  const themeBackgrounds: { [key: string]: string } = {
    heroes: "url(https://res.cloudinary.com/dcwt8jbja/image/upload/v1692783278/MemoryGame/heroes/background_gu1jua.jpg)",
    food: "url(https://res.cloudinary.com/dcwt8jbja/image/upload/v1693158449/MemoryGame/Group_2_iu4ylw.png)"
  };
  

  return (
    
    <div className="container ">
      <section className="section w-[100%]  overflow-auto bg-cover bg-center flex justify-center items-start py-10" style={{ backgroundImage: themeBackgrounds[selectedTheme]}}>
        <div data-testid="game-page" className="flex items-center justify-center flex-col py-10 px-2">
          <div className="bg-white/95 backdrop-blur-sm w-[100%] h-full py-10 px-4 flex flex-col items-center justify-center rounded-lg">

            <div className="w-[100%] flex flex-row justify-between items-center mb-2">

              <div className="user-info flex flex-col md:flex-row items-center gap-x-4">
                <AvatarImg/>
                <p>{gameContext.selectedUserName}</p>
              </div>
              <button className="settings-button flex" onClick={handleToggleSettings}>
                <FaCog className="mr-2" />Settings
              </button>
          
            </div>

            <h1 className="lg:text-[50px] md:text-[40px] text-[28px] text-bcBlue">Memory Game</h1>
            <GameBoard />
          </div>
        </div>
      </section>
      {isSettingsOpen && (
        <SettingsModal
          selectedTheme={selectedTheme}
          onThemeChange={handleThemeChange}
          selectedDifficulty={selectedDifficulty}
          onDifficultyChange={handleDifficultyChange}
          onClose={handleCloseSettings}

        />
      )}
    </div>
  );
}
