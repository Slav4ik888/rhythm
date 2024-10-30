import { FC, memo } from 'react';
import { useUI } from 'entities/ui';
import { MobileAuthBtns } from './mobile';
import { AnyAuthBtns } from './any'
import { isUndefined } from 'shared/lib/validators';



/** Кнопка Navbar для входа в авторизацию */
export const AuthBtns: FC = memo(() => {
  const { isMobile } = useUI();

  if (isUndefined(isMobile)) return null;

  return (
    <>
      {
        isMobile ? <MobileAuthBtns /> : <AnyAuthBtns />
      }
    </>
  );
});
