function longestPalindrome(s: string): number {
    interface Idata {
        [key: string]: number
    }
    const data: Idata = {}
    let answer: number = 0
    let middle = false
    for (let chr of s) {
        if (chr in data) data[chr]++
        else data[chr] = 1
    }
    for (const [key, value] of Object.entries(data)) {
        if (value % 2 === 0) answer += value
        else {
            answer += value - 1
            middle = true
        }
    }
    return middle ? answer + 1 : answer
};
