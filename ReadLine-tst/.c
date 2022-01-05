// 1
#include <stdio.h>

int main()
{
    int a, b;
    scanf("%d %d", &a, &b);
    printf("%d\n", a + b);
    return 0;
}




// 2
#include <stdio.h>

int main()
{
    int ans = 0, n, a;
    scanf("%d", &n);
    for(int i = 0; i < n; i++)
    {
        scanf("%d", &a);
        ans += a;
    }
    printf("%d\n", ans);
    return 0;
}