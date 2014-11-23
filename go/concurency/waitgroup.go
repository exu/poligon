package main

import (
	"database/sql"
	"fmt"
	_ "github.com/go-sql-driver/mysql"
	"math/rand"
	"sync"
	"time"
)

func loadData(db *sql.DB, wg *sync.WaitGroup) {
	var email, pass string

	id := rand.Int31n(1000)
	err := db.QueryRow("SELECT email, password FROM users WHERE id=?", id).Scan(&email, &pass)

	if err != nil {
		fmt.Println(err)
	}

	fmt.Println("User: %s %s", email, pass)
	wg.Done()
}

func main() {
	var wg sync.WaitGroup

	db, err := sql.Open("mysql", "root@/meluser")
	defer db.Close()

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
}
