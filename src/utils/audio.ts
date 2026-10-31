// Interactive Web Audio Soundcheck for musicians
let audioCtx: AudioContext | null = null;

function getAudioContext(): AudioContext {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    audioCtx = new AudioContextClass();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

/**
 * Plays a rich, resonant musical chord (E Major 9th with guitar harmonics)
 * to give an authentic musical feedback experience when visiting or interacting.
 */
export function playSoundcheckChord(chordType: 'power' | 'clean' | 'synth' = 'power') {
  try {
    const ctx = getAudioContext();
    const now = ctx.currentTime;

    // Frequencies for a rich, uplifting rock/ambient voicing: E, B, E, G#, B, E
    const frequencies =
      chordType === 'power'
        ? [82.41, 123.47, 164.81, 246.94, 329.63] // E Power Chord with octave harmonics
        : chordType === 'synth'
        ? [164.81, 246.94, 329.63, 493.88, 659.25] // Lush Synth Pad
        : [110.0, 164.81, 220.0, 277.18, 329.63]; // Clean A major 7th

    frequencies.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const filter = ctx.createBiquadFilter();

      // Stagger notes slightly like a natural guitar pick strum (25ms per string)
      const strumDelay = idx * 0.025;
      const startTime = now + strumDelay;
      const duration = 2.4;

      osc.type = chordType === 'power' ? 'sawtooth' : chordType === 'synth' ? 'triangle' : 'sine';
      osc.frequency.setValueAtTime(freq, startTime);

      // Lowpass filter for warm, analog guitar/tube warmth
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(chordType === 'power' ? 1800 : 3200, startTime);
      filter.frequency.exponentialRampToValueAtTime(300, startTime + duration);

      // Envelope: Fast attack, natural decaying sustain
      gain.gain.setValueAtTime(0.0001, startTime);
      gain.gain.exponentialRampToValueAtTime(0.08 / Math.sqrt(frequencies.length), startTime + 0.04);
      gain.gain.exponentialRampToValueAtTime(0.00001, startTime + duration);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      osc.start(startTime);
      osc.stop(startTime + duration + 0.1);
    });
  } catch (err) {
    console.warn('AudioContext playback error:', err);
  }
}
