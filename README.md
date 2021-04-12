# openSRM
Open Server Resource Monitor

## What does this program do ?
Monitors the CPU usage of a system and relays information to a webpage.

## What do I need for this program to work ?
- NodeJS
- A working Linux machine.
- A webserver to host the HTML client
### Package-wise:
- os
- express
- http
- fs
- pty
### Binary-wise:
- cpuscript.sh -> Compiled to a binary on the system you are monitoring


## FAQS:
> Why should I use this? if top or htop already exists ?

- You really shouldn't, this is my final project (which is more of a proof-of-concept) for my HWMAD class.

> Is this program a security risk considering that it needs an HTML page hosted ?

- This is meant to be used on a local network, feel free to set up SSL if you want it to be web-facing. I would recommend you make a passowrd system first though.

> What grade did you get on this project?

- Hopefully a good one !


