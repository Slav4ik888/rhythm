import { FC, memo, useEffect, SyntheticEvent, useMemo, useCallback } from 'react';
import { ViewItem } from 'entities/dashboard-view';
import Tab from '@mui/material/Tab';
import { ViewItemStylesConfigurator } from '../styles';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { ViewItemConfiguratorSettings } from '../settings';
import { ViewItemControlConfigurator } from '../control';
import { CustomTheme, useTheme } from 'app/providers/theme';



const useStyles = (theme: CustomTheme) => ({
  tabList: {
    borderBottom: 1,
    borderColor: 'divider',
    mt: 2,
  },
  tabPanel : {
    overflowY : 'auto',
    p         : 0,
  },
  tab: {
    // '&.Mui-selected': { color: 'red' },
    '&:not(.Mui-selected)': {
      color: theme.palette.configurator.tabs.notSelected
    },
  }
})

// Типы у которых есть вкладка settings
const settingTypes = ['box', 'chart', 'chip', 'growthIcon', 'digitIndicator'];


interface Props {
  value        : string
  selectedItem : ViewItem
  onSetValue   : (value: string) => void
}

export const ViewItemConfiguratorTabs: FC<Props> = memo(({ value, selectedItem, onSetValue }) => {
  const sx = useStyles(useTheme());

  const isSettings = useMemo(() => settingTypes.includes(selectedItem?.type), [selectedItem]);


  useEffect(() => {
    if (value === '3' && ! isSettings) onSetValue('1');
  }, [value, isSettings, onSetValue]);

  const handleChange = useCallback((event: SyntheticEvent, newValue: string) => onSetValue(newValue),
    [onSetValue]);


  return (
    <TabContext value={value}>
      <TabList
        aria-label = 'lab API tabs example'
        sx         = {sx.tabList}
        onChange   = {handleChange}
      >
        <Tab
          label = 'Control'
          value = '1'
          sx    = {sx.tab}
        />
        <Tab
          label = 'Styles'
          value = '2'
          sx    = {sx.tab}
        />
        <Tab
          label = {isSettings ? 'Settings' : null}
          value = '3'
          sx    = {sx.tab}
        />
      </TabList>

      <TabPanel value='1' keepMounted sx={sx.tabPanel}>
        <ViewItemControlConfigurator />
      </TabPanel>
      <TabPanel value='2' keepMounted sx={sx.tabPanel}>
        <ViewItemStylesConfigurator />
      </TabPanel>
      <TabPanel value='3' keepMounted sx={sx.tabPanel}>
        <ViewItemConfiguratorSettings selectedItem={selectedItem} />
      </TabPanel>
    </TabContext>
  )
});
