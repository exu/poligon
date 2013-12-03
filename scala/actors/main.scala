import scala.actors._

class Point(val x: Double, val y: Double) {
  override def toString() = "Point(" + x + "," + y + ")"
}

abstract class Shape() {
  def draw(): Unit
}

class Circle(val center: Point, val radius: Double) extends Shape {
  def draw() = println("Circle.draw: " + this)
  override def toString() = "Circle(" + center + "," + radius + ")"
}

class Rectangle(val lowerLeft: Point, val height: Double, val width: Double)
  extends Shape {
  def draw() = println("Rectangle.draw: " + this)
  override def toString() =
    "Rectangle(" + lowerLeft + "," + height + "," + width + ")"
}

class Triangle(val point1: Point, val point2: Point, val point3: Point)
  extends Shape {
  def draw() = println("Triangle.draw: " + this)
  override def toString() =
    "Triangle(" + point1 + "," + point2 + "," + point3 + ")"
}

object ShapeDrawingActor extends Actor {
  def act() {
    loop {
      receive {
        case s: Shape => s.draw()
        case "exit" => println("exiting..."); exit
        case x: Any => println("Error: Unknown message! " + x)
      }
    }
  }
}

ShapeDrawingActor.start()

ShapeDrawingActor ! new Circle(new Point(0.0, 0.0), 1.0)
ShapeDrawingActor ! new Rectangle(new Point(0.0, 0.0), 2, 5)
ShapeDrawingActor ! new Triangle(new Point(0.0, 0.0),
  new Point(1.0, 0.0),
  new Point(0.0, 1.0))
ShapeDrawingActor ! 3.14159

ShapeDrawingActor ! "exit"
