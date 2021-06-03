import React from 'react';











async function copyText() {

    const boxText =  document.getElementById('description').innerText
    try {
      await navigator.clipboard.writeText(boxText);
      console.log('copied to clipboard');
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  }

  export default copyText;