export const findElembyIndex = (descr: any[], index: number) => {
    for (let i = 0; i < descr.length; i += 1) {
        if (i === index) {
            return descr[i]
        }
    }
    return ""
}