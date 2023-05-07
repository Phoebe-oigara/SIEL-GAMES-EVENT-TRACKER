import React from 'react';

function SearchBar({handleInput}) {
  

  return (
    <div>
      <form>
        <input
          type='text'
          placeholder='Search games...'
          onChange={handleInput}
        />
      </form>
    </div>
  );
}

export default SearchBar;
