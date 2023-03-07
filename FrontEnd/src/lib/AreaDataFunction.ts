export const extractField = (fields : Map<string, string>) => {
    const filteredField = new Map<string, string>();
    if (Object.keys(fields).length === 0) {
        return filteredField;
    } else {
        for (let [key, value] of Object.entries(fields)) {
            if (key !== "nbFields") {
                filteredField.set(key, value);
            }
        }
    }
    return filteredField
}
