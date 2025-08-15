# Pedir un número al usuario
decimal = int(input("Ingresa un número decimal: "))
binario = bin(decimal)       
octal = oct(decimal)         
hexadecimal = hex(decimal)  

print("En binario:", binario)
print("En octal:", octal)
print("En hexadecimal:", hexadecimal)