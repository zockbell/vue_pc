/**
 * 设置cookie
 * @param name cookie的名称
 * @param value cookie的值
 * @param day cookie的过期时间  单位为天
 */
export const setCookie = (name: string, value: string, day: number) => {
    if (day !== 0) { // 当设置的时间等于0时，不设置expires属性，cookie在浏览器关闭后删除
        const expires = day * 24 * 60 * 60 * 1000;
        const date = new Date(+new Date() + expires);
        document.cookie = name + '=' + escape(value) + ';expires=' + date.toUTCString();
    } else {
        document.cookie = name + '=' + escape(value);
    }
};

/**
 * 获取对应名称的cookie
 * @param name cookie的名称
 * @returns {null} 不存在时，返回null
 */
export const getCookie = (name: string) => {
    const arr: string[] = [];
    const reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)');
    if (arr === document.cookie.match(reg)) {
        return unescape(arr[2]);
    } else {
        return null;
    }
};

/**
 * 删除cookie
 * @param name cookie的名称
 */
export const delCookie = (name: string) => {
    setCookie(name, ' ', -1);
};

