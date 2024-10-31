export { UIConfiguratorProvider } from './ui/ui-configurator-provider'
export { useUIConfiguratorController } from './model/lib/use-ui-configurator-controller'
export {
  setIsOpenConfigurator, setMode, setSidebarMini, setIsSidebar, setSidebarColor
 } from './model/lib/reducer'
export {
  CustomTheme, ColoredShadowsName, UIConfiguratorProviderState, ColorName, GradientColorName,
  Offset, Radius, RadiusName, GreyColor, Shadows, ColorsConfig, Borders, SxCard
} from './model/types'
export {
  getBoxShadows, boxShadow, rgba, pxToRem, getTypography, linearGradient
 } from './model/themes/functions'
export { useTheme } from './model/lib/use-theme'
