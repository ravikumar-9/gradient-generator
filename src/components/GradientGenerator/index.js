import {Component} from 'react'

import {
  BgContainer,
  GenerateHeading,
  ChooseDirectionHeading,
  DirectionButtonsContainer,
  PickColorsHeading,
  ColorsContainer,
  FirstColorContainer,
  HexCodeText,
  HexCodeInput,
  GenerateButton,
} from './styledComponents'

import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

class GradientGenerator extends Component {
  state = {
    activeDirectionTabId: gradientDirectionsList[0].value,
    firstColorInput: '#8ae323',
    secondColorInput: '#014f7b',
    firstColor: '#8ae323',
    secondColor: '#014f7b',
    activeDirection: gradientDirectionsList[0].value,
  }

  onChangeActiveTabId = tabValue => {
    this.setState({activeDirectionTabId: tabValue})
    console.log(tabValue)
  }

  onChangeFirstColor = event => {
    this.setState({firstColorInput: event.target.value})
  }

  onChangeSecondColor = event => {
    this.setState({secondColorInput: event.target.value})
  }

  onGenerateGradient = () => {
    const {firstColorInput, secondColorInput, activeDirectionTabId} = this.state

    this.setState({
      firstColor: firstColorInput,
      secondColor: secondColorInput,
      activeDirection: activeDirectionTabId,
    })
  }

  render() {
    const {
      activeDirectionTabId,
      firstColorInput,
      secondColorInput,
      activeDirection,
      firstColor,
      secondColor,
    } = this.state

    return (
      <BgContainer
        data-testid="gradientGenerator"
        direction={activeDirection}
        firstBg={firstColor}
        secondBg={secondColor}
      >
        <GenerateHeading>Generate a CSS Color Gradient</GenerateHeading>
        <ChooseDirectionHeading>Choose Direction</ChooseDirectionHeading>
        <DirectionButtonsContainer>
          {gradientDirectionsList.map(eachDirection => (
            <GradientDirectionItem
              key={eachDirection.directionId}
              directionDetails={eachDirection}
              activeTab={activeDirectionTabId === eachDirection.value}
              onChangeActiveTabId={this.onChangeActiveTabId}
            />
          ))}
        </DirectionButtonsContainer>
        <PickColorsHeading>Pick the Colors</PickColorsHeading>
        <ColorsContainer>
          <FirstColorContainer>
            <HexCodeText>{firstColorInput}</HexCodeText>
            <HexCodeInput
              type="color"
              onChange={this.onChangeFirstColor}
              value={firstColorInput}
            />
          </FirstColorContainer>
          <FirstColorContainer>
            <HexCodeText>{secondColorInput}</HexCodeText>
            <HexCodeInput
              type="color"
              onChange={this.onChangeSecondColor}
              value={secondColorInput}
            />
          </FirstColorContainer>
        </ColorsContainer>
        <GenerateButton onClick={this.onGenerateGradient}>
          Generate
        </GenerateButton>
      </BgContainer>
    )
  }
}

export default GradientGenerator
