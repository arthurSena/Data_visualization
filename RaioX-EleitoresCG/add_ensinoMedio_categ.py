
file = open("perfil_eleitorado_2004.txt")

for line in file:
	if ("PRIMEIRO GRAU" in line):
		print line.replace("PRIMEIRO GRAU","ENSINO FUNDAMENTAL").replace("\n","")
	elif ("SEGUNDO GRAU" in line):
		print line.replace("SEGUNDO GRAU","ENSINO MEDIO").replace("\n","")
	else:
		print line.replace("\n","")
