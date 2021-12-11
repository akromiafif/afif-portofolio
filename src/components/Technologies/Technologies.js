import React from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import { AiOutlineMobile } from "react-icons/ai";
import { FiPackage } from "react-icons/fi";
import { MdLibraryBooks } from "react-icons/md";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range a technologies in the web development world. From
      Back-end To Design
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experiece with <br />
            React JS <br />
            Angular JS <br />
            Electron JS <br />
            NEXT JS <br />
            Nest JS <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node JS <br />
            Laravel <br />
            Django REST Framework <br />
            Flask <br />
            Firebase <br />
            MongoDB <br />
            Docker <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiZend size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experience with <br />
            Figma <br />
            Adobe XD <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <AiOutlineMobile size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Mobile-Dev</ListTitle>
          <ListParagraph>
            Experiece with <br />
            Flutter <br />
            React Native <br />
            Kotlin & Java <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <FiPackage size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>3Party-Library</ListTitle>
          <ListParagraph>
            Experiece with <br />
            Passport JS <br />
            Recoil JS <br />
            Three JS <br />
            TypeORM <br />
            Sequilze <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <MdLibraryBooks size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Others</ListTitle>
          <ListParagraph>
            Experiece with <br />
            Keras Python <br />
            OpenCV <br />
            ROS Framework <br />
            TensorFlow <br />
            Pandas <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
