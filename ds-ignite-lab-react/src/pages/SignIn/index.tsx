import { Envelope, Lock } from "phosphor-react";
import { FormEvent, useState } from "react";
import axios from "axios";
import { Button } from "../../components/Button";
import { Checkbox } from "../../components/Checkbox";
import { Heading } from "../../components/Heading";
import { Logo } from "../../components/Logo";
import { Text } from "../../components/Text";
import {
  TextInputIcon,
  TextInputInput,
  TextInputRoot,
} from "../../components/TextInput";

export function SignIn() {
  const [isUserSignedIn, setIsUserSignedIn] = useState(false);

  async function handleSignIn(event: FormEvent) {
    event.preventDefault();

    await axios.post("/sessions", {
      email: "diogo@gmail.com.br",
      password: "12345678",
    });

    setIsUserSignedIn(true);
  }

  return (
    <div className="w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100">
      <header className="flex flex-col items-center">
        <Logo />

        <Heading size="lg" className="mt-4">
          Ignite Lab
        </Heading>

        <Text size="lg" className="text-gray-400 mt-1">
          Faça login e comece a usar!
        </Text>
      </header>
      <form
        onSubmit={handleSignIn}
        className="flex flex-col gap-4 items-stretch w-full max-w-sm mt-10"
      >
        {isUserSignedIn && (
          <Text size="sm" className="text-green-500">
            Usuário logado com sucesso!
          </Text>
        )}
        <label htmlFor="email" className="flex flex-col gap-3">
          <Text className="font-semibold">Endereço de e-mail</Text>
          <TextInputRoot>
            <TextInputIcon>
              <Envelope />
            </TextInputIcon>
            <TextInputInput
              id="email"
              type="email"
              placeholder="Digite seu e-mail"
            />
          </TextInputRoot>
        </label>
        <label htmlFor="email" className="flex flex-col gap-3">
          <Text className="font-semibold">Sua senha</Text>
          <TextInputRoot>
            <TextInputIcon>
              <Lock />
            </TextInputIcon>
            <TextInputInput
              id="password"
              type="password"
              placeholder="Digite sua senha"
            />
          </TextInputRoot>
        </label>

        <label htmlFor="remember" className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Text size="sm" className="text-gray-200">
            Lembrar de mim por 30 dias
          </Text>
        </label>

        <Button type="submit" className="mt-4 ">
          Entrar na plataforma
        </Button>
      </form>

      <footer className="flex flex-col items-center  gap-4 mt-8">
        <Text asChild size="sm">
          <a href="" className="text-gray-400 underline hover:text-gray-200">
            Esqueceu sua senha?
          </a>
        </Text>
        <Text asChild size="sm">
          <a href="" className="text-gray-400 underline hover:text-gray-200">
            Não tem uma conta? Cadastre-se
          </a>
        </Text>
      </footer>
    </div>
  );
}
