/**
---------------------------------------------------------------------------

Copyright (c) 2009 Dan Simpson

Auto-Generated @ Wed Aug 26 19:21:28 -0700 2009.  Do not edit this file, extend it you must.

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

    This method opens a connection to a virtual host, which is a
    collection of resources, and acts to separate multiple application
    domains within a server.
  
*/
package org.ds.amqp.protocol.connection
{
	import flash.utils.ByteArray;
	import org.ds.amqp.datastructures.*;
	import org.ds.amqp.protocol.Method;
	import org.ds.amqp.transport.Buffer;
	
	public dynamic class ConnectionOpen extends Method
	{
		public static var EVENT:String = "10/40";

		//
		public var virtualHost             :String = "";

		//
		public var capabilities            :String = "";

		//
		public var insist                  :Boolean = false;

		
		public function ConnectionOpen() {
			_classId  = 10;
			_methodId = 40;
			
			_synchronous = true;

			_responses = [ConnectionOpenOk, ConnectionRedirect];

		}


		public override function writeArguments(buf:Buffer):void {

			buf.writeShortString(this.virtualHost);
			buf.writeShortString(this.capabilities);
			buf.writeBit(this.insist);
		}
		
		public override function readArguments(buf:Buffer):void {

			this.virtualHost      = buf.readShortString();
			this.capabilities     = buf.readShortString();
			this.insist           = buf.readBit();
		}
		
		public override function print():void {
			var props:Array = [
				"virtualHost","capabilities","insist"
			];
			printObj("ConnectionOpen", props);
		}

	}
}