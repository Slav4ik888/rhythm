import EqualizerIcon from '@mui/icons-material/Equalizer';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import GroupsIcon from '@mui/icons-material/Groups';
import StorefrontIcon from '@mui/icons-material/Storefront';
import CalculateIcon from '@mui/icons-material/Calculate';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import FolderSpecialIcon from '@mui/icons-material/FolderSpecial';



export const defaultIcons = {
  'equalizer'               : EqualizerIcon,
  'account-balance'         : AccountBalanceIcon,
  'auto-fix-high'           : AutoFixHighIcon,
  'groups'                  : GroupsIcon,
  'storefront'              : StorefrontIcon,
  'calculate'               : CalculateIcon,
  'precision-manufacturing' : PrecisionManufacturingIcon,
  'folder-special'          : FolderSpecialIcon,
};

export type DefaultIconId = keyof typeof defaultIcons
