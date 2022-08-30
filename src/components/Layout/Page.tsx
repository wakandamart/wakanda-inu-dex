import styled from 'styled-components'
import { useTranslation } from 'contexts/Localization'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { DEFAULT_META, getCustomMeta } from 'config/constants/meta'
import Container from './Container'

const StyledPage = styled(Container)`
  min-height: calc(100vh - 64px);
  padding-top: 16px;
  padding-bottom: 16px;
  // background: ${({ theme }) => theme.colors.gradients.bubblegum};

  ${({ theme }) => theme.mediaQueries.sm} {
    padding-top: 24px;
    padding-bottom: 24px;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    padding-top: 32px;
    padding-bottom: 32px;
  }
`

// const StyledPage = styled.div<{ $removePadding: boolean; $noMinHeight }>`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   width: 100%;
//   padding: ${({ $removePadding }) => ($removePadding ? '0' : '16px')};
//   padding-bottom: 0;
//   min-height: ${({ $noMinHeight }) => ($noMinHeight ? 'initial' : 'calc(100vh - 64px)')};
//   background: ${({ theme }) => theme.colors.gradients.bubblegum};
//   ${({ theme }) => theme.mediaQueries.xs} {
//     background-size: auto;
//   }
//   ${({ theme }) => theme.mediaQueries.sm} {
//     padding: ${({ $removePadding }) => ($removePadding ? '0' : '24px')};
//     padding-bottom: 0;
//   }
//   ${({ theme }) => theme.mediaQueries.lg} {
//     padding: ${({ $removePadding }) => ($removePadding ? '0' : '32px')};
//     padding-bottom: 0;
//     min-height: ${({ $noMinHeight }) => ($noMinHeight ? 'initial' : 'calc(100vh - 100px)')};
//   }
// `

export const PageMeta: React.FC<{ symbol?: string }> = ({ symbol }) => {
  const {
    t,
    currentLanguage: { locale },
  } = useTranslation()
  const { pathname } = useRouter()
  const pageMeta = getCustomMeta(pathname, t, locale) || {}
  const { title, description } = { ...DEFAULT_META, ...pageMeta }
  let pageTitle = title
  if (symbol) {
    pageTitle = [symbol, title].join(' - ')
  }

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
    </Head>
  )
}

interface PageProps extends React.HTMLAttributes<HTMLDivElement> {
  symbol?: string
}

const Page: React.FC<PageProps> = ({ children, symbol, ...props }) => {
  return (
    <>
      <PageMeta symbol={symbol} />
      <StyledPage {...props}>{children}</StyledPage>
    </>
  )
}

export default Page
