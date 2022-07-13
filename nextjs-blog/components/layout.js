import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const name = 'Melissa Alasalmi'
export const siteTitle = 'Next.js Sample Website'

export default function Layout({ children, home }) {
  return (
    <div className='max-w-[36rem] py-0 px-4 mt-12 mx-auto mb-24'>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className='flex flex-col items-center'>
        {home ? (
          <>
            <Image
              priority
              src="/images/profile.png"
              className='rounded-full'
              height={144}
              width={144}
              alt={name}
            />
            <h1 className="mx-0 my-4 text-3xl font-extrabold leading-5 tracking-tight">{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/profile.png"
                  className='rounded-full'
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className="mx-0 my-4 text-2xl leading-5">
              <Link href="/">
                <a className='text-inherit'>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div>
          <Link href="/">
            <a className='my-0 mt-12 mb-0'>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}