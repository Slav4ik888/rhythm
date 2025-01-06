import { FC, memo } from "react";
import { useUser } from 'entities/user';
import { MenuBtns } from './menu-bns';
import { AuthBtns } from './auth-btns';



interface Props {
  isMini? : boolean
}


/** Кнопки Navbar авторизация и профилей */
export const NavbarSetupBox: FC<Props> = memo(({ isMini = false }) => {
  const { auth } = useUser();

  // Не понимаю что это
  // TODO: remove to useUIConfiguratorController
  if (isMini) return null

  return (
    <>
      {
        auth ? <MenuBtns /> : <AuthBtns />
      }
    </>
  );
})
