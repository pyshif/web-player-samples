import {useEffect, useState} from 'react'
import Head from 'next/head'
import {PremiumPlayer} from '@blendvision/player/react'
import styles from '@/styles/Home.module.css'
import getStreamManifestUrls from '../getStreamManifestUrls'

const Home = () => {
  const [source, setSource] = useState('')

  useEffect(() => {
    getStreamManifestUrls({
      apiKey: '<api-key>',
      orgId: '<org-id>',
      resourceType: '<resource-type>',
      resourceId: '<resource-id>',
    }).then(setSource)
  }, [])

  return (
    <>
      <Head>
        <title>BV One Player - Playback API Sample App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
        {source ? (
          <PremiumPlayer
            source={[
              {type: 'dash', src: source.dash},
              {type: 'hls', src: source.hls},
            ]}
          />
        ) : (
          <div>
            Please replace apiKey, origId, resourceType and resourceId in
            index.jsx
          </div>
        )}
        <pre>{JSON.stringify(source, null, 2)}</pre>
      </main>
    </>
  )
}

export default Home
