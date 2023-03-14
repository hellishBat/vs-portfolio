// Footer
import Container from '@/components/Container'
import { StyledFooter } from './styles'
import { IconHeart } from '@/assets'

const Footer = () => {
  return (
    <StyledFooter
      css={`
        text-align: center;
      `}
    >
      <Container>
        <span>Coded with</span>
        <IconHeart />
        <span>by Valentine Samoylov</span>
      </Container>
    </StyledFooter>
  )
}

export default Footer
