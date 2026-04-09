import { TextInput } from '@/components/TextInput'

export default function Register() {
  return (
    <main className="flex items-center justify-center">
      <div className="my-10">
        <h1>Register</h1>
        <TextInput.Root>
          <TextInput.Input placeholder="Email" />
        </TextInput.Root>
      </div>
    </main>
  )
}
