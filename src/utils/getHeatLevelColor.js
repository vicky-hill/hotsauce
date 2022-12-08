export const getHeatLevelColor = (heatlevel, code) => {
    const colorName = heatlevel === 'mild' ? 'green' : heatlevel === 'medium' ? 'orange' : heatlevel === 'hot' ? 'red' : 'crimson';
    const colorCode = heatlevel === 'mild' ? '#008643' : heatlevel === 'medium' ? '#f15d29' : heatlevel === 'hot' ? '#ee1e27' : '#791018';

    return code ? colorCode : colorName;
}
