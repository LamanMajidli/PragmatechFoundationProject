from datetime import date


menu="""
1.Yeni xercin elave edilmesi
    category
    a.erzaq
    b.transport
    c.elave xercler (geyim ve s)

2.Butun xerclerin gorunmesi
3.Programdan cix

"""
xerc=0
while True:
    print(menu)
    secim=input('Elave et :')
    if secim=="1":
        mebleg=input('meblegin qederi? :')
        category=input('hansi meqsedle')
        tarix=str(input('tarixi qeyd edin(yyyy-mm-dd):'))
        xerc={
            'xerclenen':mebleg,
            'meqsed':category,
            'tarix':tarix,
        }
        if kategoriya=='a':
            file=open('xerc.txt','a')
            file.write(f'{xerc}:{xerc["xerclenen"]} AZN {xerc["tarix"]}  tarixinde erzaqa xerc olunub  \n')
        elif kategoriya=='b':
            file=open('xerc.txt','a')
            file.write(f'{xerc}:{xercc["xerclenen"]} AZN {xercs["tarix"]}  tarixinde transporta xerc olunub \n')
        elif kategoriya=='c':
            file=open('xerc.txt','a')
            file.write(f'{xerc}:{xerc["xerclenen"]} AZN {xerc["tarix"]}  tarixinde elave xerclere xerc olunub \n')
    elif secim=="2":
         print('Butun xerclerin gorunmesi')
    elif secim=="3":
         break       
        


