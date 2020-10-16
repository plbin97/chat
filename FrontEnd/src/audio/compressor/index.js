import createAudioBufferByArrayBuffer from "../createAudioBufferByArrayBuffer";
import {audioEncode, audioDecode} from "./workerComunicator";
/**
 * There is a library you can use: createAudioBufferByArrayBuffer
 */


/**
 * Compressor encoder
 * @param audioBuffer
 * @returns {Promise<Blob>}
 */
let encoder = async (audioBuffer) => {
     let arrayBuffer = audioBuffer.getChannelData(0);
    // let newBlob = await audioEncode(arrayBuffer);
    // return newBlob;
    return new Blob([arrayBuffer]);
};

/**
 * Compressor Decoder
 * @param blob
 * @returns {Promise<AudioBuffer>}
 */
let decoder = async (blob) => {

    let array = await blob.arrayBuffer();
    // Put your code here


    // You have to transfer your PCM data to Float32Array
    let floatArr = new Float32Array(array);
    let audioBuffer = createAudioBufferByArrayBuffer(floatArr);
    // You have to return an audioBuffer object in the decoder
    return audioBuffer;
};

export {encoder,decoder};