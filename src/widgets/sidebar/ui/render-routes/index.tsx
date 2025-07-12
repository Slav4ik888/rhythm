import { FC, memo } from 'react';
import { Fragment } from 'react/jsx-runtime';
import { useSidebar } from '../../model/hooks';
import { RenderRoute } from './render-route';



/** Render all the routes (All the visible items on the Sidebar) */
export const RenderRoutes: FC = memo(() => {
  const { sidebarRoutes, activeSheetId, textColor } = useSidebar();

  return (
    <>
      {
        sidebarRoutes.map(item => (
          <Fragment key={item.id}>
            <RenderRoute
              item          = {item}
              activeSheetId = {activeSheetId}
              textColor     = {textColor}
            />
          </Fragment>
        ))
      }
    </>
  )
});
