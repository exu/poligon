package main

import (
	_ "github.com/lib/pq"
	"database/sql"
	"log"
	"fmt"
	"time"
)

func main() {
	db, err := sql.Open("postgres", "user=jacek.wysocki dbname=crm host=10.0.0.221")
	rows, err := db.Query("SELECT event_id, event_time FROM  events.basic LIMIT 100")

	if err != nil {
		log.Fatal(err)
	}

	for rows.Next() {
		var id int
		var date time.Time
		if err := rows.Scan(&id, &date); err != nil {
			log.Fatal(err)
		}
		fmt.Printf("%d case %s\n", id, date)
	}
	if err := rows.Err(); err != nil {
		log.Fatal(err)
	}
}
