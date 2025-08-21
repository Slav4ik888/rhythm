import { FC, memo } from 'react';
import { useUI } from 'entities/ui';
import rhythmLogo from 'shared/assets/logos/logo_rhythm.png';
// import rhythmLogoSmall from 'shared/assets/logos/logo_rhythm_small.png';
import { ProgressiveImage } from 'shared/lib/progressiv-image';



export const NavbarLogo: FC = memo(() => {
  const { isMobile } = useUI();

  return (
    <ProgressiveImage
      alt = 'Ритм лого'
      src = {rhythmLogo}
      sx  = {{ root: { width: '7rem' } }}
    />
  )
});
