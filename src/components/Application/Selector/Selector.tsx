import './Selector.css';

import { FC, useState } from 'react';

import { PresetForTable } from '../../../types/PresetForTable';
import { SelectorContentSetter } from './SelectorContentSetter/SelectorContentSetter';

type Props = {
  isLoading: boolean;
  isError: boolean;
  presetsForTable: PresetForTable[];
  setOption: React.Dispatch<React.SetStateAction<number>>;
  onShown: () => void;
  onClear: () => void;
};

export const Selector: FC<Props> = ({
  isLoading,
  isError,
  presetsForTable,
  setOption,
  onShown,
  onClear,
}) => {
  const [appMode, setAppMode] = useState('noMode');

  const selectorOnChangeHendler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onShown();
    onClear();
    setAppMode(event.target.value);

    const selectedPreset = presetsForTable.find(
      (preset) => preset.name === event.target.value,
    );

    if (selectedPreset) {
      setOption(selectedPreset.field);
    }
  };

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
