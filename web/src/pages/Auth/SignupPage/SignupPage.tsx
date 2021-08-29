import { routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import Button from 'src/components/ui/Button/Button'
import Heading from 'src/components/ui/Heading/Heading'
import InputField from 'src/components/ui/InputField/InputField'
import Link from 'src/components/ui/Link/Link'
import { Form, EmailField, PasswordField } from '@redwoodjs/forms'

const SignupPage = () => {
  const onSubmit = (data) => {
    alert(data.email)
  }

  return (
    <>
      <MetaTags title="Sign Up" description="Sign up to %AppTitle" />
      <Form
        onSubmit={onSubmit}
        className="w-full flex flex-col gap-6 items-center"
      >
        <Heading>Sign Up</Heading>
        <p className="text-gray-600">Create a free account to access Planly.</p>
        <InputField name="name" placeholder="Your name" required />
        <InputField
          component={EmailField}
          name="email"
          placeholder="Email"
          required
        />
        <InputField
          component={PasswordField}
          name="password"
          placeholder="Password"
          required
        />
        <Button>Sign In</Button>
        <Link to={routes.login()} className="opacity-70 text-sm">
          If you already have an account, sign in
        </Link>
      </Form>
    </>
  )
}

export default SignupPage
