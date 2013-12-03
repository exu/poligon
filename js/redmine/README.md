Redmine time entry plugin helper for emacs
------------------------------------------

You can integrate it with org-mode. Put cursor on header with clocks set 
and issue_id in tag on first place. Then hit F5 (change to key of your choice)


```org
** TODO Time tracking                                                  :5353:4343:
   CLOCK: [2013-02-01 pią 10:27]--[2013-02-01 pią 12:03] =>  1:36
   CLOCK: [2013-02-01 pią 10:20]--[2013-02-01 pią 10:27] =>  0:07

```

```elisp

(defun send-to-redmine () 
  (interactive)
  (setq redmine-command-path "/home/exu/Workspace/poligon/js/redmine/redmine_timeentry.js")
  (setq command (format "node %s -i '%s' -h '%f' %s"
                        redmine-command-path
                        (car (org-get-tags-at))
                        (/ (org-clock-get-clocked-time) 60.0)
                        (nth 4 (org-heading-components))))
  (message command)
  (shell-command command "* REDMINE TIMETRACKING *")
  )
```



