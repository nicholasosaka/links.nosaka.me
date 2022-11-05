import sanityClient from "@sanity/client"

export default sanityClient({
    projectId: "h6bcf1mv",
    dataset: "production",
    apiVersion: '2021-03-25',
    useCdn: false
})
