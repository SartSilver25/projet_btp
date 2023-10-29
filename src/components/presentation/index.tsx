'use client'

import { ReactNode } from 'react'
import { Stack, Container, Box, Flex, Text, Heading, SimpleGrid } from '@chakra-ui/react'

export default function StatsGridWithImage() {
  return (
    <Box bg={'gray.800'} position={'relative'}>
      <Flex
        flex={1}
        zIndex={0}
        display={{ base: 'none', lg: 'flex' }}
        backgroundImage="url('/amenagement-interieur-maison-contemporaine.jpg')"
        backgroundSize={'cover'}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        position={'absolute'}
        width={'50%'}
        insetY={0}
        right={0}>
        <Flex
          bgGradient={'linear(to-r, gray.800 10%, transparent)'}
          w={'full'}
          h={'full'}
        />
      </Flex>
      <Container maxW={'7xl'} zIndex={10} position={'relative'}>
        <Stack direction={{ base: 'column', lg: 'row' }}>
          <Stack
            flex={1}
            color={'gray.400'}
            justify={{ lg: 'center' }}
            py={{ base: 4, md: 20, xl: 60 }}>
            <Box mb={{ base: 8, md: 20 }}>
              <Text
                fontFamily={'heading'}
                fontWeight={700}
                textTransform={'uppercase'}
                mb={3}
                fontSize={'xl'}
                color={'gray.500'}>
                À propos de l'entreprise :
              </Text>
              <Heading color={'white'} mb={5} fontSize={{ base: '3xl', md: '5xl' }}>
              Alain Terieur
              </Heading>
              <Text fontSize={'xl'} color={'gray.400'} padding={15}>
              "Alain Terieur" est une entreprise de BTP (Bâtiment et Travaux Publics) qui se distingue par son engagement envers la qualité, l'innovation et l'intégrité. Fondée en 1990 par M.Terieur, l'entreprise est devenue un acteur incontournable dans le secteur de la construction, offrant des services complets de conception, de construction et de rénovation pour une clientèle diversifiée.

              </Text>
              
              <Heading color={'white'} mb={5} fontSize={{ base: '3xl', md: '5xl' }}>
              Nos valeurs :
              </Heading>
              <Text
                fontFamily={'heading'}
                fontWeight={700}
                textTransform={'uppercase'}
                mb={3}
                fontSize={'xl'}
                color={'gray.500'}>
                Qualité supérieure :
              </Text>
              <Text fontSize={'xl'} color={'gray.400'} padding={15}>
              Chez "Alain Terieur", nous sommes déterminés à fournir des services de construction de la plus haute qualité. Notre équipe d'experts qualifiés et dévoués veille à ce que chaque projet soit réalisé selon les normes les plus strictes.
              </Text>

              <Text
                fontFamily={'heading'}
                fontWeight={700}
                textTransform={'uppercase'}
                mb={3}
                fontSize={'xl'}
                color={'gray.500'}>
                Innovation :
              </Text>
              <Text fontSize={'xl'} color={'gray.400'} padding={15}>
              Nous sommes constamment à la recherche de nouvelles technologies et de méthodes de construction novatrices pour améliorer l'efficacité de nos projets, tout en respectant les principes du développement durable.
              </Text>

              <Text
                fontFamily={'heading'}
                fontWeight={700}
                textTransform={'uppercase'}
                mb={3}
                fontSize={'xl'}
                color={'gray.500'}>
                Intégrité :
              </Text>
              <Text fontSize={'xl'} color={'gray.400'} padding={15}>
              Notre entreprise repose sur des principes d'intégrité, de transparence et de respect envers nos clients, nos employés et nos partenaires commerciaux. Nous nous engageons à établir des relations de confiance durables.
              </Text>

              <Text
                fontFamily={'heading'}
                fontWeight={700}
                textTransform={'uppercase'}
                mb={3}
                fontSize={'xl'}
                color={'gray.500'}>
                Réalisations récentes :
              </Text>
              <Text fontSize={'xl'} color={'gray.400'} padding={15}>
              Au fil des années, "Alain TERIEUR" a réalisé de nombreux projets impressionnants, allant de la rénovation d'appartements de luxe à l'aménagement d'espaces commerciaux innovants. Notre portefeuille diversifié témoigne de notre capacité à relever tous les défis et à surpasser les attentes de nos clients.
              </Text>
            </Box>

            
          </Stack>
          <Flex flex={1} />
        </Stack>
      </Container>
    </Box>
  )
}