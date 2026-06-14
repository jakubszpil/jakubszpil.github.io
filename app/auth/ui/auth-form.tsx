import type { ReactNode } from "react";
import { Form, useLocation } from "react-router";

import { Input } from "../../shared/ui/input";
import { Field, FieldGroup, FieldLabel } from "../../shared/ui/field";
import { Card, CardContent, CardHeader } from "../../shared/ui/card";
import { Button } from "../../shared/ui/button";
import { Separator } from "../../shared/ui/separator";
import { IconBrandGithub } from "../../shared/ui/icons";
import { cn } from "../../shared/utils/helpers";
import { LinkWithPrefetch } from "../../shared/ui/link-with-prefetch";
import { ChevronLeftIcon } from "lucide-react";

export interface AuthFormProps {
  children: ReactNode;
}

export function AuthForm({ children }: AuthFormProps) {
  const { pathname } = useLocation();

  return (
    <div className="min-h-dvh bg-accent w-full flex justify-center sm:items-center">
      <Card className="w-full rounded-none sm:rounded-xl sm:max-w-sm">
        <CardHeader>
          <div className="grid grid-flow-row gap-4">
            <div className="-ml-3">
              <Button asChild variant="link">
                <LinkWithPrefetch to="/">
                  <ChevronLeftIcon />
                  Powrót do strony głównej
                </LinkWithPrefetch>
              </Button>
            </div>
            <Button>
              <IconBrandGithub /> Kontynuuj przez konto GitHub
            </Button>
            {/* <Button>
              <IconBrandGoogle />
              Kontynuuj przez konto Google
            </Button> */}
          </div>
          <div className="relative py-4">
            <Separator />
            <div className="w-full absolute flex inset-y-0 items-center justify-center">
              <span className="bg-card px-6 uppercase text-sm">Lub</span>
            </div>
          </div>

          <div className="grid grid-cols-2">
            <div className="flex flex-col gap-2">
              <Button variant="link" asChild>
                <LinkWithPrefetch replace to="/auth">
                  Zaloguj się
                </LinkWithPrefetch>
              </Button>
              <Separator
                className={cn({
                  "bg-foreground": pathname === "/auth",
                })}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Button variant="link" asChild>
                <LinkWithPrefetch replace to="/auth/signup">
                  Załóż konto
                </LinkWithPrefetch>
              </Button>
              <Separator
                className={cn({
                  "bg-foreground": pathname === "/auth/signup",
                })}
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Form method="post">
            <FieldGroup className="gap-4">
              <Field>
                <FieldLabel htmlFor="email">E-mail</FieldLabel>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="example@test.com"
                />
              </Field>

              <Field>
                <FieldLabel htmlFor="password">Hasło</FieldLabel>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••••••••••••"
                />
              </Field>
            </FieldGroup>
            {children}
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
