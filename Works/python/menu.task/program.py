eded=560
# daxil olunan ededin eded olub olmamasini yoxla
# ededin nece reqemli oldugunu cap et
# 1-den hemin ededlere qeder olan ededlerin cemi
cem=0
for x in range(560):
    if x%7==0:
        cem+=x
print(cem)