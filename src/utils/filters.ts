/**
 * 全局过滤器
 */
// 保存两位小数
export const keepTwoNum = (value: number): string => {
 return value.toFixed(2);
};

// 折扣金额添加人民币标识(￥)
export const discountRmbPrice = (value: number): string => {
    return '￥' + (value).toFixed(2);
};

// 添加过滤器，手机号中间四位用*号代码
export const oldCellphone = (value: string) => {
    const start = value.slice(0, 4);
    const end = value.slice(-4);
    return `${start}****${end}`;
};

// 将秒钟转换成分钟
export const secondToMinute = (value: number) => {
    if (value < 10) {
        return '00:' + addZero(value);
    } else if (value >= 10 && value < 60) {
        return '00:' + addZero(value);
    } else if (value >= 60) {
        const m = Math.floor(value / 60);
        const s = value % 60;
        return addZero(m) + ':' + addZero(s);
    }
};

// 判断数字小于10，在前添加0
export const addZero = (value: number) => {
    return value < 10 ? '0' + value : value;
};
