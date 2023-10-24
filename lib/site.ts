type SiteConfig = {
    name: string
    description: string
    url: string
    ogImage: string
    links: {
      twitter: string
      telegram: string
    }
  }
  

export const siteConfig: SiteConfig = {
  name: "Metadapp",
  description:"Metadapp is a platform that provides on- chain traders, serious investors & Degens with powerful tools to analyze and spot and trade non-obvious opportunities in the crypto markets with improved efficiency and accuracy.",
  url: "https://metadapp.com/",
  ogImage: "https://metadapp.com/img/mlogo-beta.png",
  links: {
    twitter: "https://twitter.com/MetadappHQ",
    telegram: "https://twitter.com/MetadappHQ",
  },
}