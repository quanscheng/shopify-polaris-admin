import { AppProvider } from '@shopify/polaris'
import '@shopify/polaris/build/esm/styles.css'
import en from '@shopify/polaris/locales/en.json'; // DropZone里面的文字依赖
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import './App.css'
import Main from './layouts/Main'
import { Redirect } from './pages/Redirect/Redirect'

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <AppProvider i18n={en} linkComponent={polaris_link}>
          <Routes>
            <Route path="/redirect" element={<Redirect />} />
            <Route path="/*" element={<Main />} />
          </Routes>
        </AppProvider>
      </RecoilRoot>
    </BrowserRouter>
  )
}

function polaris_link({ children, url = '', external, ref, ...rest }) {
  const IS_EXTERNAL_LINK_REGEX = /^(?:[a-z][a-z\d+.-]*:|\/\/)/

  if (external || IS_EXTERNAL_LINK_REGEX.test(url)) {
    rest.target = '_blank'
    rest.rel = 'noopener noreferrer'
    return (
      <a href={url} {...rest}>
        {children}
      </a>
    )
  }

  return (
    <Link to={url} {...rest}>
      {children}
    </Link>
  )
}

export default App
