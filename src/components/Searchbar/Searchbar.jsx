import { useState } from "react";
import css from './Searchbar.module.css'

const Searchbar = ({handleSearch}) => {
    const [value, setValue] = useState('');
  
    const handleChange = e => {
      setValue(e.currentTarget.value.toLowerCase());
    };
  
    const handleSubmit = event => {
      event.preventDefault();

      handleSearch(value);
    };
  
    return (
      <form onSubmit={handleSubmit}>  
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          className={css.search}
          onChange={handleChange}
          value={value}
        />
        <button type="submit">
        Search
        </button>
      </form>
    );
  }

  export default Searchbar;