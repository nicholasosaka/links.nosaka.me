import BlockContent from '@sanity/block-content-to-react'
import sanity from '../lib/sanity'

type LinkData = {
    name: string,
    url: string,
    blurb: any,
}

const Link = (props: LinkData) => {
    const {name, url, blurb} = props
    return (
        <div className='transition ease-in-out duration-500 hover:scale-110 my-3 mx-auto border-4 rounded-xl py-3 border-jet hover:border-chestnut text-jet hover:text-chestnut w-11/12 sm:w-5/6 md:w-3/5 lg:w-1/3'>
            <a href={url} target='_blank' rel="noreferrer">
                <h1 className='text-xl font-bold tracking-tight text-center'>{name}</h1>
            </a>
        </div>
    )
}

export default Link