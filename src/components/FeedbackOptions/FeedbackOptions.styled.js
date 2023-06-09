import styled from '@emotion/styled';

export const FeedbackContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 15px;
`;

export const FeedbackButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  padding: 5px;
  font-size: 14px;
  border-radius: 6px;
  border: 2px solid #342e69;

  background-color: #d4d0f5;

  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
  background-color: #342e69;  
  color: #ffff;
  }
  }
`;