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

    This method returns an undeliverable message that was published
    with the "immediate" flag set, or an unroutable message published
    with the "mandatory" flag set. The reply code and text provide
    information about the reason that the message was undeliverable.
  
*/
package org.ds.amqp.protocol.basic
{
	import flash.utils.ByteArray;
	import org.ds.amqp.datastructures.*;
	import org.ds.amqp.protocol.Method;
	import org.ds.amqp.transport.Buffer;
	
	public dynamic class BasicReturn extends Method
	{
		public static var EVENT:String = "60/50";

		//
		public var replyCode               :uint = 0;

		//
		public var replyText               :String = "";

		//
		public var exchange                :String = "";

		//
		public var routingKey              :String = "";

		
		public function BasicReturn() {
			_classId  = 60;
			_methodId = 50;
			_content = true;
			

		}


		public override function writeArguments(buf:Buffer):void {

			buf.writeShortInt(this.replyCode);
			buf.writeShortString(this.replyText);
			buf.writeShortString(this.exchange);
			buf.writeShortString(this.routingKey);
		}
		
		public override function readArguments(buf:Buffer):void {

			this.replyCode        = buf.readShortInt();
			this.replyText        = buf.readShortString();
			this.exchange         = buf.readShortString();
			this.routingKey       = buf.readShortString();
		}
		
		public override function print():void {
			var props:Array = [
				"replyCode","replyText","exchange","routingKey"
			];
			printObj("BasicReturn", props);
		}

	}
}