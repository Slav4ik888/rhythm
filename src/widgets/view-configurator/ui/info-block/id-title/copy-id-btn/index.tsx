import { FC, memo, useEffect, useState } from 'react';
import CopyIcon from '@mui/icons-material/ContentCopy';
import { IconButton } from 'shared/ui/mui-components';
import { copyToClipboard } from 'shared/lib/clipboard';
import CheckIcon from '@mui/icons-material/Check';
import { CustomTheme, useTheme } from 'app/providers/theme';
import { useUI } from 'entities/ui';



const useStyles = (theme: CustomTheme, copied: boolean) => {
  const sx: any = {
    icon: {
      fontSize : '14px',
    }
  }

  if (copied) {
    sx.icon.color = theme.palette.success.main;
    sx.icon['&:hover'] = theme.palette.success.main;
  }

  return sx
}


interface Props {
  selectedId: string
}

export const CopyIdTitleBtn: FC<Props> = memo(({ selectedId }) => {
  const { setSuccessMessage } = useUI();
  const [copied, setCopied] = useState(false);
  const { icon } = useStyles(useTheme(), copied);


  useEffect(() => {
    setCopied(false);
  },
    [selectedId]
  );

  const handleCopy = () => {
    copyToClipboard(selectedId);
    if (copied) setSuccessMessage('Скопировано');
    setCopied(true);
  };

  return (
    <IconButton
      toolTitle = 'Скопировать Id'
      icon      = {copied ? CheckIcon : CopyIcon}
      sx        = {{ icon }}
      onClick   = {handleCopy}
    />
  )
});
