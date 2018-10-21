import { reloadRoutes } from 'react-static/node'
import jdown from 'jdown'
import chokidar from 'chokidar'

chokidar.watch('content').on('all', () => reloadRoutes())

export default {
  getSiteData: () => ({
    title: 'React Static',
  }),
  getRoutes: async () => {
    const { about, vitae, research, publications, teaching } = await jdown('content')
    return [
      {
        path: '/',
        component: 'src/containers/Home',
        getData: () => (
         { about, vitae, research, publications, teaching}
        ),
      },
      {
        is404: true,
        component: 'src/containers/404',
      },
    ]
  },
}
