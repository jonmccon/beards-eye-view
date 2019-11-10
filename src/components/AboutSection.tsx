import React from 'react';
import { Flex, Heading } from 'rebass';
import { ThemeConsumer } from 'styled-components';
import Container from './Container';
import Paragraph from './Paragraph';
import Section, { Props } from './Section';

import aboutSectionBackgroundSrc from '../assets/about-section-background.svg';

const AboutSection = (props: Props) => (
  <ThemeConsumer>
    {theme => (
      <Section
        {...props}
        bg={[null, null, 'red']}
        py={[null, null, 3, 5]}
        css={`
          @media (min-width: ${theme.breakpoints[1]}px) {
            background-image: ${`url(${aboutSectionBackgroundSrc});`};
            background-size: 100% 100%;
          }
        `}
      >
        <Container
          as={Flex}
          flexDirection={['column', null, 'row']}
          alignItems="center"
          px={null}
        >
          <Container flex={1} my={3}>
            <Heading textAlign={['center', null, 'left']}>
              Beards Eye View
            </Heading>

            <Paragraph textAlign={['center', null, 'left']}>
              Film photography from the life of Jonny McConnell
            </Paragraph>
          </Container>
        </Container>
      </Section>
    )}
  </ThemeConsumer>
);

export default AboutSection;
