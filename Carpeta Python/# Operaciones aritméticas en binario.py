# Operaciones aritméticas en binario

b1 = input("Primer número binario: ")
b2 = input("Segundo número binario: ")
n1 = int(b1, 2)
n2 = int(b2, 2)
print("Suma:", bin(n1 + n2)[2:])
print("Resta:", bin(n1 - n2)[2:])
print("Multiplicación:", bin(n1 * n2)[2:])
print("División:", bin(n1 // n2)[2:])
