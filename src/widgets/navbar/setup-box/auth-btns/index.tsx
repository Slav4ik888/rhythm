import { FC, memo } from 'react';
import { useUI } from 'entities/ui';
import { MobileAuthBtns } from './mobile';
import { AnyAuthBtns } from './any'
import { isUndefined } from 'shared/lib/validators';
import { SxNavbarIcon } from 'widgets/navbar';



interface Props {
  sx: SxNavbarIcon
}

/** Кнопка Navbar для входа в авторизацию */
export const AuthBtns: FC<Props> = memo(({ sx }) => {
  const { isMobile } = useUI();

  if (isUndefined(isMobile)) return null;

  return (
    <>
      {
        isMobile ? <MobileAuthBtns sx={sx} /> : <AnyAuthBtns sx={sx} />
      }
    </>
  );
});
