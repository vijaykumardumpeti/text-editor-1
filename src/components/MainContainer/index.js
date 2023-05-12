import {Component} from 'react'

import {VscBold, GoItalic, AiOutlineUnderline} from 'react-icons/all'

import {
  BgContainer,
  Container,
  FirstContainer,
  SecondContainer,
  IconsContainer,
  Button,
  Hr,
  TextArea,
  IconCon1,
  IconCon2,
  IconCon3,
} from './StyledComponents'

export default class MainContainer extends Component {
  state = {
    inputValue: '',
    activeButton1: '',
    activeButton2: '',
    activeButton3: '',
  }

  onChangeInput = event => {
    this.setState({
      inputValue: event.target.value,
    })
  }

  onBold = () => {
    this.setState(prevState => ({
      activeButton1: prevState.activeButton1 === '' ? 'bold' : '',
    }))
  }

  onItalic = () => {
    this.setState(prevState => ({
      activeButton2: prevState.activeButton2 === '' ? 'italic' : '',
    }))
  }

  onUnderline = () => {
    this.setState(prevState => ({
      activeButton3: prevState.activeButton3 === '' ? 'underline' : '',
    }))
  }

  render() {
    const {inputValue, activeButton1, activeButton2, activeButton3} = this.state

    return (
      <BgContainer>
        <Container>
          <FirstContainer>
            <h1>Text Editor</h1>
            <img
              alt="text editor"
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
            />
          </FirstContainer>
          <SecondContainer>
            <IconsContainer>
              <Button onClick={this.onBold} data-testid="bold">
                <IconCon1 activeButton1={activeButton1}>
                  <VscBold size={25} />
                </IconCon1>
              </Button>
              <Button onClick={this.onItalic} data-testid="italic">
                <IconCon2 activeButton2={activeButton2}>
                  <GoItalic size={25} />
                </IconCon2>
              </Button>
              <Button onClick={this.onUnderline} data-testid="underline">
                <IconCon3 activeButton3={activeButton3}>
                  <AiOutlineUnderline size={25} />
                </IconCon3>
              </Button>
            </IconsContainer>
            <div>
              <Hr />
            </div>
            <TextArea
              activeButton1={activeButton1}
              activeButton2={activeButton2}
              activeButton3={activeButton3}
              value={inputValue}
              onChange={this.onChangeInput}
            />
          </SecondContainer>
        </Container>
      </BgContainer>
    )
  }
}
