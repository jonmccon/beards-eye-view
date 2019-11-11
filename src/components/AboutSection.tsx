import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import { Flex, Heading, Text } from 'rebass';
import { ThemeConsumer } from 'styled-components';
import { Instagram } from 'styled-icons/fa-brands';
import Container from './Container';
import Section, { Props } from './Section';
import IconLink from './IconLink';

import aboutSectionBackgroundSrc from '../assets/about-section-background.svg';

const AboutSection = (props: Props) => (
  <ThemeConsumer>
    {theme => (
      <Section
        {...props}
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
          <Container flex={1} my={4}>
            <Heading>
              BEARDS EYE VIEW
              <StaticQuery
                query={graphql`
                  {
                    site {
                      siteMetadata {
                        email
                        siteInstagramURL
                      }
                    }
                  }
                `}
                render={data => (
                  <>
                    <Text my={2} fontSize=".8em">
                      <IconLink
                        icon={Instagram}
                        href={data.site.siteMetadata.siteInstagramURL}
                        title="Instagram"
                      />
                    </Text>
                  </>
                )}
              />
            </Heading>
          </Container>
        </Container>
      </Section>
    )}
  </ThemeConsumer>
);

export default AboutSection;
