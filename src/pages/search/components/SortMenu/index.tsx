import React, {useState} from 'react'

import { ArrowDown } from '../../../../assets/icons'
import { SortMenuProps } from '../../../../types'
import { useRouter } from 'next/router'

const SortMenu: React.FC<SortMenuProps> = ({ sortItems }) => {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  const query = router.query
  const currentSortItem = Number(query.sortBy) || 0

  const handleClick = (id: number) => {
    delete query.slug
    if (id) {
      router.push({ pathname: window.location.pathname, query: { ...query, sortBy: id } })
    } else {
      delete query.sortBy
      router.push({ pathname: window.location.pathname, query })
    }
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
          <button
            className={`select__dropdown__item${(id === currentSortItem) ? ' select__dropdown__item__selected' : ''}`}
            key={`sort_option_${id}_${it}`}
            onClick={() => handleClick(id)}
          >
            <span>{it}</span>
          </button>
        ))}
      </div>
    </div>
  </div>
}

export default SortMenu
