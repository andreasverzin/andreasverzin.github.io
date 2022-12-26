import React from 'react';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxTitle, BoxText } from './AcomplishmentsStyles';
import { companies } from "../../constants/constants";

const Acomplishments = () => (
  <Section>
    <SectionDivider divider/>
    <SectionTitle>Companies I worked at</SectionTitle>
    <Boxes>
      {companies.map((company, index) => (
        <Box key={index}>
          <BoxTitle href={company.link}>{company.title}</BoxTitle>
          <BoxText>{company.description}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
