// ==UserScript==
// @name        selectbox
// @namespace   
// @description selectboxのリストを絞り込む
// @includes    *
// @excludes    
// ==/UserScript==

'use strict';

(() => {
  // get target select box as you like.
  let selects = document.getElementsByTagName('select');
  // var selects = document.getElementsByClassName('');
  // var selects = document.getElementById('');
  // var selects = document.getElementsByName('');

  // filter
  let include = /.*/;
  let exclude = /input regexp as you want to exclude/;

  for (let i = 0; i < selects.length; i++) {
    let select = selects[i];
    for (let j = select.options.length - 1; j >= 0; j--) {
      let option = select.options[j];

      // Remove option when exclude matches.
      if (exclude.test(option.innerHTML)) {
        select.removeChild(option);
        continue;
      }

      // Remove option when include not matches.
      if (!include.test(option.innerHTML)) {
        select.removeChild(option);
      }
    }
  }
})();
