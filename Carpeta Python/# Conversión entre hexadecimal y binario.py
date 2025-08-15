# Conversión entre hexadecimal y binario

# Hexadecimal a binario
hex_num = input("Ingresa un número hexadecimal: ")
decimal = int(hex_num, 16)
binario = bin(decimal)[2:]
print("En binario:", binario)

# Binario a hexadecimal
bin_num = input("Ingresa un número binario: ")
decimal = int(bin_num, 2)
hexadecimal = hex(decimal)[2:]
print("En hexadecimal:", hexadecimal)