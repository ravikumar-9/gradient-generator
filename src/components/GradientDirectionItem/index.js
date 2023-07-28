// Write your code here

import {ActiveButton, InActiveButton, LinkElement} from './styledComponents'

const GradientDirectionItem = props => {
  const {directionDetails, activeTab, onChangeActiveTabId} = props
  console.log(directionDetails)

  const onClickTab = () => {
    onChangeActiveTabId(directionDetails.value)
  }

  return activeTab ? (
    <LinkElement>
      <ActiveButton onClick={onClickTab}>
        {directionDetails.displayText}
      </ActiveButton>
    </LinkElement>
  ) : (
    <LinkElement>
      <InActiveButton onClick={onClickTab}>
        {directionDetails.displayText}
      </InActiveButton>
    </LinkElement>
  )
}

export default GradientDirectionItem
