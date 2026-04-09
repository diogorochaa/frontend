'use client'

import { Button } from '@/components/Button'
import { SignInIcon } from '@/components/Icons'
import { useRouter } from 'next/navigation'

export const Actions = () => {
  const router = useRouter()
  const handleRegister = () => {
    router.push('/register')
  }

  return (
    <div className="flex items-center gap-2">
      <Button.Root onClick={handleRegister}>
        <Button.Content text="Entrar" />
        <Button.Icon icon={SignInIcon} />
      </Button.Root>
    </div>
  )
}
