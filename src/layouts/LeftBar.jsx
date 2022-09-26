import { Navigation } from '@shopify/polaris'
import { useLocation } from 'react-router-dom'

export const LeftBar = () => {
  const { pathname } = useLocation()

  // 左边主菜单
  const left_menu = []
  // 左边下方菜单
  const bottom_menu = []

  return (
    <Navigation location={pathname}>
      <Navigation.Section fill items={left_menu} />
      <Navigation.Section items={bottom_menu} />
    </Navigation>
  )
}
