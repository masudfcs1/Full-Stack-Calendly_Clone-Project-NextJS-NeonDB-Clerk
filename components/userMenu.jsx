import { UserButton } from '@clerk/nextjs'
import React from 'react'

const UserMenu = () => {
  return (
    <UserButton appearance={{
        elements:{
            avatarBox: "w-10 h-10"
        }
    }}>userMenu</UserButton>
  )
}

export default UserMenu