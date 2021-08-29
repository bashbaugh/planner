import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import Button from 'src/components/ui/Button/Button'
import Heading from 'src/components/ui/Heading/Heading'

const LoginPage = () => {
  return (
    <>
      <MetaTags
        title="Login"
        description="Login to %AppTitle"
        /* you should un-comment description and add a unique description, 155 characters or less
        You can look at this documentation for best practices : https://developers.google.com/search/docs/advanced/appearance/good-titles-snippets */
      />
      <div className="w-full flex flex-col gap-4 items-center">
        <Heading>Sign In</Heading>
        <Button>Sign In</Button>
      </div>
    </>
  )
}

export default LoginPage
