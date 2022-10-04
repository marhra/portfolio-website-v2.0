import React from 'react'
import { InfoContainer, InfoWrapper, InfoRow, Column1, TextWrapper, Heading, Paragraph, Column2, ImgWrap, Img } from './AboutSectionElements'

const AboutSection = ({imgStart, headline, description, img, alt}) => {
  return (
    <>
     <InfoContainer>
        <InfoWrapper>
            <InfoRow imgStart={imgStart}>
                <Column1>
                <TextWrapper>
                    <Heading>{headline}</Heading>
                    <Paragraph>{description}</Paragraph>
                </TextWrapper>
                </Column1>
                <Column2>
                  <ImgWrap>
                    <Img src={img} alt={alt}/>
                  </ImgWrap>
                </Column2>
            </InfoRow>
        </InfoWrapper>
     </InfoContainer>
    </>
  )
}

export default AboutSection