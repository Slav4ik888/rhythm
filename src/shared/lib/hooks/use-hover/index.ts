import { useCallback, useMemo, useState } from 'react'



interface UseHoverBind {
  onMouseEnter: () => void
  onMouseLeave: () => void
}

export interface UseHover {
  isHover   : boolean
  onSetHover: (status: boolean) => void
  
  isEdit    : boolean
  onSetEdit : (status: boolean) => void
  
  hoverBind : UseHoverBind
}



/**
 * If isEdit => mouse enter/leave not functions
 */
export const useHover = (): UseHover => {
  const [isHover, setIsHover] = useState(false);
  const onSetHover = useCallback((status: boolean) => {
    setIsHover(status);
  }, [isHover, setIsHover]);


  const [isEdit, setIsEdit] = useState(false);
  const onSetEdit = useCallback((status: boolean) => {
    setIsEdit(status);
  }, [isEdit, setIsEdit]);

  
  const onMouseEnter = useCallback(() => {
    if (isEdit) return

    setIsHover(true);
  }, [isEdit, isHover, setIsHover]);


  const onMouseLeave = useCallback(() => {
    if (isEdit) return

    setIsHover(false);
  }, [isEdit, isHover, setIsHover]);


  return useMemo(() => ({
    isHover,
    onSetHover,

    isEdit,
    onSetEdit,
    
    hoverBind: {
      onMouseEnter,
      onMouseLeave
    }
  }), [isHover, onSetHover, isEdit, onSetEdit, onMouseEnter, onMouseLeave])
}
