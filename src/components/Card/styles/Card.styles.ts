import styled from "styled-components";

export const CardContainer = styled.div`
  background: white;
  border-radius: 24px;
  overflow: hidden;
  max-width: 800px;
  margin: 0 auto;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  width: 100%;
  box-sizing: border-box;
  position: relative;
`;

export const CardHeader = styled.div`
  > * {
    padding: 20px 24px;
    background: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    width: 100%;
    box-sizing: border-box;

    h2 {
      margin: 0;
      color: #333;
      font-size: 24px;
      font-weight: 500;
    }
  }
`;

export const CardBody = styled.div`
  background: #fafafa;
  padding: 16px 24px;
  min-height: 200px;
  width: 100%;
  box-sizing: border-box;
`;

export const CardFooter = styled.div`
  padding: 16px 24px;
  background: white;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 12px;
  width: 100%;
  box-sizing: border-box;
`;
