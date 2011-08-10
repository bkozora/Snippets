(*
------------------------------------------------------------------------------------
Copyright [yyyy] [name of copyright owner]

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
============================================
*)
(*
Sometimes it's quicker to call the script than open Terminal and restart server manually
*)

property applicationName : "Terminal"
tell application applicationName
	activate
	tell application "System Events"
		tell front window of process applicationName
			try
				key code 8 using control down
				keystroke "python manage.py runserver" & return
			on error theError
				display dialog ("Sorry, an error occured:" & theError) buttons "OK" default button "OK" with icon stop
			end try
		end tell
	end tell
	tell application "TextMate"
		activate
	end tell
end tell
