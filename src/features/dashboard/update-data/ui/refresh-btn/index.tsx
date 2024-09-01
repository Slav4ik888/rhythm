import { FC, memo } from 'react';
import { IconButton } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Autorenew';
import cfg from 'shared/api/keys';
import { LS } from 'shared/lib/local-storage';



interface Props {

}


export const RefreshBtn: FC<Props> = memo(({  }) => {

  const handleRefresh = () => {
    console.log('URL_OSNOVA: ', cfg.URL_OSNOVA);

    fetch(cfg.URL_OSNOVA)
      .then(response => response.json())
      .then(data => {
        LS.setGSData(data.data);
        console.log(data.data);
      })
      .catch(error => console.error('Error:', error));
  };

  return (
    <IconButton
      color="inherit"
      onClick={handleRefresh}
    >
      <RefreshIcon /> {/* fontSize="small"*/}
    </IconButton>
  )
});
