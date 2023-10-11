import './StartOrRetryButton.css';

import classNames from 'classnames';
import { FC } from 'react';

type Props = {
  isLoading: boolean;
  isError: boolean;
  reload: () => void;
  onShown: () => void;
};

export const StartOrRetryButton: FC<Props> = ({
  isLoading,
  isError,
  reload,
  onShown,
}) => {
  return (
    <>
      {isError ? (
        <button
          className={classNames('startOrRetryButton button is-link', {
            'is-loading': isLoading,
          })}
          onClick={reload}
        >
          Try again
        </button>
      ) : (
        <button
          className={classNames('startOrRetryButton button is-link', {
            'is-loading': isLoading,
          })}
          onClick={() => {
            onShown();
          }}
        >
          START
        </button>
      )}
    </>
  );
};
