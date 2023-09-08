export default function DifficultySelector(props: { selectedDifficulty: string; onDifficultyChange: any; }) {
  const { selectedDifficulty, onDifficultyChange } = props

  return (
    <div data-testid="level" className="difficulty-selector flex flex-col justify-start items-start pl-6">
      <label className="block mb-2 font-bold">Select Difficulty:</label>
      <label className="inline-flex items-center">
        <input
          type="radio"
          value="easy"
          checked={selectedDifficulty === "easy"}
          onChange={() =>onDifficultyChange("easy")}
        />
        <span className="ml-2">Easy</span>
      </label>
      <label className="inline-flex items-center">
        <input
          type="radio"
          value="medium"
          checked={selectedDifficulty === "medium"}
          onChange={() =>onDifficultyChange("medium")}
        />
        <span className="ml-2">Medium</span>
      </label>
      <label className="inline-flex items-center">
        <input
          type="radio"
          value="hard"
          checked={selectedDifficulty === "hard"}
          onChange={() =>onDifficultyChange("hard")}
        />
        <span className="ml-2">Hard</span>
      </label>
    </div>
  );
}
