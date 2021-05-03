def fibonacci(n: int) -> int:
    fib = [0, 1]
    if n <= 1:
        return fib[n]
    for i in range(2, n + 1):
        fib.append(fib[i - 2] + fib[i - 1])
    return fib[-1]   

# Test Cases
print(fibonacci(0)) # 0
print(fibonacci(1)) # 1
print(fibonacci(10)) # 55
print(fibonacci(20)) # 6765
