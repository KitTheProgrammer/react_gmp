import React, {useState} from 'react'

import { ArrowDown } from '../../../../assets/icons'
import { SortMenuProps } from '../../../../types'

import './styles.scss'

const SortMenu: React.FC<SortMenuProps> = ({ sortItems, currentSortItem, setSortItem }) => {
  const [isOpen, setIsOpen] = useState(false)

  return <div className={'sort-menu'}>
    <span>SORT BY</span>
    <div
      className={`select`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <span>{sortItems[currentSortItem]}</span>
      <ArrowDown/>
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

export default SortMenu
