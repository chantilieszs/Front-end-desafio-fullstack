import styled from "styled-components";

export const StyledContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: linear-gradient(45deg, green, blue);
    img {
        margin-bottom: 1.5rem;
    }
    .semConta {
        margin: 1rem 0;
        color: white;
        align-self: center;
        font-size: 14px;
    }
`