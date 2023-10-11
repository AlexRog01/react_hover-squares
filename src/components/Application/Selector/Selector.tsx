import './Selector.css';

import { FC, useState } from 'react';

import { BlockCoordinates } from '../../../types/BlockCoordinates';
import { PresetForTable } from '../../../types/PresetForTable';
import { SelectorContentSetter } from './SelectorContentSetter/SelectorContentSetter';

type Props = {
  isLoading: boolean;
  isError: boolean;
  presetsForTable: PresetForTable[];
  setFieldCount: (count: number) => void;
  onShown: () => void;
  setColoredBlockCoordinates: (newArr: BlockCoordinates[]) => void;
};

export const Selector: FC<Props> = ({
  isLoading,
  isError,
  presetsForTable,
  setFieldCount,
  onShown,
  setColoredBlockCoordinates,
}) => {
  const [appMode, setAppMode] = useState('noMode');

  const selectorOnChangeHendler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onShown();
    setColoredBlockCoordinates([]);
    setAppMode(event.target.value);

    const selectedPreset = presetsForTable.find(
      (preset) => preset.name === event.target.value,
    );

    if (selectedPreset) {
      setFieldCount(selectedPreset.field);
    }
  };

  //console.log(presetsForTable.length); /// зато здесь он даже при ошибки на сервере длина всё равно 6

  return (
    <div className="select is-link">
      <select
        className="selector"
        required
        name="appMode"
        value={appMode}
        onChange={selectorOnChangeHendler}
      >
        <option value="noMode" disabled>
          Pick mode
        </option>

        <SelectorContentSetter
          isLoading={isLoading}
          isError={isError}
          presetsForTable={presetsForTable}
        />
      </select>
    </div>
  );
};
