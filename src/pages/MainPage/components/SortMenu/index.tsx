import React, {useState} from 'react'

import { ArrowDown } from '../../../../assets/icons'
import { SortMenuProps } from '../../../../types'
import { useLocation, useNavigate } from 'react-router-dom'
import { useQuery } from '../../../../hooks'

import './styles.scss'

const SortMenu: React.FC<SortMenuProps> = ({ sortItems, setSortItem }) => {
  const [isOpen, setIsOpen] = useState(false)
  const query = useQuery()
  const currentSortItem = Number(query.get('sortBy')) || 0
  const navigate = useNavigate()
  const pathname = useLocation().pathname

  const handleClick = (id: number) => {
    if (id) {
      query.set('sortBy', String(id))
    } else {
      query.delete('sortBy')
    }
    navigate(`${pathname}?${query.toString()}`, { replace: true })
    setSortItem(id)
  }

  return <div className={'sort-menu'}>
    <span>SORT BY</span>
    <div
      className={'select'}
      onClick={() => setIsOpen(!isOpen)}
    >
      <span>{sortItems[currentSortItem]}</span>
      <ArrowDown/>
      <div className={`select__dropdown${(isOpen) ? ' select__dropdown__open' : ''}`}>
        {sortItems.map((it, id) => id !== currentSortItem && (
          <div
            className={`select__dropdown__item${(id === currentSortItem) ? ' select__dropdown__item__selected' : ''}`}
            key={`sort_option_${id}_${it}`}
            onClick={() => handleClick(id)}
          >
            <span>{it}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
}

export default SortMenu
