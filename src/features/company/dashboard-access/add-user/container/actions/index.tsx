import { FC, memo, useCallback, useEffect, useMemo, useState } from 'react';
import { MDButton } from 'shared/ui/mui-design-components';
import { f } from 'shared/styles';
import Box from '@mui/material/Box';
import { ErrorBox } from 'shared/ui/containers';
import { CopyLinkBtn } from './copy-link-btn';
import { isEmpty, isNotEmpty } from 'shared/helpers/objects';
import { CompanyDashboardMember, AccessLevel, useCompany } from 'entities/company';
import { updateArrWithItemByField } from 'shared/helpers/arrays';
import { isNotEmail } from 'shared/lib/validators';
import { __devLog } from 'shared/lib/tests/__dev-log';



interface Props {
  selectedEmail       : string
  existingEmail       : CompanyDashboardMember | undefined
  selectedAccessLevel : AccessLevel
  onClose             : () => void
}

export const Actions: FC<Props> = memo(({ selectedEmail, selectedAccessLevel, existingEmail, onClose }) => {
  const {
    loading, errors, paramsCompany, paramsChangedCompany, setErrors, serviceUpdateCompany
  } = useCompany();
  const [startClose, setStartClose] = useState(false);

  const disabled = useMemo(() => isEmpty(paramsChangedCompany) // Чтобы засечь когда удалили email
    && (loading || isNotEmpty(errors) || isNotEmail(selectedEmail) || ! selectedEmail),
    [loading, errors, paramsChangedCompany, selectedEmail]);


  useEffect(() => {
    // Если нажали "Сохранить" и всё прошло хорошо
    if (startClose && ! loading) {
      __devLog('Closing');
      onClose();
    }
    if (startClose && (isNotEmpty(errors) || isNotEmpty(paramsChangedCompany))) {
      __devLog('Unclosing', errors);
      setStartClose(false);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startClose, loading, errors, paramsChangedCompany, onClose]);


  const handleSubmit = useCallback(() => {
    if (disabled) return __devLog('disabled!!!!'); // По идее этой ситуации не должно быть
    if (isNotEmail(selectedEmail)) return setErrors({ email: 'Некорректный email' });

    // Если пользователь уже есть в системе, то сохраняем его имеющиеся права
    const access = {
      ...existingEmail,
      e: selectedEmail,
      a: {
        ...existingEmail?.a,
        f: selectedAccessLevel // 'e'
      }
    } as CompanyDashboardMember;

    const dashboardMembers = updateArrWithItemByField(paramsCompany.dashboardMembers, 'e', access);

    serviceUpdateCompany({ id: paramsCompany.id, dashboardMembers });
    setStartClose(true);
  }, [
    selectedEmail, selectedAccessLevel, existingEmail, paramsCompany, disabled,
    serviceUpdateCompany, setStartClose, setErrors
  ]);


  return (
    <Box sx={{ ...f('c'), width: '100%', my: 2 }}>
      <ErrorBox
        field  = 'general'
        errors = {errors}
        sx     = {{ root: { mb: 2 } }}
      />
      <Box sx={{ ...f('-c-sb'), width: '100%' }}>
        <CopyLinkBtn />

        <MDButton
          loading  = {loading}
          disabled = {disabled}
          color    = {loading || isNotEmpty(errors) ? 'text' : 'primary'}
          variant  = 'outlined'
          children = 'Сохранить'
          onClick  = {handleSubmit}
        />
      </Box>
    </Box>
  )
});
