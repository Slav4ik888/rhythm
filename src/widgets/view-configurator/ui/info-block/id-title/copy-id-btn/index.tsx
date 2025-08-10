import { FC, memo } from 'react';
import CopyIcon from '@mui/icons-material/ContentCopy';
import { IconButton } from 'shared/ui/mui-components';
import { copyToClipboard } from 'shared/lib/clipboard';



interface Props {
  selectedId: string
}

export const CopyIdTitleBtn: FC<Props> = memo(({ selectedId }) => {
  const handleCopy = () => copyToClipboard(selectedId);


  return (
    <IconButton
      toolTitle = 'Скопировать Id'
      icon      = {CopyIcon}
      sx        = {{ icon: { fontSize: '14px' } }}
      onClick   = {handleCopy}
    />
  )
});
