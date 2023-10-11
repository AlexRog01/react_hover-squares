import './Field.css';

import { FC, memo } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { BlockCoordinates } from '../../../types/BlockCoordinates';
import { FieldBlock } from './FieldBlock/FieldBlock';

type Props = {
  fieldCount: number;
  setNewColoredBlockCoordinates: (coordinates: BlockCoordinates) => void;
};

export const Field: FC<Props> = memo(function Field({
  fieldCount,
  setNewColoredBlockCoordinates,
}) {
  const fieldContent = [];

  for (let row = 1; row <= fieldCount; row++) {
    for (let column = 1; column <= fieldCount; column++) {
      fieldContent.push(
        <FieldBlock
          key={uuidv4()}
          row={row}
          column={column}
          setNewColoredBlockCoordinates={setNewColoredBlockCoordinates}
        />,
      );
    }
  }

  const fieldVariables = {
    '--fields-count': `${fieldCount}`,
  };

  return (
    <div className="field" style={fieldVariables as React.CSSProperties}>
      {fieldContent}
    </div>
  );
});
