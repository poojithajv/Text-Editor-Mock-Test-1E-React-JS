import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'
import {
  MainContainer,
  CardContainer,
  LeftContainer,
  LeftHeading,
  LeftImage,
  RightContainer,
  ToolUi,
  ToolLi,
  Button,
  TextArea,
} from './StyledComponents'

class TextEditor extends Component {
  state = {
    isBold: false,
    isItalic: false,
    isUnderline: false,
  }

  onClickBold = () => {
    this.setState(prevState => ({isBold: !prevState.isBold}))
  }

  onClickItalic = () => {
    this.setState(prevState => ({isItalic: !prevState.isItalic}))
  }

  onClickUnderline = () => {
    this.setState(prevState => ({isUnderline: !prevState.isUnderline}))
  }

  render() {
    const {isBold, isItalic, isUnderline} = this.state
    const boldLogo = isBold ? '#faff00' : '#f1f5f9'
    const italicLogo = isItalic ? '#faff00' : '#f1f5f9'
    const underlineLogo = isUnderline ? '#faff00' : '#f1f5f9'

    return (
      <MainContainer>
        <CardContainer>
          <LeftContainer>
            <LeftHeading>Text Editor</LeftHeading>
            <LeftImage
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </LeftContainer>
          <RightContainer>
            <ToolUi>
              <ToolLi>
                <Button
                  data-testid="bold"
                  type="button"
                  onClick={this.onClickBold}
                  colorText={boldLogo}
                >
                  <VscBold size="25" />
                </Button>
              </ToolLi>
              <ToolLi>
                <Button
                  data-testid="italic"
                  type="button"
                  onClick={this.onClickItalic}
                  colorText={italicLogo}
                >
                  <GoItalic size="25" />
                </Button>
              </ToolLi>
              <ToolLi>
                <Button
                  data-testid="underline"
                  type="button"
                  onClick={this.onClickUnderline}
                  colorText={underlineLogo}
                >
                  <AiOutlineUnderline size="25" />
                </Button>
              </ToolLi>
            </ToolUi>
            <TextArea
              isBold={isBold}
              isItalic={isItalic}
              isUnderline={isUnderline}
            />
          </RightContainer>
        </CardContainer>
      </MainContainer>
    )
  }
}
export default TextEditor
