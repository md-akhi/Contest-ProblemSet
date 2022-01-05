// 1
package main

import "fmt"

func main() {
    var a , b int
    fmt.Scan(&a , &b)
    fmt.Println(a + b)
}




// 2
package main

import "fmt"

func main() {
    var sum , n , a int
    fmt.Scan(&n)
    sum = 0
    for i := 0 ; i < n ; i++{
        fmt.Scan(&a)
        sum = sum + a
    }
    fmt.Println(sum)
}