import Vue from 'vue'
const utils = {
    btoa: (input)  => {
        let str = input;
        let output = '';
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

        for (let block = 0, charCode, i = 0, map = chars;
             str.charAt(i | 0) || (map = '=', i % 1);
             output += map.charAt(63 & block >> 8 - i % 1 * 8)) {

            charCode = str.charCodeAt(i += 3/4);

            if (charCode > 0xFF) {
                throw new Error("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");
            }

            block = block << 8 | charCode;
        }

        return output;
    },
    generateErrorString(route, errorMsg, additional = '') {
        let corrID = utils.getCorrID(route, additional);
        return `<strong>${errorMsg}</strong> Please try again in a moment, and if the issue persists, contact us at <a class="expand-link" href="mailto:masseymustangs2020@gmail.com?subject=Incident report with correlation ID ${corrID}">masseymustangs2020@gmail.com</a> with the correlation ID: <span style="overflow-wrap: break-word; word-wrap:break-word;">${corrID}</span>`
    },
    getCorrID (route, additional = '') {
        let cxtPath = "";
        try {
            cxtPath = route.fullPath;
        }
        catch {
            cxtPath = "unknown"
        }
        let info = {
            time: Math.round((new Date()).getTime() / 1000),
            path: cxtPath,
            additional: additional
        };
        try{
            return utils.btoa(encodeURIComponent(JSON.stringify(info)));
        }
        catch {
            return "Unable to generate a correlation ID. Please provide the following information instead: the time of the incident, the page your are currently on, and what you are trying to do."
        }
    },
};

export default ({app}, inject) => {
    inject('vmss60', utils);
}