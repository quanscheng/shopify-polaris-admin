import { Spinner, Stack, TextStyle } from '@shopify/polaris'
import styled from 'styled-components'

export const Redirect = () => {
  return (
    <Center>
      <Stack>
        <Spinner size="small" />
        <TextStyle variation="strong"> redirecting... </TextStyle>
      </Stack>
    </Center>
  )
}

const Center = styled.div`
  height: 100vh;
  display: grid;
  place-items: center;
`
