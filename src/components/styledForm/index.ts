import styled from "styled-components";

export const StyledForm = styled.form`
   display: flex;
   width: 90%;
   max-width: 480px;
   flex-direction: column;
   padding: 2rem 2rem;
   background-color: rgb(25, 25, 25, 70%);
   margin-bottom: 2rem;
   border-radius: 4px;
   h1 {
    align-self: center;
    margin-bottom: 1.5rem;
    color: #6FFFA2;
   }
   .msgTitulo {
        align-self: center;
        font-size: 12px;
        color: var(--grey-1);
        margin-bottom: 1.5rem;
   }
   label {
    font-size: 13px;
    color: white;
    margin-bottom: .5rem;
   }
   input {
    padding: 0 .5rem;
    height: 40px;
    background-color: white;
    color: var(--grey-0);
    border: solid 1px var(--grey-2);
    margin-bottom: 1rem;
    border-radius: 4px;
   }
   input:focus {
    border: solid 1px var(--grey-0);
   }
   
   button {
    width: 100%;
    height: 38px;
    background-color: rgb(10, 10, 10, 95%);
    color: white;
   }
   .btnVoltar {
    width: 60px;
    align-self: flex-end;
    border: none;
    cursor: pointer;
   }
   .voltar {
    width: 60px;
    align-self: flex-end;
   }
`
export const StyledError = styled.p`
    color: red;
    font-size: 14px;
    margin: 0 0 0.9rem;
`