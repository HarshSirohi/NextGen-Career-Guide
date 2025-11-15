import { SignedIn, SignedOut, Button } from '@clerk/react'
import React from 'react'

const Header = () => {
  return (
    <div>
      <SignedOut>
        <Button>Sign In</Button>
      </SignedOut>
      <SignedIn>
        <Button>Sign Out</Button>
      </SignedIn>
    </div>
  )
}

export default Header