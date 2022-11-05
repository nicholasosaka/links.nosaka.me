import Head from 'next/head'
import groq from 'groq'
import sanity from './lib/sanity'
import Link from './components/LinkModule'


const Index = (props: any) => {
  const links = props.links
  return (
    <>
      <Head>
        <title>links.nosaka.me</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='flex flex-col h-screen justify-between text-jet'>
        <header className='pt-3 my-5 mb-10 text-center'>
          <h1 className='text-3xl uppercase font-extrabold'>links.nosaka.me</h1>
          <p className='text-xl uppercase font-bold tracking-widest'>A Link Repository</p>
        </header>
        <main className=''>
          <ul>
            {links.map((link: {url: string, name: string, blurb: any, _id: any}) => (
              <li key={link._id}>
                <Link name={link.name} url={link.url} blurb={link.blurb}/>
              </li>
            ))}
          </ul>
        </main>

        <footer className='my-10 mt-48'>
          <p className='text-center tracking-wider font-light uppercase text-sm'>Made with Next.js and Tailwind CSS, hosted on Vercel</p>
        </footer>
      </div>
    </>
  )
}

const query = process.env.NODE_ENV === 'development' ? 
  groq`*[_type == "link"] | order(publishedAt desc)` : //development
  groq`*[_type == "link" && dateTime(publishedAt) < dateTime(now())] | order(publishedAt desc)` //production

export async function getStaticProps() {
  const links = await sanity.fetch(query)
  console.log(links)
  return {
    props: {
      links: links
    },
    revalidate: 60 * 60 //revalidate every hour at most
  } 
}

export default Index