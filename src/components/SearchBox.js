import { useDispatch } from 'react-redux';
import { setSearch } from '../redux/ordersSlice';
import { debounce } from '../utils/Debounce';

function SearchBox() {
  const dispatch = useDispatch()

  function searchHandler(e) {
    dispatch(setSearch(e.target.value))
  }

  const debounceSearch = debounce(searchHandler, 700)

  return (
    <div className="main__search-box">
      <input type="search" placeholder="Search" onChange={(e) => debounceSearch(e)}/>
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="8.25" cy="8.24997" rx="6" ry="6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12.375 12.7184L16.125 16.4685" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

export default SearchBox;
