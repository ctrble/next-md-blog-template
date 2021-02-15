
import deploymentBadgeHandler from 'deployment-badge'

const handler = async (req, res) => {
  const deploymentsUrl = 'https://api.github.com/repos/ctrble/next-md-blog-template/deployments';
  await deploymentBadgeHandler(req, res, { deploymentsUrl, namedLogo: 'vercel' })
}

export default handler;
