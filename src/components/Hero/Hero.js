import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My personal portfolio
      </SectionTitle>
      <SectionText>
        Hi! I'm a Frontend developer. I create nice and clean responsive web applications, sites and landing pages. For this I use all modern technologies. And they look perfect in any browser.
      </SectionText>
      <Button onClick={() => {document.location='#projects';return false;}}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;