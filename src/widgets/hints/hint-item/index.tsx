import { memo } from 'react'
import { useHints } from 'entities/hints';
import { useUser } from 'entities/user';



export const HintItemContainer = memo(() => {
  // const {  } = useUser();
  const { entities, activeId } = useHints();

  return (
    <>

    </>
  )
})
