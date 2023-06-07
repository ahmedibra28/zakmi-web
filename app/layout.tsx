import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Zakmi Technologies',
  description:
    'Zakmi Technologies is a software technology company that powers apps similar to Kinyozi app which is a barbershop service app. We specialize in software development and mobile app development.',
  keywords:
    'Zakmi Technologies, software technology company, mobile app development, software development, Kinyozi app, barbershop service app',
  author: 'Abdullahi Adan Haji',
  'opengraph-image': 'https://zakmi.tech/logo.jpg',
  'opengraph-url': 'https://zakmi.tech',
  'opengraph-type': 'website',
  'twitter-card': 'summary_large_image',
  'twitter-description':
    'Zakmi Technologies is a software technology company that powers apps similar to Kinyozi app which is a barbershop service app. We specialize in software development and mobile app development.',
  'twitter-title': 'Zakmi Technologies',
  'twitter-image': 'https://zakmi.tech/logo.jpg',
  'twitter-creator': '@yourusername',
  'opengraph-site_name': 'Zakmi Technologies',
  'fb-app-id': 'your_app_id',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='/logo.png' sizes='any' />
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta
          name='description'
          content='Zakmi Technologies is a software technology company that powers apps similar to Kinyozi app which is a barbershop service app. We specialize in software development and mobile app development.'
        />
        <meta
          name='keywords'
          content='Zakmi Technologies, software technology company, mobile app development, software development, Kinyozi app, barbershop service app'
        />
        <meta name='author' content='Abdullahi Adan Haji' />
        <meta property='og:title' content='Zakmi Technologies' />
        <meta
          property='og:description'
          content='Zakmi Technologies is a software technology company that powers apps similar to Kinyozi app which is a barbershop service app. We specialize in software development and mobile app development.'
        />
        <meta property='og:image' content='https://zakmi.tech/logo.png' />
        <meta property='og:url' content='https://zakmi.tech' />
        <meta property='og:type' content='website' />
        <meta name='twitter:title' content='Zakmi Technologies' />
        <meta
          name='twitter:description'
          content='Zakmi Technologies is a software technology company that powers apps similar to Kinyozi app which is a barbershop service app. We specialize in software development and mobile app development.'
        />
        <meta name='twitter:image' content='https://zakmi.tech/logo.png' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:creator' content='@zakmitechnologies' />
        <meta property='og:site_name' content='Zakmi Technologies' />
        <meta property='fb:app_id' content='zakmitechnologies' />
      </head>

      <body className={inter.className}>{children}</body>
    </html>
  )
}
