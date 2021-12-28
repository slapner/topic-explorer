import { useRef } from 'react';
import { SearchIcon } from './Icons';

function SearchBar({ name, handleSubmit }) {
  const inputRef = useRef();

  return (
    <form
      className="flex shadow-xl shadow-purple-900"
      onSubmit={(ev) => handleSubmit(ev, inputRef.current.value)}
    >
      <input
        type="text"
        ref={inputRef}
        defaultValue={name}
        className="py-4 px-6 w-full rounded-l-lg bg-purple-50 text-xl text-slate-900 focus:outline-none"
      />
      <button
        type="submit"
        className="bg-gradient-to-r from-green-400 to-blue-500 rounded-r-lg px-10 text-purple-50 hover:from-pink-500 hover:to-yellow-500"
      >
        <SearchIcon />
      </button>
    </form>
  );
}

export default SearchBar;
