import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 50px;
`;

export const Repository = styled.div`
  display: flex;
  flex-direction: column;

  width: 250px;
  background: #fff;
  border-radius: 3px;
  margin: 0 10px;

  header {
    display: flex;
    padding: 30px;
    flex-direction: column;
    align-items: center;

    img {
      width: 65px;
    }

    strong {
      font-size: 24px;
      margin-top: 10px;
    }

    small {
      font-size: 15px;
      color: #666;
    }
  }

  ul {
    list-style: none;

    li {
      font-weight: bold;
      padding: 12px 20px;

      small {
        font-weight: normal;
        font-size: 15px;
        font-style: italic;
        color: #888;
        padding: 10px;
      }

      &:nth-child(2n - 1) {
        background: #cccccc;
      }
    }
  }
`;
