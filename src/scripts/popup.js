window.onload = function () {
    document.getElementById("t1").defaultValue = "Text is Hidden";
    document.getElementById("t2").defaultValue = "Text is Hidden";
  
    //NoteArea 1
    document.getElementById("save1").onclick = function () {
      var x = document.getElementById("t1").value;
      chrome.storage.sync.set({ n : x }, function () {
        console.log("Value is set to 1" + x);
      });
    };
  
    document.getElementById("show1").onclick = function () {
      chrome.storage.sync.get("n", function (data) {
        document.getElementById("t1").value = data.n;
      });
    };
  
    document.getElementById("copy1").onclick = function () {
      chrome.storage.sync.get("n", function (data) {
        var copyText = document.getElementById("t1");
        copyText.textContent = data.n;
        document.body.appendChild(copyText);
        copyText.select();
        document.execCommand("copy");
        console.log("Copied the text: " + copyText);
        document.body.removeChild(copyText);
      });
    };
  
    //NoteArea 2
    document.getElementById("save2").onclick = function () {
      var x1 = document.getElementById("t2").value;
      chrome.storage.sync.set({ n1: x1 }, function () {
        console.log("Value is set to 2" + x1);
      });
    };
  
    document.getElementById("show2").onclick = function () {
      chrome.storage.sync.get("n1", function (data) {
        document.getElementById("t2").value = data.n1;
      });
    };
  
    document.getElementById("copy2").onclick = function () {
      chrome.storage.sync.get("n1", function (data) {
        var copyText = document.getElementById("t2");
        copyText.textContent = data.n1;
        document.body.appendChild(copyText);
        copyText.select();
        //copyText.setSelectionRange(0, 99999);
        document.execCommand("copy");
        console.log("Copied the text: " + copyText);
        document.body.removeChild(copyText);
      });
    };
  };