export function ThemeSelector(props: { selectedTheme: string; onThemeChange: any; }) {
  
  const { selectedTheme, onThemeChange } = props;

  const handleThemeChange = (theme: string) => {
    try {
      onThemeChange(theme);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div data-testid="theme" className="theme-selector flex flex-col justify-start items-start pl-6">
      <label className="block mb-2 font-bold">Select Theme:</label>
      <div className="flex justify-start gap-x-6">
        <label className="inline-flex items-center">
          <input
            type="radio"
            value="heroes"
            checked={selectedTheme === "heroes"}
            onChange={() => handleThemeChange("heroes")}
          />
          <span className="ml-2">Heroes</span>
        </label>
        <label className="inline-flex items-center">
          <input
            type="radio"
            value="food"
            checked={selectedTheme === "food"}
            onChange={() => handleThemeChange("food")}
          />
          <span className="ml-2">Food</span>
        </label>
      </div>
    </div>
  );
}
