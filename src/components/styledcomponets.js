import styled from "styled-components";

export default styled.div`
  form {
    width: 50%;
    margin: 2rem auto;
    background: #faebd7;
    border: 2px dashed black;
    box-shadow: 0 0 15px 20px #ffc0cb;
  }
  form h2 {
    margin: 1%;
    font-size: 1.5rem;
    text-align: center;
    padding: 2%;
    font-family: "Architects Daughter", cursive;
    text-shadow: 2px 2px 2px #888;
    border-bottom: 1px solid black;
  }
  .inputContainer {
    margin: 2%;
  }
  label {
    width: 30%;
    margin: auto;
    display: flex;
    justify-content: space-between;
  }
  button {
    background-color: #cbe2b0;
    border: 1px solid black;
    border-radius: 2rem;
    &:hover {
      background: green;
      color: white;
      box-shadow: 0 0 5px 2px green;
    }
  }
  .error {
    color: red;
    font-weight: bold;
    text-align: center;
  }
  .bttn {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10% 0 3% 0;
  }
  .submit {
    width: min-content;
    margin-bottom: 2%;
  }
`;
