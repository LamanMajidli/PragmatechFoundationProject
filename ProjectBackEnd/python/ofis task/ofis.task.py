class Student:
    def __init__(self,name,phone,email):
        self.ad=name
        self.telefon=phone
        self.mail=email


    def adGoster(self):
        print(self.ad)
    def adsoyadGoster(self):
        print(f'{self.name}   {self.surname}')    
    def emailChek(self):
        if '@' in self.email:
            print('Dogrudur')
        else:
            print('Yanlisdir')
