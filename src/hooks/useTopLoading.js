import { Loading } from '@shopify/polaris'
import { useToggle } from 'ahooks'
import { useMemo } from 'react'

export const useTopLoading = () => {
  const [
    isTopLoading,
    { setLeft: hiddenTopLoading, setRight: showTopLoading },
  ] = useToggle()

  const TopLoadingJSX = useMemo(
    () => (isTopLoading ? <Loading /> : null),
    [isTopLoading]
  )

  return {
    // isTopLoading,
    TopLoadingJSX,
    hiddenTopLoading,
    showTopLoading,
  }
}
