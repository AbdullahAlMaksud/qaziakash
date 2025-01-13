import { LoginForm } from "@/components/login-form";

export default function LoginPage() {
  return (
    <section className="">
      <div className="bg-deepblue -mt-16 min-w-full min-h-16"></div>
      <div className="flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:p-10">
        <div className="w-full max-w-sm md:max-w-3xl">
          <LoginForm />
        </div>
      </div>
    </section>
  );
}
