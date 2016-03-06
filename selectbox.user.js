// ==UserScript==
// @name        selectbox
// @namespace   
// @description selectboxのリストを絞り込む
// @includes    *
// @excludes    
// ==/UserScript==

'use strict';

var selects = document.getElementsByTagName('select');
for (let i = 0; i < selects.length; i++) {
  let select = selects[i];
  for (let j = select.options.length - 1; j >= 0; j--) {
    let option = select.options[j];
    if (!option.selected) {
	    select.removeChild(option);
	  }
  }
}
