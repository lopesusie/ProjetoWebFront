import styled from "styled-components";

export const Container = styled.div`
       width: 200%;
       height: 100px;
       box-shadow: -3px 1px 13px -2px rgba(0, 0, 0, 0.73);

       border-radius:5px;

       display: flex;
       align-items: center;
       justify-content: center;
       flex-column;

       margin: 25px;

`

export const TopCard = styled.div`
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      font-size: 10px;

      img{
          width: 35px;
          height: 35px;
      }
`
export const BottomCard = styled.div`
     width:5%;
     display: flex;
     justify-content: space-around;
     
     strong{
         color: #7fad79;
         font-size: 8px;
         
     }
     
     span{
         color: #7fad79;
         font-size: 8px;
       
     }`