import { TopBar } from '@shopify/polaris'
import { CustomersMajor } from '@shopify/polaris-icons'
import { useToggle } from 'ahooks'
import { useCallback } from 'react'

export const Header = () => {
  const [userMenuActive, { toggle: toggleUserMenuActive }] = useToggle()
  const handleLogout = useCallback(() => {}, [])

  // header avatar menu actions
  const userMenuActions = [
    {
      items: [
        {
          content: 'vite3 polaris',
          icon: CustomersMajor,
          onAction: handleLogout,
        },
      ],
    },
  ]

  return (
    <TopBar
      showNavigationToggle
      userMenu={
        <TopBar.UserMenu
          actions={userMenuActions}
          name="vite3"
          // detail={storeName}
          // initials={'S'}
          customer
          open={userMenuActive}
          onToggle={toggleUserMenuActive}
        />
      }
    />
  )
}
