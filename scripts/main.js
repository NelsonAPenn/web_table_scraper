WebAssembly.instantiateStreaming(fetch('call.wasm'))
 .then(obj => {
    console.log(obj.instance.exports.getAnswerPlus1());  // "43"
  });
