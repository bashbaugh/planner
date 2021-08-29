import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const PlanPage = () => {
  return (
    <>
      <MetaTags
        title="Plan"
        // description="Plan description"
        /* you should un-comment description and add a unique description, 155 characters or less
        You can look at this documentation for best practices : https://developers.google.com/search/docs/advanced/appearance/good-titles-snippets */
      />
      <h1>PlanPage</h1>
      <p>
        Find me in <code>./web/src/pages/PlanPage/PlanPage.tsx</code>
      </p>
      <p>
        My default route is named <code>plan</code>, link to me with `
        <Link to={routes.plan()}>Plan</Link>`
      </p>
    </>
  )
}

export default PlanPage
