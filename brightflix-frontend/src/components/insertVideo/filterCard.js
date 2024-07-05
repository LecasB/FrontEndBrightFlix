import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import '../../styles/css/filterCard.css';
import StarRatingSelector from './starRating';

function FilterCard({ onClose, onSelectFilter }) {
  const [type, setType] = useState('movies');
  const [category, setCategory] = useState('');
  const [rating, setRating] = useState(0);
  const [categories, setCategories] = useState([]);
  const categoryRef = useRef(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('https://brightflixapii.vercel.app/api/v1/categorias');
        if (response.data && Array.isArray(response.data.data)) {
          setCategories(response.data.data);
        } else {
          console.error('Error fetching categories: response data is not an array', response.data);
        }
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  const handleApplyFilter = () => {
    onSelectFilter({ type, category, rating });
    onClose();
  };

  const handleSelectClick = (e) => {
    e.stopPropagation();
    const select = e.currentTarget;
    select.nextSibling.classList.toggle('select-hide');
    select.classList.toggle('select-arrow-active');
  };

  const handleOptionClick = (e, setter) => {
    e.stopPropagation();
    const selected = e.currentTarget;
    const selectBox = selected.parentNode.previousSibling;
    selectBox.innerHTML = selected.innerHTML;
    setter(selected.getAttribute('data-value'));
    selected.parentNode.classList.add('select-hide');
    selectBox.classList.remove('select-arrow-active');
  };

  return (
    <div className="filter-card">
      <div className="popup">
        <span className="close-btn" onClick={onClose}>X</span>
        <h1>Select Filter</h1>
        <div>
          <label>Type</label>
          <div className="custom-select">
            <div className="select-selected" onClick={handleSelectClick}>
              {type === 'movies' ? 'Movies' : 'Series'}
            </div>
            <div className="select-items select-hide">
              <div onClick={(e) => handleOptionClick(e, setType)} data-value="movies">Movies</div>
              <div onClick={(e) => handleOptionClick(e, setType)} data-value="series">Series</div>
            </div>
          </div>
        </div>
        <div>
          <label>Category</label>
          <div className="custom-select" ref={categoryRef}>
            <div className="select-selected" onClick={handleSelectClick}>
              {category || 'All'}
            </div>
            <div className="select-items select-hide">
              <div onClick={(e) => handleOptionClick(e, setCategory)} data-value="">All</div>
              {categories.map((cat, index) => (
                <div key={index} onClick={(e) => handleOptionClick(e, setCategory)} data-value={cat}>
                  {cat}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <label>Rating</label>
          <StarRatingSelector rating={rating} onChange={setRating} />
        </div>
        <button onClick={handleApplyFilter}>Apply Filter</button>
      </div>
    </div>
  );
}

export default FilterCard;
