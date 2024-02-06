type HexInputProps = {
    onChange: (newRGB:{r:number,g:number,b:number} | null) => void
}

const HexInput = (hexInputProps: HexInputProps) => {
    return (<input onChange={(e:React.ChangeEvent<HTMLInputElement>) => hexInputProps.onChange(hexToRGB(e.target.value))}></input>)
}

function hexToRGB(hex: string) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

export default HexInput

