import { FC, memo } from 'react';
import { useUser } from 'entities/user';
import { MenuBtns } from './menu-bns';
import { AuthBtns } from './auth-btns';
import { SxNavbarIcon } from '..';



interface Props {
  isMini?: boolean
  sx: SxNavbarIcon
}


/** Кнопки Navbar авторизация и профилей */
export const NavbarSetupBox: FC<Props> = memo(({ isMini = false, sx }) => {
  const { auth } = useUser();

  // Не понимаю что это
  // TODO: remove to useUIConfiguratorController
  if (isMini) return null

  return (
    <>
      {
        auth ? <MenuBtns sx={sx} /> : <AuthBtns sx={sx} />
      }
    </>
  );
})
