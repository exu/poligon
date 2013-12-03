#!/bin/sh
exec scala -savecompiled "$0" "$@"
!#

import java.io._

class DocumentationFile(val file: File) {

  val name = file.getName
  val length = file.length
  val isTranslated = (firstLine.indexOf("Esta página todavía no ha sido traducida al castellano") == -1)

  def firstLine = new BufferedReader(new FileReader(file)).readLine
}

object HelloWorld {
    def main(args: Array[String]) {

        val docs = new File(".").listFiles
          //.filter(_.getName.endsWith(".scala"))   // process only textile files
          .map(println(_))
    }
}

HelloWorld.main(args)
