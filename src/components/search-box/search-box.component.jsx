import './search-box.styles.css';

export const SearchBox = ({ placeholder, handleChange}) => ( // functional component, not class component
    <input 
    className='search' 
    type="search" 
    placeholder={placeholder}
    onChange={handleChange}
    />
);