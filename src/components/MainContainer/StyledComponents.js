import Styled from 'styled-components'

export const BgContainer = Styled.div`
    background-color: #25262c;
    height: 100vh;
    background-size: cover;

    margin-top: -22px;
    color: white;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    
`

export const Container = Styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

     background-color: #1b1c22;

     height: 80vh;
     width: 80vw;

`
export const FirstContainer = Styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    height: 650px;
`

export const SecondContainer = Styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    border: 2px solid #334155;
    border-radius: 10px;
    height: 650px;
    width: 500px;
    padding: 5px;
`
export const IconsContainer = Styled.div``

export const Button = Styled.button`
    background-color: transparent;
    border: 0px none transparent;
   
    font-family: 'roboto';

  

`
export const Hr = Styled.hr`
    color: #334155;
    width: 490px;
    background-color: #334155;
`
export const TextArea = Styled.textarea`
    background-color: transparent;
    outline: none;
    height: 650px;
    width: 485px;
    border: 0px none transparent;
    color: white;


   font-weight: ${props => (props.activeButton1 === 'bold' ? 'bold' : '')};
   font-style: ${props => (props.activeButton2 === 'italic' ? 'italic' : '')};
   text-decoration: ${props =>
     props.activeButton3 === 'underline' ? 'underline' : ''};
`
export const IconCon1 = Styled.div`
     color: ${props =>
       props.activeButton1 === 'bold' ? '#faff00' : '#f1f5f9'};
`
export const IconCon2 = Styled.div`
     color: ${props =>
       props.activeButton2 === 'italic' ? '#faff00' : '#f1f5f9'};
`
export const IconCon3 = Styled.div`
     color: ${props =>
       props.activeButton3 === 'underline' ? '#faff00' : '#f1f5f9'};
`
