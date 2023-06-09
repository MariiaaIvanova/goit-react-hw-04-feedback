import styled from '@emotion/styled';

export const StatisticList  = styled.ul`
  display: flex;
  align-items: center;
`;

export const StatisticItem = styled.li`
 display: flex;
 

  &:not(:last-child) {
    margin-right: 15px;
  }
`;