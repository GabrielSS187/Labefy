import {createGlobalStyle} from "styled-components";

export default createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background-color: black;
    }

    .div-geral{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        padding-top: 10px;
        height: 100vh;
    }

    //------------------------------
    .btn-vizualizar-playlist{
        background-color: white;
        border: none;
        border-radius: 2px;
        width: 120px;
        height: 18px;
        transition: all 0.7s;
        margin-top: 8px;
    }
    .btn-vizualizar-playlist:hover{
        cursor: pointer;
        transition: all 0.7s;
        background-color: orange;
        color: white;
    }
    .btn-vizualizar-playlist:active{
        height: 30px;
    }
    //------------------------------

    //------------------------------
    footer{
        width: 100%;
        height: 13px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        background-color: orange;
        color: white;
        font-size: 8px;
        margin-top: 8px;
    }
    //------------------------------

    //----------------------------------------------------------------
    hr{
        margin-bottom: 10px;
    }
    //----------------------------------------------------------------
`;