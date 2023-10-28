'use client'

import { ReactNode } from 'react'
import { Stack, Container, Box, Flex, Text, Heading, SimpleGrid } from '@chakra-ui/react'

export default function StatsGridWithImage2() {
  return (
    <Box bg={'gray.800'} position={'relative'}>
      <Flex
        flex={1}
        zIndex={0}
        display={{ base: 'none', lg: 'flex' }}
        backgroundImage="url('/services.jpg')"
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
                <Text
                fontFamily={'heading'}
                fontWeight={700}
                textTransform={'uppercase'}
                mb={3}
                fontSize={'xl'}
                color={'gray.500'}>
                Nos services :
              </Text>
              <Text fontSize={'xl'} color={'gray.400'} padding={15}>
              Nous proposons une gamme complète de services de construction, de rénovation et d'aménagement intérieur pour répondre aux besoins divers de nos clients. Parmi nos services, vous trouverez :


              </Text>
           

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
              {stats.map((stat) => (
                <Box key={stat.title}>
                  <Text fontFamily={'heading'} fontSize={'3xl'} color={'white'} mb={3}>
                    {stat.title}
                  </Text>
                  <Text fontSize={'xl'} color={'gray.400'}>
                    {stat.content}
                  </Text>
                </Box>
              ))}
            </SimpleGrid>
          </Stack>
          <Flex flex={1} />
        </Stack>
      </Container>
    </Box>
  )
}

const StatsText = ({ children }: { children: ReactNode }) => (
  <Text as={'span'} fontWeight={700} color={'white'}>
    {children}
  </Text>
)

const stats = [
  {
    title: 'Rénovation d\'Intérieure :',
    content: (
      <>
     Nous transformons les espaces vieillissants en intérieurs modernes, fonctionnels et esthétiquement plaisants.
      </>
    ),
  },
  {
    title: 'Conception et Aménagement d\'Espaces :',
    content: (
      <>
        Nous collaborons avec des architectes d'intérieur de renom pour créer des environnements intérieurs uniques et sur mesure.
      </>
    ),
  },
  {
    title: 'Travaux de Plomberie et d\'Électricité :',
    content: (
      <>
        Nos équipes qualifiées assurent une installation et une réparation de qualité pour tous les systèmes de plomberie et d'électricité.
      </>
    ),
  },
  {
    title: 'Isolation et Revêtements :',
    content: (
      <>
        Nous améliorons l'efficacité énergétique de votre intérieur en fournissant des solutions d'isolation avancées et des revêtements de haute qualité.
      </>
    ),
  },
  {
    title: 'Menuiserie :',
    content: (
      <>
        De la fabrication de meubles sur mesure à la pose de sols en bois, notre expertise en menuiserie est inégalée. 
      </>
    ),
  },
]
