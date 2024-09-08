let timerId = null;
let interval = 100; // Default interval duration (in milliseconds).


// Wait for event messages sent from the main script.
onmessage = function(e) {
    if (e.data == 'start') {
        postMessage('starting');

        timerId = setInterval(
              function() { 
                  postMessage('tick');
              }, interval);
    }
    else if (e.data.interval) {
        console.log('setting interval');
        // Set the new interval.
        interval = e.data.interval;
        console.log('interval = ' + interval);

        // Clear the current interval before running the 
        // setInterval function with the new interval.
        if (timerId) {
            clearInterval(timerId);

            timerId = setInterval(
                  function() { 
                      postMessage('tick');
                  }, interval);
            }
    }
    else if (e.data == 'stop') {
        clearInterval(timerId);
        timerId = null;
        postMessage('stopping');
    }
    else {
        postMessage('Message Unknown.');
    }
}
