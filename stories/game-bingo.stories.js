import { html } from 'lit';
import '../src/game-bingo.js';

export default {
  title: 'GameBingo',
  component: 'game-bingo',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ header, backgroundColor }) {
  return html`
    <game-bingo
      style="--game-bingo-background-color: ${backgroundColor || 'white'}"
      .header=${header}
    >
    </game-bingo>
  `;
}

export const App = Template.bind({});
App.args = {
  header: 'My app',
};
