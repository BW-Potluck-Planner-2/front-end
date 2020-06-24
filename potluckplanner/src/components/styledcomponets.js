import styled from 'styled-components';

export default styled.div`
    form{
        width: 50%;
        margin: auto;
    }

    form h2{
        text-align: center;
        padding: 3% 0;
    }

    label{
        width: 60%;
        margin: auto;
        display: flex;
        justify-content: space-between;
    }

    button{
        background-color: #CBE2B0;
        border: 1px dashed black;
        border-radius: 12px;
    }

    .error{
        color: red;
        font-weight: bold;
        text-align: center;
    }

    .bttn{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 10% 0 3% 0;
    }

    .submit{
        width: min-content;
        margin-bottom: 2%;
    }
`