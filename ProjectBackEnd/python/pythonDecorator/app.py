

def ikiye_vur(func):
    def wrapper(x, y):
        func(x*2, y*2)
    return wrapper

@ikiye_vur
def cem(x, y):
    print(x + y)
    
cem(2, 2)    