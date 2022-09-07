import React, { useState } from "react";
import styled from "styled-components";
import { CheckBox, CheckBoxLabel, CheckBoxWrapper } from "../styles/Checkbox";
import { IControls } from "../types/data";

const Display = styled.div`
  width: 35%;
  height: 65%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: inherit;
`;

const StyledHeading = styled.h3`
  font-size: 24px;
  color: #61d49f;
  background-color: inherit;
`;

const Element = styled.div`
  background-color: inherit;
`;

export const Controls: React.FC<IControls> = (props) => {
  const { bank, bankTwo, bankOne, power, sound, setBank, setPower, setSound } =
    props;

  const [slider, setSlider] = useState(true);

  const changeBank = () => {
    if (bank === bankOne) {
      setBank(bankTwo);
      setSlider(!slider);
      setSound("Smooth Piano Kit");
      return;
    }
    setSlider(!slider);
    setBank(bankOne);
    setSound("Heater Kit");
  };

  return (
    <Display>
      <Element>
        <StyledHeading>Power</StyledHeading>
        <CheckBoxWrapper>
          <CheckBox
            id="power"
            type="checkbox"
            checked={power}
            onChange={() => {
              setPower(!power);
            }}
          />
          <CheckBoxLabel htmlFor="power" />
        </CheckBoxWrapper>
      </Element>
      <Element id="display">{sound}</Element>
      <Element>
        <StyledHeading>Bank</StyledHeading>
        <CheckBoxWrapper>
          <CheckBox
            id="bank"
            type="checkbox"
            checked={slider}
            onChange={changeBank}
          />
          <CheckBoxLabel htmlFor="bank" />
        </CheckBoxWrapper>
      </Element>
    </Display>
  );
};
