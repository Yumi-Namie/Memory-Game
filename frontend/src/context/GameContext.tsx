import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from '../service/axiosgame';
import { Card } from '../types/Card';


interface GameContextType {
  setSelectedTheme: (theme: string) => void;
  setSelectedDifficulty: (difficulty: string) => void;
  selectedTheme: string;
  selectedDifficulty: string;
  loadCardsByTheme: () => Promise<void>;
  changeTheme: (theme: string) => void;
  setSelectedUserName: (userName: string) => void;
  setSelectedAvatarUrl: (avatarUrl: string) => void; 
  selectedUserName: string; 
  selectedAvatarUrl: string; 
}


export const GameContext = createContext<GameContextType | null>(null);

export const GameProvider = ({ children }: { children: ReactNode }) => {

  const [selectedThemeCards, setSelectedThemeCards] = useState<Card[]>([]);
  const [selectedTheme, setSelectedTheme] = useState('heroes');
  const [selectedDifficulty, setSelectedDifficulty] = useState('easy');
  const [selectedUserName, setSelectedUserName] = useState('');
  const [selectedAvatarUrl, setSelectedAvatarUrl] = useState('');
  const loadCardsByTheme = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/card/theme/${selectedTheme}`);

      console.log("Selected Theme:", selectedTheme);

      console.log(selectedThemeCards)
      console.log(setSelectedThemeCards)
      console.log("Fetched Cards:", response.data);

      setSelectedThemeCards(response.data);
      
    } catch (error) {
      console.error('Error fetching cards by theme', error);
    }
  };

  const changeTheme = (theme: string) => {
    setSelectedTheme(theme);
  };

  const handleSelectedThemeChange = (theme: string) => {
    const userNameToPreserve = selectedUserName;
    const userAvatarToPreserve = selectedAvatarUrl;
    setSelectedTheme(theme);
    setSelectedUserName(userNameToPreserve);
    setSelectedAvatarUrl(userAvatarToPreserve);
    loadCardsByTheme();
  };


  const handleSelectedDifficultyChange = (difficulty: string) => {
    setSelectedDifficulty(difficulty);
    loadCardsByTheme();
  };

  const setUserName = (newUserName: string) => {
    setSelectedUserName(newUserName);
  };

  const setAvatarUrl = (newAvatarUrl: string) => {
    setSelectedAvatarUrl(newAvatarUrl);
  };

  useEffect(() => {
    
    console.log("Updated Theme Cards:", selectedThemeCards);
  }, [selectedThemeCards]);

  return (
    <GameContext.Provider
  value={{
    selectedTheme,
    setSelectedTheme: handleSelectedThemeChange,
    selectedDifficulty,
    setSelectedDifficulty: handleSelectedDifficultyChange,
    loadCardsByTheme,
    changeTheme,
    selectedUserName,
    setSelectedUserName: setUserName,
    selectedAvatarUrl,
    setSelectedAvatarUrl:setAvatarUrl,
  }}
>
  {children}
</GameContext.Provider>

  );
};

export const useGame = () => {
  return useContext(GameContext);
};
