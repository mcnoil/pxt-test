
function usageExample(): void {
    let input0: number = 7;
    let input1: number = 8;
    let output0: number = execFunc(customFuncExample, input0, input1);
    basic.showNumber(output0);
}

function customFuncExample(highDigit: number, lowDigit: number): uint8 {
    const base: number = 10;
    if (highDigit < 0 || highDigit >= base || lowDigit < 0 || lowDigit >= base) {
        return 255;
        // TODO Exception werfen statt special return value
    }
    return highDigit * base + lowDigit;
}

// Bit sizes are not supported for locals and parameters but for return types.
function execFunc(f: ((p0: number, p1: number) => { }), param0: number, param1: number): number {
    // TODO f's ReturnType angeben (statt "{}"-ReturnType-Missverständnis)
    return 0;
    // TODO f(param0, param1) aufrufen statt Dummy-Return
}

// "Simulator neu starten" ist hilfreich als "überprüfe meinen behobenen Fehler erneut".
// Variablen können Funktionen als Wert enthalten.
let funcVariable = execFunc;
