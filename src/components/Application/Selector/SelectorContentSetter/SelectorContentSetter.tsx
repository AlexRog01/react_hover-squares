import { FC } from 'react';

import { PresetForTable } from '../../../../types/PresetForTable';

type Props = {
  isLoading: boolean;
  isError: boolean;
  presetsForTable: PresetForTable[];
};

export const SelectorContentSetter: FC<Props> = ({
  isLoading,
  isError,
  presetsForTable,
}) => {
  if (isLoading) {
    return <option disabled>Loading modes...</option>;
  } else if (isError) {
    return <option disabled>No modes, try again later!</option>;
  } else {
    return (
      <>
        {presetsForTable.map((preset) => (
          <option key={preset.id} value={preset.name}>
            {preset.name}
          </option>
        ))}
      </>
    );
  }
};
