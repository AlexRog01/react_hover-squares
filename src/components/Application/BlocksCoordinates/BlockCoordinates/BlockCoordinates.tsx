import './BlockCoordinates.css';

import { FC } from 'react';

import { BlockCoordinates } from '../../../../types/BlockCoordinates';

type Props = {
  blockCoordinates: BlockCoordinates;
};

export const BlockCoordinate: FC<Props> = ({ blockCoordinates }) => {
  return (
    <div className="blockCoordinate">
      row {blockCoordinates.row} col {blockCoordinates.column}
    </div>
  );
};
