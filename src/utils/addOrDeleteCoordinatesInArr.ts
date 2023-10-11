import { BlockCoordinates } from '../types/BlockCoordinates';

export const addOrDeleteCoordinatesInArr = (
  coloredBlockCoordinatesArr: BlockCoordinates[],
  newColoredBlockCoordinates: BlockCoordinates,
) => {
  const newColoredBlockCoordinatesArr = coloredBlockCoordinatesArr.slice();

  const foundElementIndex = newColoredBlockCoordinatesArr.findIndex(
    (coordinates) =>
      coordinates.column === newColoredBlockCoordinates.column &&
      coordinates.row === newColoredBlockCoordinates.row,
  );

  if (foundElementIndex === -1) {
    return [...newColoredBlockCoordinatesArr, newColoredBlockCoordinates];
  } else {
    newColoredBlockCoordinatesArr.splice(foundElementIndex, 1);
    return newColoredBlockCoordinatesArr;
  }
};
