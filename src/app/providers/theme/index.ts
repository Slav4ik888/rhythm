export { UIConfiguratorProvider } from './ui/ui-configurator-provider'
export { useUIConfiguratorController } from './model/lib/use-ui-configurator-controller'
export {
  setIsOpenConfigurator, setMode, setSidebarMini, setIsSidebar, setSidebarColor, UIDispatch
 } from './model/lib/reducer'
export {
  CustomTheme, ColoredShadowsName, UIConfiguratorProviderState, ColorName, GradientColorName, GreyColor,
  Offset, Radius, RadiusName, Shadows, ColorsConfig, Borders, MUIColors
} from './model/types'
export { useTheme } from './model/lib/use-theme'
export { isSystemDarkMode } from './model/utils'
