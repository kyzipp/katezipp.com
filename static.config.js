import { reloadRoutes } from 'react-static/node'
import React, { Component } from 'react'
import jdown from 'jdown'
import chokidar from 'chokidar'

chokidar.watch('content').on('all', () => reloadRoutes())

export default {
  siteRoot: 'http://katezipp.com',
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
  Document: ({ Html, Head, Body, children, siteData, renderMeta }) => (
    <Html lang="en-US">
      <Head>
        <meta charSet="UTF-8" />
        <title>Dr. Katherine Y. Zipp</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body className="has-navbar-fixed-top">{children}</Body>
    </Html>
  )
}
