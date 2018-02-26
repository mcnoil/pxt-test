namespace TestModul {
    //% blockId="testModul_anzeige" block="%strip|show color %anzeigeZahl=neopixel_colors" 
    //% weight=85 blockGap=8
    //% parts="TestModul"
    function testFunc(anzeigeZahl: number) {
        basic.showNumber(anzeigeZahl)
    }
}
