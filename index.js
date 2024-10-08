function bytesToHex(byteArray) { return Array.from(byteArray, byte => ('0' + (byte & 0xFF).toString(16)).slice(-2)).join('')
};

Java.perform(function () {
    // TrustManagerImpl SSL Pinning Bypass
    const TrustManagerImplClass = Java.use('com.android.org.conscrypt.TrustManagerImpl');
    let arrayListClass = Java.use("java.util.ArrayList");
    TrustManagerImplClass.checkTrustedRecursive.implementation = function (certs, bArr, bArr2, str, z, arrayList, arrayList2, set) {
        console.log('[+] SSL Pining Byapss');
        return arrayListClass.$new();
    };
    TrustManagerImplClass.verifyChain.implementation = function (list, list2, str, z, bArr, bArr2) {
        console.log('[+] SSL Pining Byapss');
        return untrustedChain;
    };

    // Emulator Bypass
    const deviceDClass = Java.use('Oe.d');
    deviceDClass.a.implementation = function () {
        console.log('[+] Emulator Bypass');
        return false;
    };
    deviceDClass.b.implementation = function () {
        console.log('[+] Emulator Bypass');
        return false;
    };
    deviceDClass.c.implementation = function () {
        console.log('[+] Emulator Bypass');
        return false;
    };

    // Offline payment hook
    const bClass = Java.use('Hv.b');
    bClass.a.implementation = function (secretKey, j, str, str2, j2, str3, algorithm) {
        const result = this.a(secretKey, j, str, str2, j2, str3, algorithm);
        console.log(`[+] Offline Payment Hook \nsecretKey ::${secretKey}\ni2 ::${j}\bstr       ::${str}
        str2      ::${str2}
        j2        ::${j2}
        str3      ::${str3}
        algorithm ::${algorithm}`);
        return result;
    };

    // hash hook
    const dClass = Java.use('Z7.d');
    dClass.c.overload('java.lang.String', 'java.lang.String').implementation = function (arg1, arg2) {
        const result = this.c(arg1, arg2);
        console.log(`[+] HMAC Hook\nKey ::${arg1}\nMessage ::${arg2}\nHashed ::${bytesToHex(result)}`);
        return result;
    };
});
