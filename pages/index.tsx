import Head from 'next/head'
import Image from 'next/image'
import groq from 'groq'
import sanity from './lib/sanity'


const Index = (props: any) => {
  const links = props.links
  return (
    <div>
      <Head>
        <title>links.nosaka.me</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <ul>
        {links.map((link: {url: string, name: string, blurb: any, _id: any}) => (
          <li key={link._id}>
            <p>{link.name}</p>
            <p>{link.url}</p>
          </li>
        ))}

        </ul>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
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