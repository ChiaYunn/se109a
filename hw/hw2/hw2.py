import math

def bsearch(a, s):
    alen = len(a)
    f = 0
    t = alen

    while True:
        if f > t:
            return None

        m = math.floor((f + t) / 2)

        if m > alen - 1:
            return None

        if a[m] == s:
            return m
        elif a[m] < s:
            f = m + 1
        else:
            t = m - 1

a = [1, 3, 4, 6, 7, 8]
print("a: {}".format(a))

s = eval(input('enter a number to find its place：'))

ans = bsearch(a, s)
print("{} is placed {} in a: {}".format(s, ans, a))
