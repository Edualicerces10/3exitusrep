import { Box, Image as ChakraImage } from '@chakra-ui/react'


interface ImageProps {
    src: string
    alt: string
}

export const Image = ({ src, alt }: ImageProps) => {
    return(
        <Box>
            <ChakraImage
                objectFit={'cover'}
                src={src}
                alt={alt}

                //w={{ base: "24px", md: "40px", lg: "750px" }}
                w={"2xl"} 
            />
        </Box>
    )
}