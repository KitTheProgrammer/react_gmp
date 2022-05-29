import React, { useEffect } from 'react'

export const getInputFormattedTime = (d: string | number) => {
  const date = new Date(d)
  const year = date.getFullYear()
  const day = date.getDay()
  const month = date.getMonth() + 1
  return `${year}-${(month < 10) ? `0${month}` : month}-${(day < 10) ? `0${day}` : day}`
}

export const useOnClickOutside = (ref: React.MutableRefObject<any>, handler: (e: any) => void) => {
  useEffect(
    () => {
      const listener = (event: any) => {
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }
        handler(event)
      }
      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);
      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      }
    },
    [ref, handler]
  )
}

// export const getFormattedRuntime = (v: string | number) => {
//   if (typeof v === 'string') {
//     return v
//   }
//
//
// }
