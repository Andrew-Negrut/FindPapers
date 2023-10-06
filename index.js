let divBlock = document.getElementById('selected-text');

document.getElementById("search").onclick = async () => {
    // print selected text in the popup box
    const [tab] = await chrome.tabs.query({active: true, currentWindow: true});
    let result;
    try {
      [{result}] = await chrome.scripting.executeScript({
        target: {tabId: tab.id},
        func: () => getSelection().toString(),
      });
    } catch (e) {
      return;
    }
    // let p = document.createElement("p");
    // p.innerText = result;
    // divBlock.appendChild(p);

    // open new tab with search results
    chrome.search.query({text: result + " research papers", disposition: "NEW_TAB"});
  };
