package main

import "fmt"

import "database/sql"
import _ "github.com/go-sql-driver/mysql"
import "sync"
import "time"
import "math/rand"

func simpleLoadData(db *sql.DB) {
	var s string

	id := rand.Int31n(1000)
	err := db.QueryRow("SELECT email  FROM users WHERE id=?", id).Scan(&s)

	if err != nil {
		fmt.Println(err)
	}
	// fmt.Println(s, id)
}

func loadData(db *sql.DB, wg *sync.WaitGroup) {
	var email, pass string

	id := rand.Int31n(1000)
	err := db.QueryRow("SELECT email, password FROM users WHERE id=?", id).Scan(&email, &pass)

	if err != nil {
		fmt.Println(err)
	}

	// fmt.Println(s, id)
	wg.Done()
}

func main() {
	var wg sync.WaitGroup

	db, err := sql.Open("mysql", "root@/meluser")
	if err != nil {
		fmt.Print(err)
	}

	start := time.Now()

	count := 100
	wg.Add(count)

	for i := 0; i < count; i++ {
		go loadData(db, &wg)
	}

	wg.Wait()
	elapsed := time.Since(start)
	fmt.Println("go Done in %s", elapsed)

	start = time.Now()

	for i := 0; i < count; i++ {
		simpleLoadData(db)
	}

	fmt.Println("... %s", elapsed)

	wg.Wait()
	elapsed = time.Since(start)
	fmt.Println("simple Done in %s", elapsed)

}
