import './FieldBlock.css';

import classNames from 'classnames';
import { FC, useState } from 'react';

import { BlockCoordinates } from '../../../../types/BlockCoordinates';

type Props = {
  row: number;
  column: number;
  setNewColoredBlockCoordinates: (coordinates: BlockCoordinates) => void;
};

export const FieldBlock: FC<Props> = ({ row, column, setNewColoredBlockCoordinates }) => {
  const [isBackgroundBlue, setIsBackgroundBlue] = useState(false);

  const onMouseEnterHendler = () => {
    setIsBackgroundBlue(!isBackgroundBlue);
    setNewColoredBlockCoordinates({ row, column });
  };

  return (
    <div
      onMouseEnter={onMouseEnterHendler}
      className={classNames('fieldBlock', { blueBackground: isBackgroundBlue })}
    ></div>
  );
};
