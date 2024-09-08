document.addEventListener('DOMContentLoaded', () => {

    const metronome = new Metronome();

    document.getElementById('start-stop').addEventListener('click', (e) => {
        if (metronome.isPlaying()) {
            metronome.stop();
            // Toggle the button text from Stop to Start.
            e.target.innerHTML = 'Start';
        }
        else {
            metronome.start();
            // Toggle the button text from Start to Stop.
            e.target.innerHTML = 'Stop';
        }
    });

    document.getElementById('tempo').addEventListener('input', (e) => {
        if (metronome.isPlaying()) {
            metronome.tempoChange(e.target.value);
        }
        else {
            metronome.setTempo(e.target.value);
        }
    });

    document.getElementById('resolution').addEventListener('change', (e) => {
        metronome.setResolution(e.target.value);
    });
});
