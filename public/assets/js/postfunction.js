import { postWithToken } from "https://jscroot.github.io/api/croot.js";
import {setInner,getValue} from "https://jscroot.github.io/element/croot.js";
import {setCookieWithExpireHour} from "https://jscroot.github.io/cookie/croot.js";

export default function PostSignUp(){
    let target_url = "https://asia-southeast2-unistore-403306.cloudfunctions.net/MembuatTokenUser";
    let tokenkey = "token";
    let tokenvalue = "688735114a6b7df3e77edd304c4e48af34b8fb8de5fe73f9f0e4a90f5db7b49e";
    let datainjson = {
        "username": getValue("username"),
        "password": getValue("password")
    }

    postWithToken(target_url,tokenkey,tokenvalue,datainjson,responseData);

}



function responseData(result) {
    setInner("surat", result.message);
    setCookieWithExpireHour("token", result.token, 2);
    if (result.message == "Password Salah") {
        window.location.href = "gagal.html";
    } else {
        window.location.href = "berhasil.html";
    }
}