/**
---------------------------------------------------------------------------

Copyright (c) 2009 Dan Simpson

Auto-Generated @ Wed Aug 26 19:21:29 -0700 2009.  Do not edit this file, extend it you must.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

---------------------------------------------------------------------------
**/

/*
Documentation

    This method tests the peer's capability to correctly marshal field
    table data.
  
*/
package org.ds.amqp.protocol.test
{
	import flash.utils.ByteArray;
	import org.ds.amqp.datastructures.*;
	import org.ds.amqp.protocol.Method;
	import org.ds.amqp.transport.Buffer;
	
	public dynamic class TestTable extends Method
	{
		public static var EVENT:String = "120/30";

		//
		public var table                   :FieldTable = new FieldTable();

		//
		public var integerOp               :uint = 0;

		//
		public var stringOp                :uint = 0;

		
		public function TestTable() {
			_classId  = 120;
			_methodId = 30;
			
			_synchronous = true;

			_responses = [TestTableOk];

		}


		public override function writeArguments(buf:Buffer):void {

			buf.writeTable(this.table);
			buf.writeOctet(this.integerOp);
			buf.writeOctet(this.stringOp);
		}
		
		public override function readArguments(buf:Buffer):void {

			this.table            = buf.readTable();
			this.integerOp        = buf.readOctet();
			this.stringOp         = buf.readOctet();
		}
		
		public override function print():void {
			var props:Array = [
				"table","integerOp","stringOp"
			];
			printObj("TestTable", props);
		}

	}
}