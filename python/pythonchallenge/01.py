import string

intab  = "abcdefghijklmnopqrstuwxyz0123456789"
outtab = "cdefghijklmnopqrstuwxyzab2345678901"
s = "g fmnc wms bgblr rpylqjyrc gr zw fylb. rfyrq ufyr amknsrcpq ypc dmp. bmgle gr gl zw fylb gq glcddgagclr ylb rfyr'q ufw rfgq rcvr gq qm jmle. sqgle qrpgle.kyicrpylq() gq pcamkkclbcb. lmu ynnjw ml rfc spj."
print(s.translate(string.maketrans(intab, outtab)))
print("http://www.pythonchallenge.com/pc/def/map.html".translate(string.maketrans(intab, outtab)))
