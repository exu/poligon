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

    This method delivers a message to the client, via a consumer.  In
    the asynchronous message delivery model, the client starts a
    consumer using the Consume method, then the server responds with
    Deliver methods as and when messages arrive for that consumer.
  nameruletestamq_basic_19content
    The server SHOULD track the number of times a message has been
    delivered to clients and when a message is redelivered a certain
    number of times - e.g. 5 times - without being acknowledged, the
    server SHOULD consider the message to be unprocessable (possibly
    causing client applications to abort), and move the message to a
    dead letter queue.
  
*/
package org.ds.amqp.protocol.basic
{
	import flash.utils.ByteArray;
	import org.ds.amqp.datastructures.*;
	import org.ds.amqp.protocol.Method;
	import org.ds.amqp.transport.Buffer;
	
	public dynamic class BasicDeliver extends Method
	{
		public static var EVENT:String = "60/60";

		//
		public var consumerTag             :String = "";

		//
		public var deliveryTag             :uint = 0;

		//
		public var redelivered             :Boolean = false;

		//
		public var exchange                :String = "";

		//
		public var routingKey              :String = "";

		
		public function BasicDeliver() {
			_classId  = 60;
			_methodId = 60;
			_content = true;
			

		}


		public override function writeArguments(buf:Buffer):void {

			buf.writeShortString(this.consumerTag);
			buf.writeLongLong(this.deliveryTag);
			buf.writeBit(this.redelivered);
			buf.writeShortString(this.exchange);
			buf.writeShortString(this.routingKey);
		}
		
		public override function readArguments(buf:Buffer):void {

			this.consumerTag      = buf.readShortString();
			this.deliveryTag      = buf.readLongLong();
			this.redelivered      = buf.readBit();
			this.exchange         = buf.readShortString();
			this.routingKey       = buf.readShortString();
		}
		
		public override function print():void {
			var props:Array = [
				"consumerTag","deliveryTag","redelivered","exchange","routingKey"
			];
			printObj("BasicDeliver", props);
		}

	}
}