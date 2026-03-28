 import os

def show_help():
    print("""
Available commands:
help   - Show this help message
time   - Show current time
clear  - Clear terminal
exit   - Exit bot
""")

def main():
    print("🤖 Terminal Bot Started! Type 'help' for commands.")

    while True:
        cmd = input(">> ").lower()

        if cmd == "help":
            show_help()

        elif cmd == "time":
            from datetime import datetime
            print("Current Time:", datetime.now())

        elif cmd == "clear":
            os.system('cls' if os.name == 'nt' else 'clear')

        elif cmd == "exit":
            print("Bot shutting down...")
            break

        else:
            print("Unknown command! Type 'help'")

if __name__ =᭄❥☆ܔ𝐁𝐥𝐚𝐜𝐤 𝐃𝐞𝐯𝐢𝐥 ፝֟፝.𖤍࿐= "__main__":
    main(👾)
