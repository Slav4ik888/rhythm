import { FC, memo, useCallback } from 'react';
import { f, getTypography, pxToRem } from 'shared/styles';
import Box from '@mui/material/Box';
import { Title } from '../title';
import { CustomTheme } from 'app/providers/theme';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import { ACCESS_TYPE, CompanyMember } from 'entities/company';
import { Tooltip } from 'shared/ui/tooltip';
import Chip from '@mui/material/Chip';



const overStyle = {
  whiteSpace   : 'nowrap',       /* Запрет переноса строк */
  overflow     : 'hidden',       /* Скрытие выходящего за границы контента */
  textOverflow : 'ellipsis',     /* Добавление "..." в конце */
};


interface Props {
  usersAccessDashboard : CompanyMember[]
  onEmailClick         : (email: string) => void
}

/** Список пользователей с доступом к дашборду */
export const UsersWithAccessContainer: FC<Props> = memo(({ usersAccessDashboard, onEmailClick }) => {
  const handleDelete = useCallback((email: string) => {
    console.log('Delete email: ', email);
  }, []);


  return (
    <Box sx={{ ...f('c'), gap: 2, width: '100%' }}>
      <Title label='Пользователи, имеющие доступ' />
      <Box
        sx={(theme) => ({
          ...f('c'),
          gap          : 1,
          width        : '100%',
          border       : `1px solid ${(theme as CustomTheme).palette.text.light}`,
          borderRadius : pxToRem(4),
        })}
      >
        {
          usersAccessDashboard.map(member => (
            <Box
              key = {member.email}
              sx  = {{ ...f('-c-sb'), width: '100%', gap: 1, p: 1.5 }}
            >
              <Chip
                label   = {member.email}
                sx      = {{ cursor: 'pointer', maxWidth: pxToRem(180), ...overStyle }}
                onClick = {() => onEmailClick(member.email)}
              />
              <Box sx={{ ...f('-c'), gap: 1 }}>
                <Typography
                  variant   = 'body2'
                  color     = 'text.light'
                  component = 'span'
                  children  = '|'
                />
                <Tooltip title={ACCESS_TYPE[member.access.dashboard?.allFields]?.label}>
                  <Typography
                    variant  = 'caption'
                    color    = 'text.main'
                    children = {ACCESS_TYPE[member.access.dashboard?.allFields]?.label}
                    sx       = {{ cursor: 'default', width: pxToRem(80), ...overStyle }}
                />
                </Tooltip>
                <Tooltip title='Закрыть доступ этому пользователю'>
                  <IconButton color='inherit' onClick={() => handleDelete(member.email)}>
                    <CloseIcon
                      sx={(theme) => ({
                        fontSize    : `${getTypography(theme as CustomTheme).size.xs} !important`,
                        color       : 'text.light',
                        stroke      : 'currentColor',
                        strokeWidth : '1px',
                        cursor      : 'pointer',
                        transform   : 'translateY(1px)', // Сдвинуть вниз
                      })}
                    />
                  </IconButton>
                </Tooltip>
              </Box>
            </Box>
          ))
        }
      </Box>
    </Box>
  )
});
