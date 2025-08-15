# Suma de números primos del 1 al 100

suma = 0
for num in range(2, 101):
    primo = True
    for i in range(2, int(num**0.5) + 1):
        if num % i == 0:
            primo = False
            break
    if primo:
        suma += num
print("La suma es:", suma)