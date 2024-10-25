'use client'
import { UserButton } from '@clerk/nextjs'
import { MenuIcon } from 'lucide-react'

const UserMenu = () => {
  return (
    <UserButton appearance={{
        elements:{
            avatarBox: "w-10 h-10"
        }
    }}>

      <UserButton.MenuItems>
        <UserButton.Link
        label='My Events'
        labelIcon={<MenuIcon size={18}/> }
        href='/events'
        />
        <UserButton.Action label='manageAccount' />
      </UserButton.MenuItems>
    </UserButton>
  )
}

export default UserMenu