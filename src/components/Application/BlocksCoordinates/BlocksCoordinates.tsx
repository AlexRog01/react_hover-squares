import './BlocksCoordinates.css';

import { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { BlockCoordinates } from '../../../types/BlockCoordinates';
import { BlockCoordinate } from './BlockCoordinates/BlockCoordinates';

type Props = {
  coloredBlockCoordinatesArr: BlockCoordinates[];
};

export const BlocksCoordinates: FC<Props> = ({ coloredBlockCoordinatesArr }) => {
  return (
    <div className="blocksCoordinates">
      {coloredBlockCoordinatesArr.map((coloredBlockCoordinates) => (
        <BlockCoordinate key={uuidv4()} blockCoordinates={coloredBlockCoordinates} />
      ))}
    </div>
  );
};
