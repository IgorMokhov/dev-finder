import { useEffect, useRef } from 'react';
import { ReactComponent as SearchIcon } from 'assets/icon-search.svg';
import { Button } from 'components/Button';
import styles from './Search.module.scss';

interface SearchProps {
  hasError: boolean;
  onSubmit: (text: string) => void;
}

type FormFields = {
  username: HTMLInputElement;
};

export const Search = ({ hasError, onSubmit }: SearchProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement & FormFields>
  ) => {
    event.preventDefault();
    const text = event.currentTarget.username.value;

    if (text.trim()) {
      onSubmit(text);
      event.currentTarget.reset();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Enter') {
        if (inputRef && inputRef.current) {
          inputRef.current.focus();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <div className={styles.search}>
        <label htmlFor="search" className={styles.label}>
          <SearchIcon />
        </label>
        <input
          ref={inputRef}
          type="text"
          className={styles.textField}
          id="search"
          name="username"
          placeholder="Search Github username..."
        />
        {hasError && <div className={styles.error}>No result</div>}
        <Button>Search</Button>
      </div>
    </form>
  );
};
