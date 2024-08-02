import { css } from 'lit';


export const commonStyles = css`
  body, html {
    height: 100%;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(to right, #e0eafc, #cfdef3);
    font-family: Arial, Helvetica, sans-serif;
  }

  .game-bingo {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .selected {
    background-color: rgba(102, 153, 255, 0.9);
    color: white;
  }

  table {
    border-collapse: collapse;
    box-shadow: 0 4px 20px rgba(0,0,0,0.1);
    border-radius: 12px;
    overflow: hidden;
    background: linear-gradient(135deg, #fdfdfd, #cfdef3);
  }

  td {
    width: 60px;
    height: 60px;
    text-align: center;
    vertical-align: middle;
    font-size: 20px;
    font-weight: 600;
    color: #444;
    background: rgba(255, 255, 255, 0.8);
    cursor: pointer;
  }

  td:nth-child(odd) td {
    background: rgba(245, 245, 255, 1);
  }
`;
