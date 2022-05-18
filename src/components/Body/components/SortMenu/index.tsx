import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './styles.scss'

export interface SortMenuProps {
  sortItems: string[]
  currentSortItem: number
  setSortItem: React.Dispatch<React.SetStateAction<number>>
}

const SortMenu: React.FC<SortMenuProps> = ({ sortItems, currentSortItem, setSortItem }) => {
  const [isOpen, setIsOpen] = useState(false)

  // throw new Error('Error(((')

  return <div className={'sort-menu'}>
    <span>SORT BY</span>
    <div
      className={`select`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <span>{sortItems[currentSortItem]}</span>
      <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M1.17339 0C0.319169 0 -0.141788 1.00184 0.413939 1.65057L4.23746 6.11398C4.63642 6.57971 5.35674 6.57992 5.75597 6.11442L9.58401 1.65101C10.1403 1.0024 9.67943 0 8.82494 0H1.17339Z" fill="#F65261"/>
      </svg>
      <div className={`select__dropdown${(isOpen) ? ' select__dropdown__open' : ''}`}>
        {sortItems.map((it, id) => id !== currentSortItem && (
          <div
            className={`select__dropdown__item${(id === currentSortItem) ? ' select__dropdown__item__selected' : ''}`}
            key={`sort_option_${id}_${it}`}
            onClick={() => setSortItem(id)}
          >
            <span>{it}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
}

SortMenu.propTypes = {
  sortItems: PropTypes.array.isRequired,
  currentSortItem: PropTypes.number.isRequired,
  setSortItem: PropTypes.func.isRequired,
}

export default SortMenu
