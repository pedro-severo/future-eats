export function getVerifyingDigit(arr: number[]) {
    const reduced = arr.reduce(
        (sum, digit, index) => sum + digit * (arr.length - index + 1),
        0
    );
    return ((reduced * 10) % 11) % 10;
}
