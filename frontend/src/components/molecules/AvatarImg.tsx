import { useGame } from "../../context/GameContext"



export default function AvatarImg() {
  const gameContext = useGame()
  if (!gameContext) {
    return null; 
  }
  return (
    <img
      src={gameContext.selectedAvatarUrl || "https://res.cloudinary.com/dcwt8jbja/image/upload/v1693159094/MemoryGame/strength_1_tzekgv.png"}
      alt="User Avatar"
      className="avatar h-12 w-12"
    />
  )
}
