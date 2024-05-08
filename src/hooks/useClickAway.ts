/**
 * A hook that triggers a callback when a click event is detected outside of a given element.
 * @param {Callback} callback - The callback to be triggered when a click event is detected outside of the given element.
 * @returns {React.RefObject<HTMLDivElement>} - The ref object to be attached to the element that should trigger the callback.
 * @module useClickAway
 */

import { useEffect, useRef } from 'react'

type Callback = () => void

const useClickAway = (callback: Callback): React.RefObject<HTMLDivElement> => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Makes sure the click away is only triggered if the ref is not null and the target is not a child
      if (
        ref.current &&
        event.target instanceof Node &&
        !ref.current.contains(event.target) &&
        event.target !== ref.current
      ) {
        if (callback) {
          callback()
        }
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref, callback])

  return ref
}

export default useClickAway
