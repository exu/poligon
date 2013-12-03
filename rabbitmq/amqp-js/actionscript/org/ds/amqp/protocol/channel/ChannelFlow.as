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

    This method asks the peer to pause or restart the flow of content
    data. This is a simple flow-control mechanism that a peer can use
    to avoid oveflowing its queues or otherwise finding itself receiving
    more messages than it can process.  Note that this method is not
    intended for window control.  The peer that receives a request to
    stop sending content should finish sending the current content, if
    any, and then wait until it receives a Flow restart method.
  
*/
package org.ds.amqp.protocol.channel
{
	import flash.utils.ByteArray;
	import org.ds.amqp.datastructures.*;
	import org.ds.amqp.protocol.Method;
	import org.ds.amqp.transport.Buffer;
	
	public dynamic class ChannelFlow extends Method
	{
		public static var EVENT:String = "20/20";

		//
		public var active                  :Boolean = false;

		
		public function ChannelFlow() {
			_classId  = 20;
			_methodId = 20;
			
			_synchronous = true;

			_responses = [ChannelFlowOk];

		}


		public override function writeArguments(buf:Buffer):void {

			buf.writeBit(this.active);
		}
		
		public override function readArguments(buf:Buffer):void {

			this.active           = buf.readBit();
		}
		
		public override function print():void {
			var props:Array = [
				"active"
			];
			printObj("ChannelFlow", props);
		}

	}
}