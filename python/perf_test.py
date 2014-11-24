# -*- coding: utf-8 -*-

import subprocess as s
import re
import sys

def run_test(url, duration = 10, concurrency = 20, threads = 2):
    params = [
        "wrk",
        "-c %s" % concurrency,
        "-t %s" % threads,
        "-d %s" % duration,
        url
    ]

    output = s.check_output(params, universal_newlines=True)

    output = " ".join(output.split("\n"))
    rpss = re.findall("Requests/sec:\s*([0-9.]+)", output)[0]
    errors = re.findall("Non-2xx or 3xx responses:\s*([0-9]+)", output)

    if len(errors) < 1:
        errors = 0
    else:
        errors = int(errors[0])

    return {
        "rps" : rpss,
        "errors": errors
     }

def get_urls(id = 643):
    return {
        "tornado": "http://kt/przepis/%d" % id,
        "symfony": "http://kasia/przepis/%d.test-test-test" % id,
        "go": "http://localhost:8080/przepis"
    }



def main(iterations = 1):
    avg = {}
    sum = 0
    con = 20

    for name, url in get_urls().items():
        sum = 0
        err = 0
        print("Running %d tests for %s " % (iterations, name))
        for j in range(1, iterations+1):
            data = run_test(
                url,
                concurrency = (j * con),
                threads = int(con * j / 20),
                duration = int(j * 0.5) + 1)

            if data["errors"] == 0:
                sum += float(data["rps"])

            err += data["errors"]

        avg[name] = {
            "avg": sum / float(iterations),
            "errors": err
        }

    print(avg)


if __name__ == '__main__':
    iterations = 1
    if len(sys.argv) == 2:
        iterations = int(sys.argv[1])

    main(iterations)
