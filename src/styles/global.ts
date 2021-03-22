import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    html {
        height: 100%;
    }

    body {
        display: flex;
        flex-direction: column;
        height: 100%;
        margin: 0;
    }
`;
