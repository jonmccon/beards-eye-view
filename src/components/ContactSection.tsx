import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import { Heading, Link, Text } from 'rebass';
import { Behance, FacebookSquare, Instagram } from 'styled-icons/fa-brands';
import Container from './Container';
import IconLink from './IconLink';
import Paragraph from './Paragraph';
import Section, { Props } from './Section';

const ContactSection = (props: Props) => (
  <Section {...props}>
    <Container as={Text} textAlign="center">
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
            <Paragraph pb={2}>
              Film photography from the life of{' '}
              <Text
                as={Link}
                href="https://www.workbynight.com/"
                fontWeight="bold"
              >
                Jonny McConnell
              </Text>
              <br />
              Say Hullo -{' '}
              <Text
                as={Link}
                href={`mailto:${data.site.siteMetadata.email}`}
                fontWeight="bold"
              >
                {data.site.siteMetadata.email}
              </Text>
            </Paragraph>
            <Text my={0} fontSize="1em">
              <IconLink
                icon={Instagram}
                href={data.site.siteMetadata.siteInstagramURL}
                title="Instagram"
                mx={4}
              />
            </Text>
          </>
        )}
      />
    </Container>
  </Section>
);

export default ContactSection;
