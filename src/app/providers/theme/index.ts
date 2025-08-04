export { UIConfiguratorProvider } from './ui/ui-configurator-provider'
export { useUIConfiguratorController } from './model/hooks/use-ui-configurator-controller'
export {
  setIsOpenConfigurator, setMode, setSidebarMini, setIsSidebar, setSidebarColor, setLeftOffsetScrollButton
} from './model/ui-configurator-reducer/reducer'
export type { UIDispatch } from './model/ui-configurator-reducer/reducer'
export type {
  CustomTheme, ColoredShadowsName, UIConfiguratorProviderState, ColorName, GradientColorName, GreyColor,
  Offset, Radius, RadiusName, Shadows, ColorsConfig, Borders, MUIColors
} from './types'
export { useTheme } from './model/hooks/use-theme'
export { isSystemDarkMode, isDarkMode } from './utils'
