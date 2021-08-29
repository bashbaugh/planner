import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const TodayPage = () => {
  return (
    <>
      <MetaTags
        title="Today"
        // description="Today description"
        /* you should un-comment description and add a unique description, 155 characters or less
        You can look at this documentation for best practices : https://developers.google.com/search/docs/advanced/appearance/good-titles-snippets */
      />
      <h1>TodayPage</h1>
      <p>
        Find me in <code>./web/src/pages/TodayPage/TodayPage.tsx</code>
      </p>
      <p>
        My default route is named <code>today</code>, link to me with `
        <Link to={routes.today()}>Today</Link>`
      </p>
    </>
  )
}

export default TodayPage
