import { Banner } from '@shopify/polaris'
import { useToggle } from 'ahooks'
import { isEmpty } from 'lodash'
import { useCallback, useState } from 'react'

export const useBanner = ({
  status = 'success', // success,warning,critical
}) => {
  const [titleString, setTitleString] = useState('')
  const [contentString, setContentString] = useState('')

  const [active, { toggle: toggleBanner, setRight, setLeft: hiddenBanner }] =
    useToggle()

  const showBanner = useCallback(
    (o) => {
      if (isEmpty(o)) {
        setRight()
      } else {
        o?.title && setTitleString(o?.title)
        o?.content && setContentString(o?.content)
        setRight()
      }
    },
    [setRight]
  )

  const BannerJSX = active ? (
    <>
      <Banner title={titleString} status={status} onDismiss={toggleBanner}>
        {contentString && <p>{contentString}</p>}
      </Banner>
      <br />
    </>
  ) : null

  return {
    BannerJSX,
    showBanner,
    hiddenBanner,
  }
}
