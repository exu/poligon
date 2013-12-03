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

    This method allows a client to reject a message.  It can be used to
    interrupt and cancel large incoming messages, or return untreatable
    messages to their original queue.
  nameruletestamq_basic_21content
    The server SHOULD be capable of accepting and process the Reject
    method while sending message content with a Deliver or Get-Ok
    method.  I.e. the server should read and process incoming methods
    while sending output frames.  To cancel a partially-send content,
    the server sends a content body frame of size 1 (i.e. with no data
    except the frame-end octet).
  nameruletestamq_basic_22content
    The server SHOULD interpret this method as meaning that the client
    is unable to process the message at this time.
  namerulecontent
    A client MUST NOT use this method as a means of selecting messages
    to process.  A rejected message MAY be discarded or dead-lettered,
    not necessarily passed to another client.
  
*/
package org.ds.amqp.protocol.basic
{
	import flash.utils.ByteArray;
	import org.ds.amqp.datastructures.*;
	import org.ds.amqp.protocol.Method;
	import org.ds.amqp.transport.Buffer;
	
	public dynamic class BasicReject extends Method
	{
		public static var EVENT:String = "60/90";

		//
		public var deliveryTag             :uint = 0;

		//
		public var requeue                 :Boolean = false;

		
		public function BasicReject() {
			_classId  = 60;
			_methodId = 90;
			
			

		}


		public override function writeArguments(buf:Buffer):void {

			buf.writeLongLong(this.deliveryTag);
			buf.writeBit(this.requeue);
		}
		
		public override function readArguments(buf:Buffer):void {

			this.deliveryTag      = buf.readLongLong();
			this.requeue          = buf.readBit();
		}
		
		public override function print():void {
			var props:Array = [
				"deliveryTag","requeue"
			];
			printObj("BasicReject", props);
		}

	}
}