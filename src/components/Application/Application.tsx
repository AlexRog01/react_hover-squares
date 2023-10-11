import './Application.css';

import { useCallback, useEffect, useState } from 'react';

import { getPresetsforTable } from '../../api/presetsForTable';
import { BlockCoordinates } from '../../types/BlockCoordinates';
import { PresetForTable } from '../../types/PresetForTable';
import { addOrDeleteCoordinatesInArr } from '../../utils/addOrDeleteCoordinatesInArr';
import { BlocksCoordinates } from './BlocksCoordinates/BlocksCoordinates';
import { Field } from './Field/Field';
import { Selector } from './Selector/Selector';
import { StartOrRetryButton } from './StartOrRetryButton/StartOrRetryButton';

export const Application = () => {
  const [presetsForTable, setPresetsForTable] = useState<PresetForTable[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isFieldShown, setIsFieldShown] = useState(false);
  const [fieldCount, setFieldCount] = useState(0);
  const [coloredBlockCoordinatesArr, setColoredBlockCoordinates] = useState<BlockCoordinates[]>([]);
  const [newColoredBlockCoordinates, setNewColoredBlockCoordinates] = useState<BlockCoordinates>({ row: 0, column: 0 });

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setColoredBlockCoordinates(
      addOrDeleteCoordinatesInArr(coloredBlockCoordinatesArr, newColoredBlockCoordinates),
    );
  }, [newColoredBlockCoordinates]);

  const getData = useCallback(() => {
    setIsLoading(true);

    setTimeout(() => {
      getPresetsforTable()
        .then(setPresetsForTable)
        .catch(() => setIsError(true))
        .finally(() => setIsLoading(false));
    }, 2000);
  }, []);

  const reload = useCallback(() => {
    getData();
    setIsError(false);
  }, []);

  return (
    <div className="application">
      <div className="application__interface">
        <div className="application__manage-tools">
          <Selector
            isLoading={isLoading}
            isError={isError}
            presetsForTable={presetsForTable}
            setFieldCount={setFieldCount}
            onShown={() => setIsFieldShown(false)}
            setColoredBlockCoordinates={setColoredBlockCoordinates}
          />

          <StartOrRetryButton
            isLoading={isLoading}
            isError={isError}
            reload={reload}
            onShown={() => setIsFieldShown(true)}
          />
        </div>

        <div className="application__field">
          {isFieldShown && (
            <Field
              fieldCount={fieldCount}
              setNewColoredBlockCoordinates={setNewColoredBlockCoordinates}
            />
          )}
        </div>
      </div>

      <div className="application__blocks-coordinates">
        <h1 className="title">Hover squares</h1>
        <BlocksCoordinates coloredBlockCoordinatesArr={coloredBlockCoordinatesArr} />
      </div>
    </div>
  );
};
