interface ScoreBoardProps {
  clickCount: number;
  matchCount: number;
}

export default function ScoreBoard({ clickCount, matchCount }: ScoreBoardProps) {
  return (
    <div className="scoreboard mb-10 flex gap-x-10">
      <p>Clicks: {clickCount}</p>
      <p>Matches: {matchCount}</p>
    </div>
  );
}


