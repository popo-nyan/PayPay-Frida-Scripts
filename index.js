Java.perform(function () {
        const deviceDClass = Java.use('jp.ne.paypay.android.device.d');

        deviceDClass.a.overload().implementation = function () {
            console.log('[+] Emulator Bypass');
            return false;
        };

        deviceDClass.b.overload().implementation = function () {
            console.log('[+] Emulator Bypass');
            return false;
        };

        deviceDClass.c.overload().implementation = function () {
            console.log('[+] Emulator Bypass');
            return false;
        };

        const bClass = Java.use('jp.ne.paypay.offlinepayment.b');

        bClass.a.overload('java.lang.String', 'long', 'java.lang.String', 'java.lang.String', 'long', 'java.lang.String', 'java.lang.String').implementation = function (secretKey, j, str, str2, j2, str3, algorithm) {
            const result = this.a(secretKey, j, str, str2, j2, str3, algorithm);
            console.log(`[+] Offline Payment Hook secretKey ::${secretKey} i2 ::${j} str ::${str} str2 ::${str2} j2 ::${j2} str3 ::${str3} algorithm ::${algorithm}`);
            return result;
        };
        const networkDClass = Java.use('com.paytm.pai.network.d');

        networkDClass.c.overload('java.lang.String', 'java.lang.String').implementation = function (arg1, arg2) {
            const result = this.c(arg1, arg2);
            console.log(`[+] HMAC Hook Key: ${arg1} Message: ${arg2}`);
            return result;
        };
    }
);
