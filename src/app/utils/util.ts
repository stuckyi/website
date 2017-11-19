// p5js의 map()기능과 동일하다.
export function getMap(val, start1, stop1, start2, stop2) {
    console.log("getMax!");
    const newVal = ((val - start1) / (stop1 - start1)) * (stop2 - start2) + start2;
    if (start2 < stop2) { 
        return Math.max(Math.min(newVal, stop2), start2);   // constrain
    } else {
        return Math.max(Math.min(newVal, start2), stop2);  // constrain
    }
}
// 값의 범위를 제한한다.
export function getConstrain(n, low, high) {
    return Math.max(Math.min(n, high), low);
}