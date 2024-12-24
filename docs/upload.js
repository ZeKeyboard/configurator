
let button = document.getElementById("uploadToKeyboardButton");

button.onclick = () => {

  let p = navigator.serial.requestPort();

  p.then(async (port) => {
    await port.open({ baudRate: 9600 });
    const encoder = new TextEncoder();
    const writer = port.writable.getWriter();
    let text = document.getElementById("serializedModel").innerText;

    writer.write(encoder.encode(text));
    writer.releaseLock();
  });

};

