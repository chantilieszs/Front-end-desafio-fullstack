import styled from "styled-components";

export const StyledHeader = styled.header`
    width: 100%;
    height: 85px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 1rem;
    padding-right: 1rem;
    background-image: linear-gradient(12deg, rgba(29, 255, 0, .3), rgba(0, 84, 252, .1));
    p {
        margin: 0;
        font-size: 18px;
        font-weight: 600;
    }
    button {
        height: 30px;
        width: 65px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        background-image: linear-gradient(45deg, greenyellow, pink);
    }
`