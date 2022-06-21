import './src/styles/settings/colors.css';
import './src/styles/generic/reset.css';
import './src/styles/elements/base.css';
import './style.css';

import PlayerText from './src/components/PlayerText';
import BoardGame from './src/Objects/BoardGame';

const $root = document.querySelector('#root');
const $htmlPlayerText = PlayerText(1);
const $htmlBoardGame = BoardGame(6);

$root.insertAdjacentHTML('afterbegin', $htmlPlayerText);
$root.insertAdjacentHTML('beforeend', $htmlBoardGame);
