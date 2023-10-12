import './StartOrRetryButton.css';

import classNames from 'classnames';
import { FC } from 'react';

type Props = {
  isLoading: boolean;
  isError: boolean;
  isFieldShown: boolean;
  onReload: () => void;
  onShown: () => void;
  onClear: () => void;
};

export const StartOrRetryButton: FC<Props> = ({
  isLoading,
  isError,
  isFieldShown,
  onReload,
  onShown,
  onClear,
}) => {
  const handler = isError ? onReload : isFieldShown ? onClear : onShown;
  const text = isError ? 'Try again' : isFieldShown ? 'Clear' : 'START';

  return (
    <button
      className={classNames('startOrRetryButton button is-link', {
        'is-loading': isLoading,
      })}
      onClick={handler}
    >
      {text}
    </button>
  );
};
