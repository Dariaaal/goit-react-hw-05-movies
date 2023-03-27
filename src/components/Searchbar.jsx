import { useState } from "react";
import css from './pages/Movies.module.css'

// const Searchbar = ({handleSearch}) => {

// const [value, setValue] = useState('');

// const handleChange = e => {
//   setValue(e.target.value.toLowerCase());
// }

// const handleSubmit = e => {
//   e.preventDefault();
//   handleSearch(value);
//   reset();
// }
  
// const reset = () => {
//   setValue('');
// }

// return <form onSubmit={handleSubmit}>
//     <input
//       type="text"
//       autoComplete="off"
//       autoFocus
//       className={css.search}
//       value={value}
//       onChange={handleChange}
//     />

// <button type="submit">
//      Search
//     </button>

//   </form>
// }

// export default Searchbar;

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