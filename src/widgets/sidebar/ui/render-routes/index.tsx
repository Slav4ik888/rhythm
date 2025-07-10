import { ColorName } from 'app/providers/theme';
import { FC, memo } from 'react';
import { Fragment } from 'react/jsx-runtime';
import { SidebarListItem } from 'shared/types/sidebar';
import { RenderRoute } from './render-route';



interface Props {
  routesList    : SidebarListItem[],
  activeSheetId : string, // текущий активный sheetId
  textColor     : ColorName
}

/** Render all the routes (All the visible items on the Sidebar) */
export const RenderRoutes: FC<Props> = memo(({ routesList, activeSheetId, textColor }) => (
  <>
    {
      routesList.map(item => (
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
));
