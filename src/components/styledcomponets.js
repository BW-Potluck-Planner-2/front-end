import styled from 'styled-components';

export default styled.div`
    form{
        width: 50%;
        margin: 2rem auto;
        background: #FAEBD7;
        border: 2px dashed black;
        box-shadow: 0 0 15px 20px #FFC0CB
;
        }
    form h2{
        text-align: center;
        padding: 3% 0;
        font-family: 'Architects Daughter', cursive;
        text-shadow: 2px 2px 2px #888;
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
        &:hover{
            background: green;
            color: white;
            box-shadow: 0 0 5px 2px green;

        }
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