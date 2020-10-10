import {audioBufferSize} from "../../config";
let audioContext = new (window.AudioContext || window.webkitAudioContext);
let createAudioBufferByArrayBuffer = (arrayBuffer, sampleRate) => {
    let audioBuffer = audioContext.createBuffer(1, audioBufferSize, sampleRate);
    audioBuffer.copyToChannel(arrayBuffer, 0,0);
    return audioBuffer;
};

export default createAudioBufferByArrayBuffer;