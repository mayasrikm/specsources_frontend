import styled from 'styled-components';
import { useState } from "react";


const Form = styled.form`
    background-color:#60B3FB;
    display: flex;
    flex-flow: row;
    align-items: center;
    align-content: space-around;
    justify-content: space-around;
    width: 1440px;
    height: 104px;
    top: 116px;
`;
const Submit = styled.button`
    background-color:#A3FFA6;
    box-shadow: none;
    outline: none;
    font-size: 25px;
    padding: 10px 76px;

`;
const fontStyle = {
    color: "white",
    fontSize: 25
};
const inputDim={
    width : "385px",
    height:"50px",
    fontSize: "25px"
    
}

const Input = ({submitSource})=>{
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const onSubmit = (e)=> {
        e.preventDefault();
        submitSource(name,email)
        setName("")
        setEmail("")
    }
    
    return(
        <Form>
            <span>
                <label style={fontStyle}  for="name">Source Name:</label>
                <input style = {inputDim} type="name" name="name" value={name} onChange={(e) => setName(e.target.value)}  />
            </span>
            <span>
                <label style={fontStyle} for="email">Source Email:</label>
                <input style={inputDim}type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </span>
            <Submit onClick={(e) => onSubmit(e)}>Submit</Submit>
        </Form>
    )
}
export default Input;