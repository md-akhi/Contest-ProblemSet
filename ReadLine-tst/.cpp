//1
#include <iostream>
using namespace std;

int main()
{
    int a, b;
    cin >> a >> b;
    cout << a + b << endl;
    return 0;
}





// 2
#include <iostream>
using namespace std;

int main()
{
    int ans = 0, n;
    cin >> n;
    for(int i = 0; i < n; i++)
    {
        int a;
        cin >> a;
        ans += a;
    }
    cout << ans << endl;
    return 0;
}