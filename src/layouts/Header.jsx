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
          content: 'shopify app',
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
          name="Transon"
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
