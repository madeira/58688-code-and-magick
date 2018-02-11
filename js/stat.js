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
var FONT = '16px PT Mono';

var getMaxValue = function (arr) {
  var maxTime = 0;
  for (var i = 0; i < arr.length; i++) {
    if (maxTime < arr[i]) {
      maxTime = arr[i];
    }
  }
  return maxTime;
};
var getRandomColor = function () {
  return 'rgba(0, 0, 255, ' + Math.random() + ')';
};
var renderText = function (ctx, text, font, color, x, y) {
  ctx.font = font;
  ctx.fillStyle = color;
  ctx.fillText(text, x, y);
};
var renderHistogramColumn = function (ctx, x, y, width, height, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
};

window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(START_X + START_GAP, START_Y + START_GAP, START_WIDTH, START_HEIGHT);

  ctx.fillStyle = '#fff';
  ctx.fillRect(START_X, START_Y, START_WIDTH, START_HEIGHT);

  renderText(ctx, 'Ура, Вы победили!', FONT, '#000', START_X + TEXT_PADDING, TEXT_Y);
  renderText(ctx, 'Список результатов!', FONT, '#000', START_X + TEXT_PADDING, TEXT_Y + TEXT_GAP);

  for (var j = 0; j < names.length; j++) {
    var columnHeight = (Math.round(times[j]) * COLUMN_HEIGHT) / getMaxValue(times);
    var columnY = COLUMN_Y + (COLUMN_HEIGHT - columnHeight);

    renderText(ctx, names[j], FONT, '#000', COLUMN_X + j * COLUMN_GAP, COLUMN_Y + COLUMN_HEIGHT + COLUMN_NAME_GAP);
    renderText(ctx, Math.round(times[j]), FONT, '#000', COLUMN_X + j * COLUMN_GAP, columnY - COLUMN_COUNT_GAP);

    if (names[j] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = getRandomColor();
    }

    renderHistogramColumn(ctx, COLUMN_X + j * COLUMN_GAP, columnY, COLUMN_WIDTH, columnHeight, ctx.fillStyle);
  }
};
