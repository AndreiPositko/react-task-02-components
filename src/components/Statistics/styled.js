import styled from 'styled-components';

export const Container = styled.div`
   max-width: 768px;
   margin: 0 auto;
   min-height: 100vh;
   display: flex;
   justify-content: center;
   align-items: center;
`;
export const Section = styled.section`
   padding-top: 15px;
   width: 350px;
   background-color: #fff;
   display: flex;
   flex-direction: column;
`;
export const Title = styled.h1`
   text-align: center;
   text-transform: uppercase;
   min-height: 70px;
   line-height: 65px;
`;

export const StatList = styled.ul`
   display: flex;
   flex-wrap: wrap;
`;

export const StatItem = styled.li`
   background-color: ${(props) => props.bckg};
   padding: 10px;
   width: 25%;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   color: #fff;
   &:last-child {
      width: 100%;
   }
   span {
      margin-bottom: 3px;
      font-weight: bold;
   }
`;

export const StatLabel = styled.span`
   font-size: 14px;
`;

export const StatPercentage = styled.span`
   font-size: 20px;
`;
