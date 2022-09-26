import { routes } from '@/configs/routes'
import { Frame } from '@shopify/polaris'
import { useRoutes } from 'react-router-dom'
import logo from '../assets/img/logo.svg'
import { Header } from './Header'
import { LeftBar } from './LeftBar'

const Main = () => {
  const elements = useRoutes(routes)

  const Logo = {
    width: 120,
    topBarSource: logo,
    url: '/',
    accessibilityLabel: 'PMP',
    contextualSaveBarSource: logo,
  }

  return (
    <Frame logo={Logo} navigation={<LeftBar />} topBar={<Header />}>
      {elements}
    </Frame>
  )
}

export default Main
