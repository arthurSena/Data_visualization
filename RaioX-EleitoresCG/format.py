import codecs
import unicodedata
import sys

def remove_accents(input_str):
    nkfd_form = unicodedata.normalize('NFKD', input_str)
    only_ascii = nkfd_form.encode('ASCII', 'ignore')
    return only_ascii

programacao = codecs.open(sys.argv[1],encoding='latin1')

for lines in programacao:
	print remove_accents(lines.strip())


