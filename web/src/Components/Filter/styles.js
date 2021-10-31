import styled from "styled-components";

export const Container = styled.div`
       width: 85px;
       height: 20px;
       background:${props => props.activation ? '#7fad79' : '#aebeac'};  
       border-radius: 2px;
       padding: 1px;
       cursor: pointer;

       display: flex;
       justify-content: space-around;

       Img{
           width: 8px;
           height: 8px;
        
       }

       span{
           color:#FFF;
           align-self: flex-end;
           font-size: 10px
       }

       &:hover{
           background: #7fad79;
       }

`