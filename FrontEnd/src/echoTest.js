import Audio from "./audio";
import EchoTest from "./comunicateToBackEnd/echoTest";
import {encoder,decoder} from "./audio/compressor";

let audio;
let echo;

let echoTest = async () => {
    await voiceRecord();
}

let voiceRecord = async () => {
    audio = new Audio();

    if (!await audio.webAudioRecordInitialize()) {
        console.log("Audio Initialize failed");
        return;
    }

    echo = new EchoTest();
    await echo.settingReceiveVoicePackage(voiceReceiveFromServer);
    await echo.initializeEcho();

    await audio.PCMRecordHandler(voiceRecordPCMHandle)

}

let voiceRecordPCMHandle = async (audioBuffer) => {
    let encodedBuffer = await encoder(audioBuffer);
    await echo.sendVoicePackage(encodedBuffer);
}

let voiceReceiveFromServer = async (blob) => {
    let audioBuffer = await decoder(blob);
    await audio.playPCM(audioBuffer);
}

export default echoTest;