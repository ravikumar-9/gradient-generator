// Style your elements here
import styled from 'styled-components'

export const BgContainer = styled.div`
  background-image: linear-gradient(
    to ${props => props.direction},
    ${props => props.firstBg},
    ${props => props.secondBg}
  );
  height: 100vh;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const GenerateHeading = styled.h1`
  font-weight: bold;
  font-size: 27px;
  text-align: center;
  color: #ffffff;
`

export const ChooseDirectionHeading = styled.p`
  font-weight: bold;
  font-size: 17px;
  text-align: center;
  color: #ffffff;
`
export const DirectionButtonsContainer = styled.ul`
  width: 50%;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style-type: none;
`
export const PickColorsHeading = styled.p`
  font-weight: bold;
  font-size: 19px;
  text-align: center;
  color: #ffffff;
  margin-top: 34px;
`

export const ColorsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 40%;
`

export const FirstColorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 48%;
`

export const HexCodeText = styled.p`
  font-weight: bold;
  font-size: 14px;
  text-align: center;
  color: #ffffff;
`

export const HexCodeInput = styled.input`
  width: 40%;
  border: none;
  outline: none;
  cursor: pointer;
`

export const GenerateButton = styled.button`
  height: 34px;
  width: 120px;
  border: none;
  border-radius: 3px;
  background-color: #00c9b7;
  font-size: 14px;
  font-weight: bold;
  margin-top: 90px;
  cursor: pointer;
`
