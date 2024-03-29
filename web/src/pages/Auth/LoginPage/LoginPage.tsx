import { routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import Button from 'src/components/ui/Button/Button'
import Heading from 'src/components/ui/Heading/Heading'
import InputField from 'src/components/ui/InputField/InputField'
import Link from 'src/components/ui/Link/Link'
import { Form, EmailField, PasswordField } from '@redwoodjs/forms'

const LoginPage = () => {
  const onSubmit = (data) => {
    alert(data.email)
  }

  return (
    <>
      <MetaTags title="Login" description="Login to %AppTitle" />
      <Form
        onSubmit={onSubmit}
        className="w-full flex flex-col gap-6 items-center"
      >
        <Heading>Sign In</Heading>
        <InputField
          component={EmailField}
          name="email"
          placeholder="Your email"
          required
        />
        <InputField
          component={PasswordField}
          name="password"
          placeholder="Password"
          required
        />
        <Button>Sign In</Button>
        <Link to={routes.signup()} className="opacity-70 text-sm">
          Don&apos;t have an account? Create one for free!
        </Link>
      </Form>
    </>
  )
}

export default LoginPage
