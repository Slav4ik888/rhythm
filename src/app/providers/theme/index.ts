export { UIConfiguratorProvider } from './ui/ui-configurator-provider'
export { useUIConfiguratorController } from './model/lib/use-ui-configurator-controller'
export { setIsOpenConfigurator, setMode, setSidenavMini, setIsSidenav } from './model/lib/reducer'
export {
  CustomTheme, ColoredShadowsName, UIConfiguratorProviderState, ColorName, GradientColorName,
  Offset, Radius, RadiusName, GreyColor, Shadows, ColorsConfig, Borders
} from './model/types'
export {
  getBoxShadows, boxShadow, rgba, pxToRem, getTypography, linearGradient
 } from './model/themes/functions'
export { useTheme } from './model/lib/use-theme'
