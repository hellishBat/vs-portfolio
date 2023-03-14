// Home
import ContextProviders from '@/context/ContextProviders'
import Layout from '@/layouts/Layout'
import Container from '@/components/Container'
import { LogoVite, LogoReact, LogoTS, LogoStyledComp, LogoPolished } from '@/assets'

const Home = () => {
  return (
    <ContextProviders>
      <Layout>
        <Container>
          <div>
            <h1>
              <span>
                <LogoVite /> Vite Boilerplate
              </span>
            </h1>
            <h2>
              <span>
                <LogoReact /> React <LogoTS /> TypeScript +<LogoStyledComp /> Styled Components +{' '}
                <LogoPolished /> Polished
              </span>
            </h2>
          </div>
        </Container>
      </Layout>
    </ContextProviders>
  )
}

export default Home
