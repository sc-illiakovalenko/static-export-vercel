1. Get rid of Internationalized Routing (i18n)
2. define getStaticPaths
3. remove src/api/**/* pages
4. remove `rewrites` in next.config.js
6. replace in `Layout.tsx`:
`<img src={`${publicUrl}/sc_logo.svg`} alt="Sitecore" />`
---->
`<img src={`/sc_logo.svg`} alt="Sitecore" />`

`<link rel="icon" href={`${publicUrl}/favicon.ico`} />`
---->
`<link rel="icon" href={`/favicon.ico`} />`
7. Do not use `locale` property when use Link from `next/link`. Use url which includes locale. You should not include default locale in url