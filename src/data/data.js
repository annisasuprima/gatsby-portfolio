module.exports = {
  SiteTitle: 'AnnisaSuprima',
  Sitelogo: '#',
  SiteLogoText: 'AS',
  SiteAuthor: 'Annisa Suprima',
  SiteDescription: 'Web Developer',
  defaultDescription: 'Software engineer!', 
  githubApiQuery: `query ($number_of_repos: Int!) {
    viewer {
      name
      avatarUrl
      isHireable
      resourcePath
      repositories(last: $number_of_repos, privacy: PUBLIC, orderBy: { field: STARGAZERS, direction:ASC } ) {
        nodes {
          name
          description
          homepageUrl
          forkCount
          createdAt
          updatedAt
          resourcePath
          languages(last: 1, orderBy: { field: SIZE, direction:ASC } ) {
            edges {
              node {
                name
                color
              }
            }
          }
          licenseInfo {
            name
          }
          stargazers {
            totalCount
          }
        }
      }
    }
  }`,
  githubApiVariables: {
    number_of_repos: 12,
  }, 
  SiteSocialLinks: {
    instagram: 'https://www.instagram.com/annisasuprima/',
    github: 'https://github.com/annisasuprima/',
    linkedin: 'https://www.linkedin.com/in/annisasuprima',
  },
  SiteAddress: {
    city: 'Solok',
    region: 'Sumatera Barat',
    country: 'Indonesia',
    zipCode: '27361',
  },
  SiteContact: {
    email: 'annisa.suprima@gmail.com',
    phone: '082285265855',
  },
  SiteCopyright: '2023',
};
