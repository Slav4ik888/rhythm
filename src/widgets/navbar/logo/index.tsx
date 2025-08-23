import { FC, memo } from 'react';
import { useUI } from 'entities/ui';
import rhythmLogo from 'shared/assets/logos/logo_rhythm.png';
import rhythmLogoDark from 'shared/assets/logos/logo_rhythm_dark.png';
// import rhythmLogoSmall from 'shared/assets/logos/logo_rhythm_small.png';
import { ProgressiveImage } from 'shared/lib/progressiv-image';



interface Props {
  darkMode: boolean
}

export const NavbarLogo: FC<Props> = memo(({ darkMode }) => {
  const { isMobile } = useUI();

  return (
    <ProgressiveImage
      alt = 'Ритм лого'
      src = {darkMode ? rhythmLogoDark : rhythmLogo}
      sx  = {{ root: { width: '7rem' } }}
    />
  )
});
