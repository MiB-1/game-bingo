import { LitElement, html } from 'lit';
import { commonStyles } from './commonStyles.js';

class GameBingo extends LitElement {

  static properties = {
    randomValues: { type: Array },
  }

  static styles = commonStyles;

  connectedCallback() {
    super.connectedCallback();
    this.randomValues = Array.from({length: 25}, (_, i) => i + 1);
    for(let i = this.randomValues.length - 1; i >= 0; i-=1) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.randomValues[i], this.randomValues[j]] = [this.randomValues[j], this.randomValues[i]];
    }
  }

  getTable() {
    let count = 0;
    const table = document.createElement('table');
    for(let i =0 ; i < 5; i+=1) {
      const row = document.createElement('tr');
      for(let j =0 ; j < 5; j+=1) {
        const cell = document.createElement('td');
        cell.textContent = this.randomValues[count];
        console.log(count);
        cell.addEventListener('click', () => {
          cell.classList.toggle('selected');
        });
        row.appendChild(cell);
        count+=1;
      }
      table.appendChild(row);
    }
    return table;
  }

  render() {
    return html`
      <div class="game-bingo">
        ${this.getTable()}
      </div>
    `;
  }
}

customElements.define('game-bingo', GameBingo);
