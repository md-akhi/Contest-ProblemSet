# Python2
# 1
s = raw_input()
a, b = s.split(" ")
print int(a) + int(b)


# 2
ans = 0
n = int(raw_input())
str = raw_input().split(" ")
for i in range(n) :
    ans = ans + int(str[i])
print ans




# Python3
# 1
s = input()
a, b = s.split(" ")
print(int(a) + int(b))



# 2
ans = 0
n = int(input())
str = input().split(" ")
for i in range(n) :
    ans = ans + int(str[i])
print(ans)