import { FC, memo } from 'react';
import { ViewItem } from 'entities/dashboard-view';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Tooltip, TooltipHTML } from 'shared/ui/tooltip';
import { isNotEmpty } from 'shared/helpers/objects';
import { f, pxToRem } from 'shared/styles';
import { Company } from 'entities/company';
import { CircularProgress } from 'shared/ui/circular-progress';
import { __devLog } from 'shared/lib/tests/__dev-log';
import { CodeStringify } from 'shared/ui/code-stringify';



const sxBtn = {
  borderRadius : '4px',
  cursor       : 'pointer',
  color        : 'text.primary',
  py           : pxToRem(3),
  px           : pxToRem(6),
  ml           : 2,
};


const sxText = {
  fontSize     : pxToRem(12),
  lineHeight   : pxToRem(16),
  cursor       : 'pointer',
};


interface Props {
  loading         : boolean
  changedCompany  : Partial<Company>
  changedViewItem : Partial<ViewItem>
  onClick         : () => void;
  onConsole       : () => void;
  onCancel        : () => void;
}

export const UnsavedChangesComponent: FC<Props> = memo(({ loading, changedCompany, changedViewItem,
  onCancel, onConsole, onClick }) => (
  <Box
    sx={{
      ...f('-c'),
      position     : 'absolute',
      top          : pxToRem(64),
      right        : pxToRem(24),
      height       : pxToRem(20),
      zIndex       : 100,
      opacity      : loading ? 0.5 : 1
    }}
  >
    <Box sx={sxBtn} onClick={onConsole}>
      <TooltipHTML title={<>
          {isNotEmpty(changedCompany) && <>
            <p>changedCompany:</p>
            <CodeStringify obj={changedCompany} />
          </>}
          {isNotEmpty(changedViewItem) && <>
            <p>changedViewItem:</p>
            <CodeStringify obj={changedViewItem} />
          </>}
        </>}>
        <Typography sx={sxText}>k</Typography>
      </TooltipHTML>
    </Box>

    <Box sx={sxBtn} onClick={onCancel}>
      <Tooltip title='Отменить внесённые изменения'>
        <Typography
          sx={(theme) => ({
            ...sxText,
            transition: theme.transitions.create('all', {
              easing   : theme.transitions.easing.sharp,
              duration : theme.transitions.duration.short,
            }),
            '&:hover': {
              textShadow: '0px 0px 5px grey'
            }
          })}
        >
          Отменить
        </Typography>
      </Tooltip>
    </Box>

    <Box
      id      = 'saveBtn'
      onClick = {onClick}
      sx      = {(theme) => ({
        ...sxBtn,
        border : `1px solid ${theme.palette.error.main}`,
        color  : theme.palette.error.main,
      })}
    >
      <Tooltip
        title='Для сохранения изменений нажмите эту кнопку,
              или выберите любой другой элемент или закройти конфигуратор.'
      >
        <Typography
          sx={(theme) => ({
            ...sxText,
            transition: theme.transitions.create('all', {
              easing   : theme.transitions.easing.sharp,
              duration : theme.transitions.duration.short,
            }),
            '&:hover': {
              textShadow: '0px 0px 5px red'
            }
          })}
        >
          Cохранить
        </Typography>
      </Tooltip>

      <CircularProgress
        loading = {loading}
        color   = 'error.main'
        size    = {20}
      />
    </Box>
  </Box>
));
