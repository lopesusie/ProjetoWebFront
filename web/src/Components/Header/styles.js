import styled from "styled-components";

export const Container = styled.div`
       width: 100%;
       height: 20px;
       background:#aebeac;   

       border-bottom: 2px solid #7fad79

`
export const Menu = styled.div`
        width: 30%;
        height: 10px;
        display: flex;
        text-align: center;

        a{
               color: #FFF;
               font-weight: bold;
               text-decoration: none;
               margin: 0 10px;
        }

        .barra::after{
               content:"|";
               margin: 0 10px;
               color: #FFF;

        }

        a:hover{
               color: #7fad79;
        }
`