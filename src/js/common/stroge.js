
export default {
    //设置数据
    set(key, tata) {
        let stroge;
        try {
            stroge = JSON.stringify(tata)
        } catch (e) {
            stroge = tata
        } finally {
            localStorage.setItem(key, stroge);
        }
    },
    //得到数据
    get(key) {
        let stroge = localStorage.getItem(key);
        let result;
        try {
            result = JSON.parse(stroge)
        } catch (e) {
            result = {}
        } finally {
            return result || {}
        }
    }

}