import './Application.css';

import { useCallback, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

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
  // eslint-disable-next-line prettier/prettier
  const [coloredBlockCoordinatesArr, setColoredBlockCoordinates] = useState<
    BlockCoordinates[]
  >([]);
  const [fieldRerender, setFieldRerender] = useState('');

  useEffect(() => {
    getData();
  }, []);

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

  const newColoredBlockCoordinatesHandler = useCallback((coords: BlockCoordinates) => {
    setColoredBlockCoordinates((currentCoords) =>
      addOrDeleteCoordinatesInArr(currentCoords, coords),
    );
  }, []);

  return (
    <div className="application">
      <div className="application__interface">
        <div className="application__manage-tools">
          <Selector
            isLoading={isLoading}
            isError={isError}
            presetsForTable={presetsForTable}
            setOption={setFieldCount}
            onShown={() => setIsFieldShown(false)}
            onClear={() => setColoredBlockCoordinates([])}
          />

          <StartOrRetryButton
            isLoading={isLoading}
            isError={isError}
            isFieldShown={isFieldShown}
            onReload={reload}
            onShown={() => setIsFieldShown(true)}
            onClear={() => {
              setColoredBlockCoordinates([]);
              setFieldRerender(uuidv4());
            }}
          />
        </div>

        <div className="application__field">
          {isFieldShown && (
            <Field
              fieldCount={fieldCount}
              fieldRerender={fieldRerender}
              newColoredBlockCoordinatesHandler={newColoredBlockCoordinatesHandler}
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
