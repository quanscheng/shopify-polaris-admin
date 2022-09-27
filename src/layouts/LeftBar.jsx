import { Navigation } from '@shopify/polaris'
import { HomeMinor, SettingsMajor } from '@shopify/polaris-icons'
import { useLocation } from 'react-router-dom'

export const LeftBar = () => {
  const { pathname } = useLocation()

  // 左边主菜单
  const left_menu = [
    {
      url: '/',
      label: 'Home',
      icon: HomeMinor,
      exactMatch: true,
    },
  ]
  // 左边下方菜单
  const bottom_menu = [
    {
      url: '/settings',
      label: 'Settings',
      icon: SettingsMajor,
      exactMatch: true,
    },
  ]

  return (
    <Navigation location={pathname}>
      <Navigation.Section fill items={left_menu} />
      <Navigation.Section items={bottom_menu} />
    </Navigation>
  )
}
