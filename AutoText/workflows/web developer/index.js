keyboard.hotkey:ctrl,c
let.str:clipboard.value
let.js_fun.format:"start('{1}')",[let.str]
use.js:let.js_fun,let.out
clipboard.set:let.out
keyboard.hotkey:ctrl,v