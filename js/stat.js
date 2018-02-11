'use strict';

// start rectangle
var START_X = 100;
var START_Y = 10;
var START_WIDTH = 420;
var START_HEIGHT = 270;
var START_GAP = 10;

// main text
var TEXT_PADDING = 20;
var TEXT_Y = 40;
var TEXT_GAP = 20;

// column box
var COLUMN_X = 150;
var COLUMN_Y = 100;
var COLUMN_GAP = 90;
var COLUMN_WIDTH = 40;
var COLUMN_HEIGHT = 150;
var COLUMN_COUNT_GAP = 8;
var COLUMN_NAME_GAP = 20;

window.renderStatistics = function (ctx, names, times) {
  var maxTime = 0;
  for (var i = 0; i < times.length; i++) {
    if (maxTime < times[i]) {
      maxTime = times[i];
    }
  }

  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(START_X + START_GAP, START_Y + START_GAP, START_WIDTH, START_HEIGHT);

  ctx.fillStyle = '#fff';
  ctx.fillRect(START_X, START_Y, START_WIDTH, START_HEIGHT);

  ctx.font = '16px PT Mono';
  ctx.fillStyle = '#000';
  ctx.fillText('Ура, Вы победили!', START_X + TEXT_PADDING, TEXT_Y);
  ctx.fillText('Список результатов!', START_X + TEXT_PADDING, TEXT_Y + TEXT_GAP);

  for (var j = 0; j < names.length; j++) {
    ctx.fillStyle = '#000';
    var columnHeight = (Math.round(times[j]) * COLUMN_HEIGHT) / maxTime;
    var columnY = COLUMN_Y + (COLUMN_HEIGHT - columnHeight);

    ctx.fillText(names[j], COLUMN_X + j * COLUMN_GAP, COLUMN_Y + COLUMN_HEIGHT + COLUMN_NAME_GAP);
    ctx.fillText(Math.round(times[j]), COLUMN_X + j * COLUMN_GAP, columnY - COLUMN_COUNT_GAP);

    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgba(0, 0, 255, ' + Math.random() + ')';
    }

    ctx.fillRect(COLUMN_X + j * COLUMN_GAP, columnY, COLUMN_WIDTH, columnHeight);
  }
};
