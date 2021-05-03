function fibonacci(n) {
    let fib = [0, 1]
    
    if(n <= 1) return fib[n]
    
    for(let i = 2; i <= n; i++){
        fib.push(fib[i-1] + fib[i-2])
    }
    console.log('fib', fib)
    return fib.pop()
}

// Test Cases
console.log(fibonacci(0)) // 0
console.log(fibonacci(1)) // 1
console.log(fibonacci(10)) // 55
console.log(fibonacci(20)) // 6765
