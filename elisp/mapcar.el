(defun open-translate-site (query-string)
  "Open browser with google translate"
  (interactive "sEnter string to translate: " )
  (setq langs (list
               (list "en" "en/pl")
               (list "pl" "pl/en")
               ))

  (setq lang (ido-completing-read
              "Dirtection: "
              (mapcar (lambda (a) (car a)) langs)
              ))



  (mapcar (lambda (a)
            (message lang)
            (if (string= lang (car a))
                (setq direction (cadr a))
              ))
          langs)

  (setq url (concat "http://translate.google.pl/#" direction  "/" query-string))
  (message (concat "Going to: " url))
  (browse-url url)
  )
